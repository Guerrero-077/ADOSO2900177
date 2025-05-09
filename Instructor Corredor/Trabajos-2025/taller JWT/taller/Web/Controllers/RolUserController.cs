using Business.Services;
using Entity.DTOs.Default;
using Entity.DTOs.Select;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Utilities.Exceptions;

namespace Web.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    [ApiController]
    [Produces("application/json")]

    public class RolUserController : ControllerBase
    {
        private readonly RolUserService _RolUserBusiness;
        private readonly ILogger<RolUserController> _logger;

        public RolUserController(RolUserService RolUserBusiness, ILogger<RolUserController> logger)
        {
            _RolUserBusiness = RolUserBusiness;
            _logger = logger;
        }

        /// <returns>Lista de RolUser</returns>
        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<RolUserSelect>), 200)]
        [ProducesResponseType(500)]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                var rolUsers = await _RolUserBusiness.GeAllJoin();
                return Ok(rolUsers);
            }
            catch (ExternalServiceException ex)
            {
                _logger.LogError(ex, "Error al obtener RolUser");
                return StatusCode(500, new { message = ex.Message });
            }
        }

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(RolUserSelect), 200)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        [ProducesResponseType(500)]
        public async Task<IActionResult> GetById(int id)
        {
            try
            {
                var RolUser = await _RolUserBusiness.GetByIdJoin(id);
                return Ok(RolUser);
            }
            catch (ValidationException ex)
            {
                _logger.LogWarning(ex, "Validación fallida para la RolUser con id: {RolUserId}", id);
                return BadRequest(new { message = ex.Message });
            }
            catch (EntityNotFoundException ex)
            {
                _logger.LogInformation(ex, "RolUser no encontrada con id: {RolUserId}", id);
                return NotFound(new { message = ex.Message });
            }
            catch (ExternalServiceException ex)
            {
                _logger.LogError(ex, "Error al obtener RolUser con id: {RolUserId}", id);
                return StatusCode(500, new { message = ex.Message });
            }
        }



        [HttpPost]
        [ProducesResponseType(typeof(RolUserDto), 201)]
        [ProducesResponseType(400)]
        [ProducesResponseType(500)]
        public async Task<IActionResult> CreatePerson([FromBody] RolUserDto RolUserDto)
        {
            try
            {
                var createdRolUser = await _RolUserBusiness.CreateAsync(RolUserDto);
                return CreatedAtAction(nameof(GetById), new { id = createdRolUser.id }, createdRolUser);
            }
            catch (ValidationException ex)
            {
                _logger.LogWarning(ex, "Validación fallida al crear RolUser");
                return BadRequest(new { message = ex.Message });
            }
            catch (ExternalServiceException ex)
            {
                _logger.LogError(ex, "Error al crear RolUser");
                return StatusCode(500, new { message = ex.Message });
            }
        }

        /// <param name="RolUserDto">Datos de la RolUser a actualizar</param>
        [HttpPut]
        [ProducesResponseType(typeof(RolUserDto), 200)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        [ProducesResponseType(500)]
        public async Task<IActionResult> Update([FromBody] RolUserDto RolUserDto)
        {

            //if (id != RolUserDto.id)
            //    return BadRequest(new { message = "El ID de la URL no coincide con el del objeto." });
            try
            {
                var updatedRolUser = await _RolUserBusiness.UpdateAsync(RolUserDto);
                return Ok(new { message = "Actualizado correctamente" });
            }
            catch (ValidationException ex)
            {
                _logger.LogWarning(ex, "Validación fallida al actualizar RolUser con id: {RolUserId}", RolUserDto.id);
                return BadRequest(new { message = ex.Message });
            }
            catch (EntityNotFoundException ex)
            {
                _logger.LogInformation(ex, "RolUser no encontrada para actualizar con id: {RolUserId}", RolUserDto.id);
                return NotFound(new { message = ex.Message });
            }
            catch (ExternalServiceException ex)
            {
                _logger.LogError(ex, "Error al actualizar RolUser con id: {RolUserId}", RolUserDto.id);
                return StatusCode(500, new { message = ex.Message });
            }
        }

        [HttpDelete("{id}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        [ProducesResponseType(500)]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                await _RolUserBusiness.DeleteAsync(id);
                return Ok(new { message = "Eliminado correctamente" });

            }
            catch (ValidationException ex)
            {
                _logger.LogWarning(ex, "Validación fallida al eliminar RolUser con id: {RolUserId}", id);
                return BadRequest(new { message = ex.Message });
            }
            catch (EntityNotFoundException ex)
            {
                _logger.LogInformation(ex, "RolUser no encontrada para eliminar con id: {RolUserId}", id);
                return NotFound(new { message = ex.Message });
            }
            catch (ExternalServiceException ex)
            {
                _logger.LogError(ex, "Error al eliminar RolUser con id: {RolUserId}", id);
                return StatusCode(500, new { message = ex.Message });
            }
        }
    }
}
