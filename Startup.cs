//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Threading.Tasks;
//using ClinicalDiagnosticApp.Data;
//using Microsoft.AspNetCore.Builder;
//using Microsoft.AspNetCore.Hosting;
//using Microsoft.AspNetCore.Http;
//using Microsoft.AspNetCore.Mvc;
//using Microsoft.EntityFrameworkCore;
//using Microsoft.Extensions.Configuration;
//using Microsoft.Extensions.DependencyInjection;
//using Microsoft.Extensions.Hosting;
//using Microsoft.Extensions.Logging;
//using VueCliMiddleware;

//namespace ClinicalDiagnosticApp
//{
//    public class Startup
//    {
//        public Startup(IConfiguration configuration)
//        {
//            Configuration = configuration;
//        }

//        public IConfiguration Configuration { get; }

//        // This method gets called by the runtime. Use this method to add services to the container.
//        public void ConfigureServices(IServiceCollection services)
//        {
//            var connection = Configuration.GetConnectionString("Database");


//            services.AddDbContext<MillerHealthContext>(op => op.UseSqlServer(connection), ServiceLifetime.Transient);
//            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
//            services.AddControllers();
//            services.AddSpaStaticFiles(configuration =>
//            {
//                configuration.RootPath = "ClientApp";
//            });


//        }

//        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
//        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
//        {
//            if (env.IsDevelopment())
//            {
//                app.UseDeveloperExceptionPage();
//            }

//            app.UseRouting();
//            app.UseSpaStaticFiles();
//            app.UseAuthorization();

//            app.UseEndpoints(endpoints =>
//            {
//                endpoints.MapControllers();
//            });

//            app.UseSpa(spa =>
//            {
//                if (env.IsDevelopment())
//                    spa.Options.SourcePath = "ClientApp";
//                else
//                    spa.Options.SourcePath = "dist";

//                if (env.IsDevelopment())
//                {
//                    spa.UseVueCli(npmScript: "serve", port: 8081);
//                }

//            });
//        }
//    }
//}
using ClinicalDiagnosticApp.Data;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using VueCliMiddleware;

namespace ClinicalDiagnosticApp
{
    public class Startup
    {

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            var connection = Configuration.GetConnectionString("Database");

            services.AddDbContext<MillerHealthContext>(op => op.UseSqlServer(connection), ServiceLifetime.Transient);

            // NOTE: PRODUCTION Ensure this is the same path that is specified in your webpack output
            services.AddSpaStaticFiles(opt => opt.RootPath = "ClientApp/dist");
            services.AddControllers();
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
            //app.UserAuthorization();
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