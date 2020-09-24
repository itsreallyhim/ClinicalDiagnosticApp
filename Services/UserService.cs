﻿using ClinicalDiagnosticApp.Helpers;
using ClinicalDiagnosticApp.Migrations.SqlServerMigrations;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ClinicalDiagnosticApp.Services
{
	public interface IUserService
	{
		Users Authenticate(string emailAddress, string password);
		IEnumerable<Users> GetAll();
		Users GetById(int id);
		Users Create(Users user, string password);
		void Update(Users user, string password = null);
		void Delete(int id);
	}


	public class UserService : IUserService
	{
		private MillerHealthContext _context;

		public UserService(MillerHealthContext context)
		{
			_context = context;
		}

		public Users Authenticate(string emailAddress, string password)
		{
			if (string.IsNullOrEmpty(emailAddress) || string.IsNullOrEmpty(password))
				return null;


			var user = _context.Users.SingleOrDefault(x => x.EmailAddress == emailAddress);

			// check if user exists
			if (user == null)
				return null;

			// check if password is correct
			if (!VerifyPasswordHash(password, user.PasswordHash, user.PasswordSalt))
				return null;

			// authentication successful
			return user.WithoutPassword();
		}

		public IEnumerable<Users> GetAll()
		{
			return _context.Users.WithoutPasswords();
		}

		public Users GetById(int id)
		{
			var user = _context.Users.FirstOrDefault(nc => nc.Id == id);
			return user.WithoutPassword();
		}

		public Users Create(Users user, string password)
		{
			// validation
			if (string.IsNullOrWhiteSpace(password))
				throw new AppException("Password is required");

			if (_context.Users.Any(x => x.EmailAddress == user.EmailAddress))
				throw new AppException("This email address has already been registered to an account");

			byte[] passwordHash, passwordSalt;
			CreatePasswordHash(password, out passwordHash, out passwordSalt);

			user.PasswordHash = passwordHash;
			user.PasswordSalt = passwordSalt;

			user.Role = Role.Patient;

			_context.Users.Add(user);
			_context.SaveChanges();

			return user;
		}

		public void Update(Users userParam, string password = null)
		{
			var user = _context.Users.Find(userParam.Id);

			if (user == null)
				throw new AppException("User not found");

			// update email address if it has changed
			if (!string.IsNullOrWhiteSpace(userParam.EmailAddress) && userParam.EmailAddress != user.EmailAddress)
			{
				// throw error if the new email address is already taken
				if (_context.Users.Any(x => x.EmailAddress == userParam.EmailAddress))
					throw new AppException("This email address has already been registered to an account");

				user.EmailAddress = userParam.EmailAddress;
			}

			// update user properties if provided
			if (!string.IsNullOrWhiteSpace(userParam.FirstName))
				user.FirstName = userParam.FirstName;

			if (!string.IsNullOrWhiteSpace(userParam.LastName))
				user.LastName = userParam.LastName;

			// update password if provided
			if (!string.IsNullOrWhiteSpace(password))
			{
				byte[] passwordHash, passwordSalt;
				CreatePasswordHash(password, out passwordHash, out passwordSalt);

				user.PasswordHash = passwordHash;
				user.PasswordSalt = passwordSalt;
			}

			_context.Users.Update(user);
			_context.SaveChanges();
		}

		public void Delete(int id)
		{
			var user = _context.Users.Find(id);
			if (user != null)
			{
				_context.Users.Remove(user);
				_context.SaveChanges();
			}
		}

		// private helper methods

		private static void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
		{
			if (password == null) throw new ArgumentNullException("password");
			if (string.IsNullOrWhiteSpace(password)) throw new ArgumentException("Value cannot be empty or whitespace only string.", "password");

			using (var hmac = new System.Security.Cryptography.HMACSHA512())
			{
				passwordSalt = hmac.Key;
				passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
			}
		}

		private static bool VerifyPasswordHash(string password, byte[] storedHash, byte[] storedSalt)
		{
			if (password == null) throw new ArgumentNullException("password");
			if (string.IsNullOrWhiteSpace(password)) throw new ArgumentException("Value cannot be empty or whitespace only string.", "password");
			if (storedHash.Length != 64) throw new ArgumentException("Invalid length of password hash (64 bytes expected).", "passwordHash");
			if (storedSalt.Length != 128) throw new ArgumentException("Invalid length of password salt (128 bytes expected).", "passwordHash");

			using (var hmac = new System.Security.Cryptography.HMACSHA512(storedSalt))
			{
				var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
				for (int i = 0; i < computedHash.Length; i++)
				{
					if (computedHash[i] != storedHash[i]) return false;
				}
			}

			return true;
		}
	}
}
