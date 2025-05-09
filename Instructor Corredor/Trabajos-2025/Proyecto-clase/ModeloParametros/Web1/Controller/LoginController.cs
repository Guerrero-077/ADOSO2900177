using Business.Token;
using Entity.DTOs;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Web1.Controller;


[Route("api/[controller]")]
[ApiController]
[Produces("application/json")]

public class LoginController : ControllerBase

{
    private readonly CreateToken _token;
    private readonly ILogger<LoginController> _logger;

    public LoginController(CreateToken token,ILogger<LoginController> logger)
    {
        _token = token;
        _logger = logger;
    }

    [HttpPost]
    public async Task<IActionResult> login([FromBody] LoginDto dto){
        try{
            var token = await _token.CrearToken(dto);
            return StatusCode(StatusCodes.Status200OK, new {isSucces = true,token});
        }catch(Exception ex){
            _logger.LogWarning(ex,"Validacion fallida, error al crear token");
            return BadRequest(new{message = ex.Message});
        }
    }


    
}
