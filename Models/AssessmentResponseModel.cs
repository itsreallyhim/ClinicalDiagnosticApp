namespace ClinicalDiagnosticApp.Models.AssessmentResponses
{
    public class AssessmentResponseModel
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int AssessmentId { get; set; }
        public string Answers { get; set; }
    }
}
