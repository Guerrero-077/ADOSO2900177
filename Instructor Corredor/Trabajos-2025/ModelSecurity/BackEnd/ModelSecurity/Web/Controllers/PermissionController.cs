
using Business.Services;
using Entity.DTOs.Default;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Utilities.Exceptions;

namespace Web.Controllers
{
    /// <summary>
    /// Controlador para la gestión de Permission en el sistema
    /// </summary>
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class PermissionController : ControllerBase
    {
        private readonly PermissionService _PermissionBusiness;
        private readonly ILogger<PermissionController> _logger;

        /// <summary>
        /// Constructor del controlador de Permission
        /// </summary>
        /// <param name="PermissionBusiness">Capa de negocio de Permission</param>
        /// <param name="logger">Logger para registro de eventos</param>
        public PermissionController(PermissionService PermissionBusiness, ILogger<PermissionController> logger)
        {
            _PermissionBusiness = PermissionBusiness;
            _logger = logger;
        }

        /// <summary>
        /// Obtiene todos los Permission del sistema
        /// </summary>
        /// <returns>Lista de Permission</returns>
        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<PermissionDto>), 200)]
        [ProducesResponseType(500)]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                var permissions = await _PermissionBusiness.GetAllAsync();
                return Ok(permissions);
            }
            catch (ExternalServiceException ex)
            {
                _logger.LogError(ex, "Error al obtener Permission");
                return StatusCode(500, new { message = ex.Message });
            }
        }

        //Traer solo borrados logicamnet
        [HttpGet("getDelete")]
        [ProducesResponseType(typeof(IEnumerable<PermissionDto>), 200)]
        [ProducesResponseType(500)]
        public async Task<IActionResult> GetAllDeletes()
        {
            try
            {
                var permissions = await _PermissionBusiness.GetAllDeletes();
                return Ok(permissions);
            }
            catch (ExternalServiceException ex)
            {
                _logger.LogError(ex, "Error al obtener Permission borrados Logicamnete");
                return StatusCode(500, new { message = ex.Message });
            }
        }

        /// <summary>
        /// Obtiene una Permission específica por su id
        /// </summary>
        /// <param name="id">id del Permission</param>
        /// <returns>Permission solicitada</returns>
        [HttpGet("{id}")]
        [ProducesResponseType(typeof(PermissionDto), 200)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        [ProducesResponseType(500)]
        public async Task<IActionResult> GetById(int id)
        {
            try
            {
                var person = await _PermissionBusiness.GetByIdAsync(id);
                return Ok(person);
            }
            catch (ValidationException ex)
            {
                _logger.LogWarning(ex, "Validación fallida para la Permission con id: {PermissionId}", id);
                return BadRequest(new { message = ex.Message });
            }
            catch (EntityNotFoundException ex)
            {
                _logger.LogInformation(ex, "Permission no encontrada con id: {PermissionId}", id);
                return NotFound(new { message = ex.Message });
            }
            catch (ExternalServiceException ex)
            {
                _logger.LogError(ex, "Error al obtener Permission con id: {PermissionId}", id);
                return StatusCode(500, new { message = ex.Message });
            }
        }

        /// <summary>
        /// Crea una nueva Permission en el sistema
        /// </summary>
        /// <param name="PermissionDto">Datos de la Permission a crear</param>
        [HttpPost]
        [ProducesResponseType(typeof(PermissionDto), 201)]
        [ProducesResponseType(400)]
        [ProducesResponseType(500)]
        public async Task<IActionResult> CreatePerson([FromBody] PermissionDto PermissionDto)
        {
            try
            {
                var createdPermission = await _PermissionBusiness.CreateAsync(PermissionDto);
                return CreatedAtAction(nameof(GetById), new { createdPermission.id }, createdPermission);
            }
            catch (ValidationException ex)
            {
                _logger.LogWarning(ex, "Validación fallida al crear Permission");
                return BadRequest(new { message = ex.Message });
            }
            catch (ExternalServiceException ex)
            {
                _logger.LogError(ex, "Error al crear Permission");
                return StatusCode(500, new { message = ex.Message });
            }
        }

        /// <summary>
        /// Actualiza una Permission existente por su id
        /// </summary>
        /// <param name="PermissionDto">Datos de la Permission a actualizar</param>
        [HttpPut("{id}")]
        [ProducesResponseType(typeof(PermissionDto), 200)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        [ProducesResponseType(500)]
        public async Task<IActionResult> Update(int id, [FromBody] PermissionDto PermissionDto)
        {
            //if (id != PermissionDto.id)
            //    return BadRequest(new { message = "El ID de la URL no coincide con el del objeto." });
            try
            {
                PermissionDto.id = id;
                var updatedPermission = await _PermissionBusiness.UpdateAsync(id, PermissionDto);
                return Ok(new { message = "Actualizado correctamente" });

            }
            catch (ValidationException ex)
            {
                _logger.LogWarning(ex, "Validación fallida al actualizar Permission con id: {PermissionId}", PermissionDto.id);
                return BadRequest(new { message = ex.Message });
            }
            catch (EntityNotFoundException ex)
            {
                _logger.LogInformation(ex, "Permission no encontrada para actualizar con id: {PermissionId}", PermissionDto.id);
                return NotFound(new { message = ex.Message });
            }
            catch (ExternalServiceException ex)
            {
                _logger.LogError(ex, "Error al actualizar Permission con id: {PermissionId}", PermissionDto.id);
                return StatusCode(500, new { message = ex.Message });
            }
        }

        /// <summary>
        /// Elimina una Permission de manera física por su id
        /// </summary>
        /// <param name="id">id de la Permission</param>
        [HttpDelete("{id}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        [ProducesResponseType(500)]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                await _PermissionBusiness.DeleteAsync(id);
                return Ok(new { message = "Eliminado correctamente" });

            }
            catch (ValidationException ex)
            {
                _logger.LogWarning(ex, "Validación fallida al eliminar Permission con id: {PermissionId}", id);
                return BadRequest(new { message = ex.Message });
            }
            catch (EntityNotFoundException ex)
            {
                _logger.LogInformation(ex, "Permission no encontrada para eliminar con id: {PermissionId}", id);
                return NotFound(new { message = ex.Message });
            }
            catch (ExternalServiceException ex)
            {
                _logger.LogError(ex, "Error al eliminar Permission con id: {PermissionId}", id);
                return StatusCode(500, new { message = ex.Message });
            }
        }


        /// <summary>
        /// Elimina lógicamente una Permission (marca como inactiva o eliminada)
        /// </summary>
        /// <param name="id">ID del Permission</param>
        [HttpPatch("logical-delete/{id}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        [ProducesResponseType(500)]
        public async Task<IActionResult> DeleteLogical(int id)
        {
            try
            {
                await _PermissionBusiness.DeleteLogicAsync(id);
                return Ok(new { message = "Eliminado lógicamente correctamente" });

            }
            catch (ValidationException ex)
            {
                _logger.LogWarning(ex, "Validación fallida al eliminar lógicamente Permission con id: {PermissionId}", id);
                return BadRequest(new { message = ex.Message });
            }
            catch (EntityNotFoundException ex)
            {
                _logger.LogInformation(ex, "Permission no encontrada para eliminación lógica con id: {PermissionId}", id);
                return NotFound(new { message = ex.Message });
            }
            catch (ExternalServiceException ex)
            {
                _logger.LogError(ex, "Error al eliminar lógicamente Permission con id: {PermissionId}", id);
                return StatusCode(500, new { message = ex.Message });
            }
        }

        /// <summary>
        /// Restaura lógicamente una Permission (revierte eliminación lógica)
        /// </summary>
        /// <param name="id">ID del Permission</param>
        [HttpPatch("logical-restore/{id}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        [ProducesResponseType(500)]
        public async Task<IActionResult> RestoreLogical(int id)
        {
            try
            {
                var result = await _PermissionBusiness.RestoreLogicAsync(id);
                if (result)
                    return NoContent();

                return NotFound(new { message = $"Permission con id {id} no encontrado o no está marcado como eliminado." });
            }
            catch (ValidationException ex)
            {
                _logger.LogWarning(ex, "Validación fallida al restaurar lógicamente Permission con id: {PermissionId}", id);
                return BadRequest(new { message = ex.Message });
            }
            catch (EntityNotFoundException ex)
            {
                _logger.LogInformation(ex, "Permission no encontrado para restauración lógica con id: {PermissionId}", id);
                return NotFound(new { message = ex.Message });
            }
            catch (ExternalServiceException ex)
            {
                _logger.LogError(ex, "Error al restaurar lógicamente Permission con id: {PermissionId}", id);
                return StatusCode(500, new { message = ex.Message });
            }
        }


    }
}
