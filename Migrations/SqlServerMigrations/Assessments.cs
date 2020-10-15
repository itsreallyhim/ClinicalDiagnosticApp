using System;
using System.Collections.Generic;

namespace ClinicalDiagnosticApp.Migrations.SqlServerMigrations
{
    public partial class Assessments
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }

        public string Questions { get; set; }
    }
}
