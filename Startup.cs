using ClinicalDiagnosticApp.Helpers;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using System;
using VueCliMiddleware;
using AutoMapper;
using ClinicalDiagnosticApp.Services;
using System.Threading.Tasks;

namespace ClinicalDiagnosticApp
{
    public class Startup
    {

        private readonly IWebHostEnvironment _env;
        private readonly IConfiguration _configuration;

        public Startup(IWebHostEnvironment env, IConfiguration configuration)
        {
            _env = env;
            _configuration = configuration;
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            var connection = _configuration.GetConnectionString("Database");

            //services.AddDbContext<MillerHealthContext>(op => op.UseSqlServer(connection), ServiceLifetime.Transient);
            services.AddDbContext<MillerHealthContext>(op => op.UseMySQL(connection), ServiceLifetime.Transient);
            services.AddCors();

            // NOTE: PRODUCTION Ensure this is the same path that is specified in your webpack output
            services.AddSpaStaticFiles(opt => opt.RootPath = "ClientApp/dist");
            services.AddControllers();
            services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

            // configure strongly typed settings objects
            var appSettingsSection = _configuration.GetSection("AppSettings");
            services.Configure<AppSettings>(appSettingsSection);

            // configure jwt authentication
            var appSettings = appSettingsSection.Get<AppSettings>();
            var key = Encoding.ASCII.GetBytes(appSettings.Secret);
            services.AddAuthentication(x =>
            {
                x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(x =>
            {
                x.Events = new JwtBearerEvents
                {
                    OnTokenValidated = context =>
                    {
                        var userService = context.HttpContext.RequestServices.GetRequiredService<IUserService>();
                        var userId = int.Parse(context.Principal.Identity.Name);
                        var user = userService.GetById(userId);
                        if (user == null)
                        {
                            // return unauthorized if user no longer exists
                            context.Fail("Unauthorized");
                        }
                        return Task.CompletedTask;
                    }
                };
                x.RequireHttpsMetadata = false;
                x.SaveToken = true;
                x.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(key),
                    ValidateIssuer = false,
                    ValidateAudience = false
                };
            });

            // configure DI for application services
            services.AddScoped<IUserService, UserService>();

            services.AddScoped<IAssessmentService, AssessmentService>();


        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            // optional base path for IIS virtual app/directory
            app.UsePathBase("/optionalpath");

            // PRODUCTION uses webpack static files
            app.UseSpaStaticFiles();

            // Routing
            app.UseRouting();

            app.UseCors(x => x
               .AllowAnyOrigin()
               .AllowAnyMethod()
               .AllowAnyHeader());

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();

                endpoints.MapToVueCliProxy(
                    "{*path}",
                    new SpaOptions { SourcePath = "ClientApp" },
                    npmScript: (System.Diagnostics.Debugger.IsAttached) ? "serve" : null,
                    regex: "Compiled successfully",
                    forceKill: true
                    );
            });
        }
    }
}