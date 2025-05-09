using Business.Interfaces;
using Business.Services;
using Data.Services;
using Entity.DTOs.Default;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Utilities.Exceptions;

namespace Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]

    public class LoginController : ControllerBase
    {
        private readonly IToken _token;
        private readonly UserService _userService;
        private readonly ILogger<LoginController> _logger;
        public LoginController(IToken token, ILogger<LoginController> logger, UserService userService)
        {
            _token = token;
            _userService = userService;
            _logger = logger;
        }




        //[HttpPost]
        //[Route("Registrarse")]
        //public async Task<IActionResult> Registrarse(UserDto objeto)
        //{
        //    //if (modeloUsuario.IdUsuario != 0)
        //    //    return StatusCode(StatusCodes.Status200OK, new { isSuccess = true });
        //    //else
        //    //    return StatusCode(StatusCodes.Status200OK, new { isSuccess = false });
        //    try
        //    {
        //        var result = await _userService.RegisterAsync(objeto);

        //        bool isSuccess = result != null;
        //        return StatusCode(StatusCodes.Status200OK, new { isSuccess });

        //    }
        //    catch (ValidationException ex)
        //    {
        //        _logger.LogWarning(ex, "Validación fallida para el inicio de sesión");
        //        return BadRequest(new { message = ex.Message });
        //    }
        //    catch (ExternalServiceException ex)
        //    {
        //        _logger.LogError(ex, "Error al crear el token");
        //        return StatusCode(500, new { message = ex.Message });
        //    }
        //}


        [HttpPost]
        [ProducesResponseType(typeof(string), 200)]
        [ProducesResponseType(400)]
        [ProducesResponseType(500)]
        public async Task<IActionResult> Login([FromBody] LoginDto login)
        {
            try
            {
                var token = await _token.GenerateToken(login);
                return Ok(token);
            }
            catch (ValidationException ex)
            {
                _logger.LogWarning(ex, "Validación fallida para el inicio de sesión");
                return BadRequest(new { message = ex.Message });
            }
            catch (ExternalServiceException ex)
            {
                _logger.LogError(ex, "Error al crear el token");
                return StatusCode(500, new { message = ex.Message });
            }
        }

    }
}
