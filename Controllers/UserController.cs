using System;
using System.Collections.Generic;
using System.Linq;
using ClinicalDiagnosticApp.Data;
using ClinicalDiagnosticApp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace ClinicalDiagnosticApp.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class UserController : ControllerBase
	{
		private readonly MillerHealthContext _context;

		public UserController(MillerHealthContext context)
		{
			_context = context;
		}

		[HttpGet]
		public IEnumerable<User> Get()
		{

			var results = _context.User.ToList();

			return results;
			
		}
	}
	}
