using System.ComponentModel.DataAnnotations;

namespace ClinicalDiagnosticApp.Models.Users
{
    public class AuthenticateModel
    {
        [Required]
        public string EmailAddress { get; set; }

        [Required]
        public string Password { get; set; }
    }
}
