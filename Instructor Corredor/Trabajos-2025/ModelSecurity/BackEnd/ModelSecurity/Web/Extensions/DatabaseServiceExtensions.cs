using Entity.Context;
using Microsoft.EntityFrameworkCore;

namespace Web.Extensions
{
    public static class DatabaseServiceExtensions
    {
        public static IServiceCollection AddDatabase(this IServiceCollection services, IConfiguration configuration)
        {
            string databaseProvider = configuration["DatabaseProvider"];
            string connectionString = configuration.GetConnectionString(databaseProvider);

            services.AddDbContext<ApplicationDbContext>(options =>
            {
                switch (databaseProvider)
                {
                    case "SqlServer":
                        options.UseSqlServer(connectionString);
                        break;
                    case "PostgreSql":
                        options.UseNpgsql(connectionString);
                        break;
                    case "MySql":
                        options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString));
                        break;
                    default:
                        throw new InvalidOperationException("Proveedor de base de datos no soportado");
                }
            });

            return services;
        }
    }
}
