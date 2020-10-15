using System;
using System.Collections.Generic;

namespace ClinicalDiagnosticApp.Migrations.SqlServerMigrations
{
    public partial class AssessmentResponses
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int AssessmentId { get; set; }

        public string Answers { get; set; }
    }
}
