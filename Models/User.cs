﻿using System;
using System.Collections.Generic;

namespace ClinicalDiagnosticApp.Models
{
    public partial class User
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string FamilyName { get; set; }
        public string EmailAddress { get; set; }
    }
}
