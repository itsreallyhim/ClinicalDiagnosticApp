using ClinicalDiagnosticApp.Helpers;
using ClinicalDiagnosticApp.Migrations.SqlServerMigrations;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ClinicalDiagnosticApp.Services
{
    public interface IAssessmentService
    {

        IEnumerable<Assessments> GetAll();
        Assessments GetById(int id);
        Assessments Create(Assessments assessment);
        void Update(Assessments assessment);
        void Delete(int id);
    }


    public class AssessmentService : IAssessmentService
    {
        private MillerHealthContext _context;

        public AssessmentService(MillerHealthContext context)
        {
            _context = context;
        }



        public IEnumerable<Assessments> GetAll()
        {
            return _context.Assessments;
        }

        public Assessments GetById(int id)
        {
            var assessment = _context.Assessments.FirstOrDefault(nc => nc.Id == id);
            return assessment;
        }

        public Assessments Create(Assessments assessment)
        {
            // validation

            if (_context.Assessments.Any(x => x.Title == assessment.Title))
                throw new AppException("This Assessment has the same title as an existing assessment.");


            _context.Assessments.Add(assessment);
            _context.SaveChanges();

            return assessment;
        }

        public void Update(Assessments assessmentParam)
        {
            var assessment = _context.Assessments.Find(assessmentParam.Id);

            if (assessment == null)
                throw new AppException("Assessment not found");

            // update Title if it has changed
            if (!string.IsNullOrWhiteSpace(assessmentParam.Title) && assessmentParam.Title != assessment.Title)
            {
                // throw error if the new email address is already taken
                if (_context.Assessments.Any(x => x.Title == assessmentParam.Title))
                    throw new AppException("There is already another assessment with this title.");

                assessment.Title = assessmentParam.Title;
            }

            // update user properties if provided
            if (!string.IsNullOrWhiteSpace(assessmentParam.Description))
                assessment.Description = assessmentParam.Description;

            if (!string.IsNullOrWhiteSpace(assessmentParam.Questions))
                assessment.Questions = assessmentParam.Questions;


            _context.Assessments.Update(assessment);
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var assessment = _context.Assessments.Find(id);
            if (assessment != null)
            {
                _context.Assessments.Remove(assessment);
                _context.SaveChanges();
            }
        }

    }
}
