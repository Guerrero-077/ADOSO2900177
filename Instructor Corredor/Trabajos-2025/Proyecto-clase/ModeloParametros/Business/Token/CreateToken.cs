using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Data.RepositoryData;
using Entity.DTOs;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace Business.Token;

public class CreateToken
{
    private readonly IConfiguration _config;
    private readonly PersonRepository _person;
    public CreateToken(IConfiguration config,PersonRepository person)
    {
        _config = config;
        _person = person;
        
    }

    public async Task<string> CrearToken(LoginDto dto){
        var person = await _person.validatePerson(dto);
        if(person == null){
            throw new UnauthorizedAccessException("Credenciales incorrectas");
        }

        var claims = new List<Claim>{
            new Claim(ClaimTypes.NameIdentifier, person.id.ToString()),
            new Claim(ClaimTypes.Name,person.firstName)

        };

        var SecurityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]!));
        var Credentials = new SigningCredentials(SecurityKey,SecurityAlgorithms.HmacSha256Signature);

        var jwtConfig = new JwtSecurityToken(
          claims : claims,
          expires: DateTime.Now.AddMinutes(Convert.ToDouble(_config["Jwt:Expiration"]!)),
          signingCredentials: Credentials
        );

        return new JwtSecurityTokenHandler().WriteToken(jwtConfig);
    }
}
