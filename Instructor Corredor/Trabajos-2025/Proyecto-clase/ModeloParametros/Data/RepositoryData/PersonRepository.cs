using DataGeneric.RepositoryDataGeneric;
using Entity.context;
using Entity.DTOs;
using Entity.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace Data.RepositoryData;

public class PersonRepository : DataGeneric<PersonRepository>
{
    private readonly AplicationDbContext _context;
    public PersonRepository(AplicationDbContext context) : base(context)
    {
       _context =context; 
    }

    public async Task<Person> validatePerson(LoginDto dto){
        bool succes = false;

        var person = await _context.Set<Person>()
        .FirstOrDefaultAsync(u=> u.email == dto.email);
        succes = (person != null) ? true : throw new UnauthorizedAccessException("Credenciales incorrectaras");
        
        return person;

    }
}
