using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using ClinicalDiagnosticApp.Helpers;
using ClinicalDiagnosticApp.Migrations.SqlServerMigrations;
using ClinicalDiagnosticApp.Models.AssessmentResponses;
using ClinicalDiagnosticApp.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ClinicalDiagnosticApp.Controllers
{
    [Authorize]
    [Route("/[controller]")]
    [ApiController]
    public class AssessmentResponseController : ControllerBase
    {
        private IAssessmentResponseService _assessmentResponseService;
        private IMapper _mapper;
        private readonly AppSettings _appSettings;

        public AssessmentResponseController(
            IAssessmentResponseService assessmentResponseService,
            IMapper mapper,
            IOptions<AppSettings> appSettings)
        {
            _assessmentResponseService = assessmentResponseService;
            _mapper = mapper;
            _appSettings = appSettings.Value;
        }

        // GET: /<AssessmentResponseController>

        [HttpGet]
        public IActionResult GetAll()
        {
            //TODO Filter based on User Role
            var assessmentResponses = _assessmentResponseService.GetAll();
            var model = _mapper.Map<IList<AssessmentResponseModel>>(assessmentResponses);
            return Ok(model);

        }

        //GET User's responses
        [HttpGet("mine")]
        public IActionResult GetMine()
        {
            var currentUserId = int.Parse(User.Identity.Name);
            var assessmentResponses = _assessmentResponseService.GetByUserId(currentUserId);

            var model = _mapper.Map<IList<AssessmentResponseModel>>(assessmentResponses);
            return Ok(model);
        }


        // GET /<AssessmentResponseController>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var currentUserId = int.Parse(User.Identity.Name);
            var assessmentResponse = _assessmentResponseService.GetById(id);
            if (assessmentResponse.UserId != currentUserId && !User.IsInRole(Role.Admin))
            {
                return Forbid();
            }

            var model = _mapper.Map<AssessmentResponseModel>(assessmentResponse);
            return Ok(model);
        }

        // POST /<AssessmentResponseController>
        [HttpPost]
        public IActionResult Create([FromBody] AssessmentResponseCreateModel model)
        {
            var assessmentResponse = _mapper.Map<AssessmentResponses>(model);

            var currentUserId = int.Parse(User.Identity.Name);

            assessmentResponse.UserId = currentUserId;
            try
            {
                _assessmentResponseService.Create(assessmentResponse);
                return Ok();
            }
            catch (AppException ex)
            {
                return BadRequest(new { message = ex.Message });
            }

        }

        // PUT /<AssessmentResponseController>/5
        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody] AssessmentResponseUpdateModel model)
        {
            var assessmentResponse = _mapper.Map<AssessmentResponses>(model);
            assessmentResponse.Id = id;

            try
            {
                _assessmentResponseService.Update(assessmentResponse);
                return Ok();

            }
            catch (AppException ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        // DELETE /<AssessmentResponseController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var currentUserId = int.Parse(User.Identity.Name);
            var assessmentResponse = _assessmentResponseService.GetById(id);
            if (assessmentResponse.UserId != currentUserId && !User.IsInRole(Role.Admin))
            {
                return Forbid();
            }
            _assessmentResponseService.Delete(id);
            return NoContent();

        }
    }
}
