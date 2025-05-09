using Entity.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace Entity.Contexts
{
    public class ApplicationDbContext : DbContext
    { 
        private readonly IConfiguration _configuration;

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options, IConfiguration configuration) : base(options)
        {
            _configuration = configuration;
        }

        ///<summary>
        ///Implementación DBSet
        ///</summary>

        public DbSet<User> users {  get; set; }
        public DbSet<Rol> rols { get; set; }
        public DbSet<RolUser> rolUsers { get; set; }
    }
}
