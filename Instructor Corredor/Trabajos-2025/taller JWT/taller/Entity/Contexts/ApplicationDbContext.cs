using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
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

        DbSet<User> users {  get; set; }
        DbSet<Rol> rols { get; set; }
        DbSet<RolUser> rolUsers { get; set; }
    }
}
