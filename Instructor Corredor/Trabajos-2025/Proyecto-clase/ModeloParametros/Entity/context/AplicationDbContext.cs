using Entity.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace Entity.context;

public class AplicationDbContext : DbContext
{

    private readonly IConfiguration _configuration;

    public AplicationDbContext(DbContextOptions<AplicationDbContext> options, IConfiguration configuration) : base(options){
        _configuration = configuration;
    }

    public DbSet<City> city {set; get;}
    public DbSet<Person> person {set; get;}
    public DbSet<Departament> departaments {set; get;}

}
