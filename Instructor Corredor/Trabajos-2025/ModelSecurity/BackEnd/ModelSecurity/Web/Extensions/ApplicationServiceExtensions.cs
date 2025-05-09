using Business.AutoMapper;
using Business.Services;
using Data.Interfaces;
using Data.Repository;
using Data.Services;

namespace Web.Extensions
{
    public static class ApplicationServiceExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services)
        {
            services.AddAutoMapper(typeof(AutoMapperProfile));

            services.AddScoped<RolFormPermissionService>();
            services.AddScoped<RolService>();
            services.AddScoped<FormService>();
            services.AddScoped<PermissionService>();
            services.AddScoped<PersonService>();
            services.AddScoped<UserService>();
            services.AddScoped<ModuleService>();
            services.AddScoped<RolUserService>();
            services.AddScoped<FormModuleService>();
            services.AddScoped<AuthService>();

            services.AddScoped(typeof(IData<>), typeof(DataGeneric<>));
            services.AddScoped<IRolFormPermissionRepository, RolFormPermissionRepository>();
            services.AddScoped<IUserRepository, UserRepository>();
            services.AddScoped<IRolUserRepository, RolUserRepository>();
            services.AddScoped<IFormModuleRepository, FormModuleRepository>();

            return services;
        }
    }
}

