namespace Web.Extensions
{
    public static class CorsServiceExtensions
    {

        public static IServiceCollection AddCustomCors(this IServiceCollection services, IConfiguration configuration)
        {
            var allowedOrigins = configuration.GetValue<string>("OrigenesPermitidos")!.Split(",");

            services.AddCors(options =>
            {
                options.AddDefaultPolicy(policy =>
                {
                    policy.WithOrigins(allowedOrigins).AllowAnyHeader().AllowAnyMethod();
                });
            });

            return services;
        }
    }
}
