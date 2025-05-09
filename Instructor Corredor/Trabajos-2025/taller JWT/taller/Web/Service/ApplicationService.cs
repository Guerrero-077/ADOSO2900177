using Business.AutoMapper;
using Business.Custom;
using Business.Services;
using Data.Interfaces;
using Data.Repositoy;
using Data.Services;

namespace Web.Service
{
    public static class ApplicationService
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services)
        {
            services.AddAutoMapper(typeof(AutoMapperProfile));

            services.AddScoped<UserService>();
            services.AddScoped<RolService>();
            services.AddScoped<RolUserService>();
            


            services.AddScoped(typeof(IData<>), typeof(DataGeneric<>));
            services.AddScoped<IRolUserRepository, RolUserRepository>();
            services.AddScoped<IUserRepository, UserRepository>();

            return services;
        }
    }
}
