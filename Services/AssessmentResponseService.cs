using ClinicalDiagnosticApp.Helpers;
using ClinicalDiagnosticApp.Migrations.SqlServerMigrations;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ClinicalDiagnosticApp.Services
{
    public interface IAssessmentResponseService
    {

        IEnumerable<AssessmentResponses> GetAll();
        IEnumerable<AssessmentResponses> GetByUserId(int id);
        AssessmentResponses GetById(int id);

        AssessmentResponses Create(AssessmentResponses assessmentResponse);

        void Update(AssessmentResponses assessmentResponse);
        void Delete(int id);
    }


    public class AssessmentResponseService : IAssessmentResponseService
    {
        private MillerHealthContext _context;

        public AssessmentResponseService(MillerHealthContext context)
        {
            _context = context;
        }



        public IEnumerable<AssessmentResponses> GetAll()
        {
            return _context.AssessmentResponses;
        }

        public IEnumerable<AssessmentResponses> GetByUserId(int id)
        {
            return _context.AssessmentResponses.Where(x => x.UserId == id);
        }


        public AssessmentResponses GetById(int id)
        {
            var assessment = _context.AssessmentResponses.FirstOrDefault(nc => nc.Id == id);
            return assessment;
        }

        public AssessmentResponses Create(AssessmentResponses assessmentResponse)
        {
            // validation


            _context.AssessmentResponses.Add(assessmentResponse);
            _context.SaveChanges();

            return assessmentResponse;
        }

        public void Update(AssessmentResponses assessmentResponseParam)
        {
            var assessmentResponse = _context.AssessmentResponses.Find(assessmentResponseParam.Id);

            if (assessmentResponse == null)
                throw new AppException("Assessment Response not found");

            // update Answers if it has changed
            if (!string.IsNullOrWhiteSpace(assessmentResponseParam.Answers) && assessmentResponseParam.Answers != assessmentResponse.Answers)
            {

                assessmentResponse.Answers = assessmentResponseParam.Answers;
            }


            _context.AssessmentResponses.Update(assessmentResponse);
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var assessmentResponse = _context.AssessmentResponses.Find(id);
            if (assessmentResponse != null)
            {
                _context.AssessmentResponses.Remove(assessmentResponse);
                _context.SaveChanges();
            }
        }

    }
}
