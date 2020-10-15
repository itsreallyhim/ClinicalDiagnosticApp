using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using ClinicalDiagnosticApp.Helpers;
using ClinicalDiagnosticApp.Migrations.SqlServerMigrations;
using ClinicalDiagnosticApp.Models.Assessments;
using ClinicalDiagnosticApp.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ClinicalDiagnosticApp.Controllers
{
    //[Authorize]
    [Route("[controller]")]
    [ApiController]
    public class AssessmentsController : ControllerBase
    {
        private IAssessmentService _assessmentService;
        private IMapper _mapper;
        private readonly AppSettings _appSettings;

        public AssessmentsController(
            IAssessmentService assessmentService,
            IMapper mapper,
            IOptions<AppSettings> appSettings
            )
        {
            _assessmentService = assessmentService;
            _mapper = mapper;
            _appSettings = appSettings.Value;
        }


        // GET: /<AssessmentsController>
        [HttpGet]
        public IActionResult GetAll()
        {

            var assessments = _assessmentService.GetAll();
            //var model = _mapper.Map<IList<AssessmentModel>>(assessments);
            return Ok(assessments);
            //return new string[] { "value1", "value2" };
        }

        // GET /<AssessmentsController>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var assessment = _assessmentService.GetById(id);
            var model = _mapper.Map<AssessmentModel>(assessment);
            return Ok(model);
        }

        // POST /<AssessmentsController>
        [HttpPost]
        public IActionResult Create([FromBody] AssessmentCreateModel model)
        {
            var assessment = _mapper.Map<Assessments>(model);

            try
            {
                _assessmentService.Create(assessment);
                return Ok();
            }
            catch (AppException ex)
            {
                return BadRequest(new { message = ex.Message });
            }

        }

        // PUT api/<AssessmentsController>/5
        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody] AssessmentCreateModel model)
        {
            var assessment = _mapper.Map<Assessments>(model);
            assessment.Id = id;

            try
            {
                _assessmentService.Update(assessment);
                return Ok();
            }
            catch (AppException ex)
            {

                return BadRequest(new { message = ex.Message });
            }
        }

        // DELETE api/<AssessmentsController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _assessmentService.Delete(id);
            return Ok();
        }
    }
}
