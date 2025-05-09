using Business.Services;
using Entity.DTOs;
using Entity.DTOs.Default;
using Entity.DTOs.Select;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.SqlServer.Server;
using Utilities.Exceptions;

namespace Web.Controllers
{
    /// <summary>
    /// Controlador para la gestión de User en el sistema
    /// </summary>
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class UserController : ControllerBase
    {
        private readonly UserService _UserBusiness;
        private readonly ILogger<UserController> _logger;

        /// <summary>
        /// Constructor del controlador de User
        /// </summary>
        /// <param name="UserBusiness">Capa de negocio de User</param>
        /// <param name="logger">Logger para registro de eventos</param>
        public UserController(UserService UserBusiness, ILogger<UserController> logger)
        {
            _UserBusiness = UserBusiness;
            _logger = logger;
        }

        /// <summary>
        /// Obtiene todos los User del sistema
        /// </summary>
        /// <returns>Lista de User</returns>
        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<UserSelectDto>), 200)]
        [ProducesResponseType(500)]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                var users = await _UserBusiness.GetAllJoin();
                return Ok(users);
            }
            catch (ExternalServiceException ex)
            {
                _logger.LogError(ex, "Error al obtener User");
                return StatusCode(500, new { message = ex.Message });
            }
        }

        //traer solo borrados logicamnete
        [HttpGet("getDelete")]
        [ProducesResponseType(typeof(IEnumerable<UserSelectDto>), 200)]
        [ProducesResponseType(500)]
        public async Task<IActionResult> GetAllDeletes()
        {
            try
            {
                var users = await _UserBusiness.GetAllDeletesJoin();
                return Ok(users);
            }
            catch (ExternalServiceException ex)
            {
                _logger.LogError(ex, "Error al obtener User");
                return StatusCode(500, new { message = ex.Message });
            }
        }

        /// <summary>
        /// Obtiene una User específica por su id
        /// </summary>
        /// <param name="id">id de la User</param>
        /// <returns>User solicitada</returns>
        [HttpGet("{id}")]
        [ProducesResponseType(typeof(UserSelectDto), 200)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        [ProducesResponseType(500)]
        public async Task<IActionResult> GetById(int id)
        {
            try
            {
                var person = await _UserBusiness.GetByIdJoin(id);
                return Ok(person);
            }
            catch (ValidationException ex)
            {
                _logger.LogWarning(ex, "Validación fallida para la User con id: {UserId}", id);
                return BadRequest(new { message = ex.Message });
            }
            catch (EntityNotFoundException ex)
            {
                _logger.LogInformation(ex, "User no encontrada con id: {UserId}", id);
                return NotFound(new { message = ex.Message });
            }
            catch (ExternalServiceException ex)
            {
                _logger.LogError(ex, "Error al obtener User con id: {UserId}", id);
                return StatusCode(500, new { message = ex.Message });
            }
        }

        /// <summary>
        /// Crea una nueva User en el sistema
        /// </summary>
        /// <param name="UserDto">Datos de la User a crear</param>
        [HttpPost]
        [ProducesResponseType(typeof(UserDto), 201)]
        [ProducesResponseType(400)]
        [ProducesResponseType(500)]
        public async Task<IActionResult> CreatePerson([FromBody] UserDto UserDto)
        {
            try
            {
                var createdUser = await _UserBusiness.CreateAsync(UserDto);
                return CreatedAtAction(nameof(GetById), new { id = createdUser.id }, createdUser);
            }
            catch (ValidationException ex)
            {
                _logger.LogWarning(ex, "Validación fallida al crear User");
                return BadRequest(new { message = ex.Message });
            }
            catch (ExternalServiceException ex)
            {
                _logger.LogError(ex, "Error al crear User");
                return StatusCode(500, new { message = ex.Message });
            }
        }

        /// <summary>
        /// Actualiza una User existente por su id
        /// </summary>
        /// <param name="UserDto">Datos de la User a actualizar</param>
        [HttpPut("{id}")]
        [ProducesResponseType(typeof(UserDto), 200)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        [ProducesResponseType(500)]
        public async Task<IActionResult> Update(int id, [FromBody] UserDto UserDto)
        {
            //if (id != UserDto.id)
            //    return BadRequest(new { message = "El ID de la URL no coincide con el del objeto." });
            try
            {
                UserDto.id = id;
                var updatedUser = await _UserBusiness.UpdateAsync(id, UserDto);
                return Ok(new { message = "Actualizado correctamente" });

            }
            catch (ValidationException ex)
            {
                _logger.LogWarning(ex, "Validación fallida al actualizar User con id: {UserId}", UserDto.id);
                return BadRequest(new { message = ex.Message });
            }
            catch (EntityNotFoundException ex)
            {
                _logger.LogInformation(ex, "User no encontrada para actualizar con id: {UserId}", UserDto.id);
                return NotFound(new { message = ex.Message });
            }
            catch (ExternalServiceException ex)
            {
                _logger.LogError(ex, "Error al actualizar User con id: {UserId}", UserDto.id);
                return StatusCode(500, new { message = ex.Message });
            }
        }

        /// <summary>
        /// Elimina una User de manera física por su id
        /// </summary>
        /// <param name="id">id de la User</param>
        [HttpDelete("{id}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        [ProducesResponseType(500)]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                await _UserBusiness.DeleteAsync(id);
                return Ok(new { message = "Eliminado correctamente" });

            }
            catch (ValidationException ex)
            {
                _logger.LogWarning(ex, "Validación fallida al eliminar User con id: {UserId}", id);
                return BadRequest(new { message = ex.Message });
            }
            catch (EntityNotFoundException ex)
            {
                _logger.LogInformation(ex, "User no encontrada para eliminar con id: {UserId}", id);
                return NotFound(new { message = ex.Message });
            }
            catch (ExternalServiceException ex)
            {
                _logger.LogError(ex, "Error al eliminar User con id: {UserId}", id);
                return StatusCode(500, new { message = ex.Message });
            }
        }


        /// <summary>
        /// Elimina lógicamente una User (marca como inactiva o eliminada)
        /// </summary>
        /// <param name="id">ID del usuario</param>
        [HttpPatch("logical-delete/{id}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        [ProducesResponseType(500)]
        public async Task<IActionResult> DeleteLogical(int id)
        {
            try
            {
                await _UserBusiness.DeleteLogicAsync(id);
                return Ok(new { message = "Eliminado lógicamente correctamente" });

            }
            catch (ValidationException ex)
            {
                _logger.LogWarning(ex, "Validación fallida al eliminar lógicamente User con id: {UserId}", id);
                return BadRequest(new { message = ex.Message });
            }
            catch (EntityNotFoundException ex)
            {
                _logger.LogInformation(ex, "User no encontrada para eliminación lógica con id: {UserId}", id);
                return NotFound(new { message = ex.Message });
            }
            catch (ExternalServiceException ex)
            {
                _logger.LogError(ex, "Error al eliminar lógicamente User con id: {UserId}", id);
                return StatusCode(500, new { message = ex.Message });
            }
        }

        /// <summary>
        /// Restaura lógicamente una User (revierte eliminación lógica)
        /// </summary>
        /// <param name="id">ID del usuario</param>
        [HttpPatch("logical-restore/{id}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        [ProducesResponseType(500)]
        public async Task<IActionResult> RestoreLogical(int id)
        {
            try
            {
                var result = await _UserBusiness.RestoreLogicAsync(id);
                if (result)
                    return NoContent();

                return NotFound(new { message = $"Usuario con id {id} no encontrado o no está marcado como eliminado." });
            }
            catch (ValidationException ex)
            {
                _logger.LogWarning(ex, "Validación fallida al restaurar lógicamente usuario con id: {UserId}", id);
                return BadRequest(new { message = ex.Message });
            }
            catch (EntityNotFoundException ex)
            {
                _logger.LogInformation(ex, "Usuario no encontrado para restauración lógica con id: {UserId}", id);
                return NotFound(new { message = ex.Message });
            }
            catch (ExternalServiceException ex)
            {
                _logger.LogError(ex, "Error al restaurar lógicamente usuario con id: {UserId}", id);
                return StatusCode(500, new { message = ex.Message });
            }
        }


    }
}
