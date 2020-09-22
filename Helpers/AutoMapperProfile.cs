using AutoMapper;
using ClinicalDiagnosticApp.Migrations.SqlServerMigrations;
using ClinicalDiagnosticApp.Models.Users;

namespace ClinicalDiagnosticApp.Helpers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<Users, UserModel>();
            CreateMap<RegisterModel, Users>();
            CreateMap<UpdateModel, Users>();
        }
    }
}
