using Entity.Contexts;
using Microsoft.EntityFrameworkCore;

namespace Web.Service
{
    public static class DatabaseService
    {
        public static IServiceCollection AddDatabase(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<ApplicationDbContext>(opciones => opciones
            .UseSqlServer("name=SqlServer"));

            return services;
        }
    }
}
