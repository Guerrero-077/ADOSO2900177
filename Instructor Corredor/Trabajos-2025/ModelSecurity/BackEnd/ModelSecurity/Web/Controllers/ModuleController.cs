
using Business.Services;
using Entity.DTOs.Default;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.SqlServer.Server;
using Utilities.Exceptions;

namespace Web.Controllers
{
    /// <summary>
    /// Controlador para la gestión de Module en el sistema
    /// </summary>
    
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class ModuleController : ControllerBase
    {
        private readonly ModuleService _ModuleBusiness;
        private readonly ILogger<ModuleController> _logger;

        /// <summary>
        /// Constructor del controlador de Module
        /// </summary>
        /// <param name="ModuleBusiness">Capa de negocio de Module</param>
        /// <param name="logger">Logger para registro de eventos</param>
        public ModuleController(ModuleService ModuleBusiness, ILogger<ModuleController> logger)
        {
            _ModuleBusiness = ModuleBusiness;
            _logger = logger;
        }

        /// <summary>
        /// Obtiene todos los Module del sistema
        /// </summary>
        /// <returns>Lista de Module</returns>
        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<ModuleDto>), 200)]
        [ProducesResponseType(500)]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                var modules = await _ModuleBusiness.GetAllAsync();
                return Ok(modules);
            }
            catch (ExternalServiceException ex)
            {
                _logger.LogError(ex, "Error al obtener Module");
                return StatusCode(500, new { message = ex.Message });
            }
        }

        //Traer solo eliminados
        [HttpGet("getDelete")]
        [ProducesResponseType(typeof(IEnumerable<ModuleDto>), 200)]
        [ProducesResponseType(500)]
        public async Task<IActionResult> GetAllDeletes()
        {
            try
            {
                var modules = await _ModuleBusiness.GetAllDeletes();
                return Ok(modules);
            }
            catch (ExternalServiceException ex)
            {
                _logger.LogError(ex, "Error al obtener Module eliminados logicamente");
                return StatusCode(500, new { message = ex.Message });
            }
        }

        /// <summary>
        /// Obtiene una Module específica por su id
        /// </summary>
        /// <param name="id">id de la Module</param>
        /// <returns>Module solicitada</returns>
        [HttpGet("{id}")]
        [ProducesResponseType(typeof(ModuleDto), 200)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        [ProducesResponseType(500)]
        public async Task<IActionResult> GetById(int id)
        {
            try
            {
                var person = await _ModuleBusiness.GetByIdAsync(id);
                return Ok(person);
            }
            catch (ValidationException ex)
            {
                _logger.LogWarning(ex, "Validación fallida para la Module con id: {ModuleId}", id);
                return BadRequest(new { message = ex.Message });
            }
            catch (EntityNotFoundException ex)
            {
                _logger.LogInformation(ex, "Module no encontrada con id: {ModuleId}", id);
                return NotFound(new { message = ex.Message });
            }
            catch (ExternalServiceException ex)
            {
                _logger.LogError(ex, "Error al obtener Module con id: {ModuleId}", id);
                return StatusCode(500, new { message = ex.Message });
            }
        }

        /// <summary>
        /// Crea una nueva Module en el sistema
        /// </summary>
        /// <param name="ModuleDto">Datos de la Module a crear</param>
        [HttpPost]
        [ProducesResponseType(typeof(ModuleDto), 201)]
        [ProducesResponseType(400)]
        [ProducesResponseType(500)]
        public async Task<IActionResult> CreatePerson([FromBody] ModuleDto ModuleDto)
        {
            try
            {
                var createdModule = await _ModuleBusiness.CreateAsync(ModuleDto);
                return CreatedAtAction(nameof(GetById), new { createdModule.id }, createdModule);
            }
            catch (ValidationException ex)
            {
                _logger.LogWarning(ex, "Validación fallida al crear Module");
                return BadRequest(new { message = ex.Message });
            }
            catch (ExternalServiceException ex)
            {
                _logger.LogError(ex, "Error al crear Module");
                return StatusCode(500, new { message = ex.Message });
            }
        }

        /// <summary>
        /// Actualiza una Module existente por su id
        /// </summary>
        /// <param name="ModuleDto">Datos de la Module a actualizar</param>
        [HttpPut("{id}")]
        [ProducesResponseType(typeof(ModuleDto), 200)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        [ProducesResponseType(500)]
        public async Task<IActionResult> Update(int id, [FromBody] ModuleDto ModuleDto)
        {
            //if (id != ModuleDto.id)
            //    return BadRequest(new { message = "El ID de la URL no coincide con el del objeto." });
            try
            {
                ModuleDto.id = id;
                var updatedModule = await _ModuleBusiness.UpdateAsync(id, ModuleDto);
                return Ok(new { message = "Actualizado correctamente" });

            }
            catch (ValidationException ex)
            {
                _logger.LogWarning(ex, "Validación fallida al actualizar Module con id: {ModuleId}", ModuleDto.id);
                return BadRequest(new { message = ex.Message });
            }
            catch (EntityNotFoundException ex)
            {
                _logger.LogInformation(ex, "Module no encontrada para actualizar con id: {ModuleId}", ModuleDto.id);
                return NotFound(new { message = ex.Message });
            }
            catch (ExternalServiceException ex)
            {
                _logger.LogError(ex, "Error al actualizar Module con id: {ModuleId}", ModuleDto.id);
                return StatusCode(500, new { message = ex.Message });
            }
        }

        /// <summary>
        /// Elimina una Module de manera física por su id
        /// </summary>
        /// <param name="id">id de la Module</param>
        [HttpDelete("{id}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        [ProducesResponseType(500)]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                await _ModuleBusiness.DeleteAsync(id);
                return Ok(new { message = "Eliminado correctamente" });

            }
            catch (ValidationException ex)
            {
                _logger.LogWarning(ex, "Validación fallida al eliminar Module con id: {ModuleId}", id);
                return BadRequest(new { message = ex.Message });
            }
            catch (EntityNotFoundException ex)
            {
                _logger.LogInformation(ex, "Module no encontrada para eliminar con id: {ModuleId}", id);
                return NotFound(new { message = ex.Message });
            }
            catch (ExternalServiceException ex)
            {
                _logger.LogError(ex, "Error al eliminar Module con id: {ModuleId}", id);
                return StatusCode(500, new { message = ex.Message });
            }
        }


        /// <summary>
        /// Elimina lógicamente una Module (marca como inactiva o eliminada)
        /// </summary>
        /// <param name="id">ID del Module</param>
        [HttpPatch("logical-delete/{id}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        [ProducesResponseType(500)]
        public async Task<IActionResult> DeleteLogical(int id)
        {
            try
            {
                await _ModuleBusiness.DeleteLogicAsync(id);
                return Ok(new { message = "Eliminado lógicamente correctamente" });

            }
            catch (ValidationException ex)
            {
                _logger.LogWarning(ex, "Validación fallida al eliminar lógicamente Module con id: {ModuleId}", id);
                return BadRequest(new { message = ex.Message });
            }
            catch (EntityNotFoundException ex)
            {
                _logger.LogInformation(ex, "Module no encontrada para eliminación lógica con id: {ModuleId}", id);
                return NotFound(new { message = ex.Message });
            }
            catch (ExternalServiceException ex)
            {
                _logger.LogError(ex, "Error al eliminar lógicamente Module con id: {ModuleId}", id);
                return StatusCode(500, new { message = ex.Message });
            }
        }

        /// <summary>
        /// Restaura lógicamente una Module (revierte eliminación lógica)
        /// </summary>
        /// <param name="id">ID del Module</param>
        [HttpPatch("logical-restore/{id}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        [ProducesResponseType(500)]
        public async Task<IActionResult> RestoreLogical(int id)
        {
            try
            {
                var result = await _ModuleBusiness.RestoreLogicAsync(id);
                if (result)
                    return NoContent();

                return NotFound(new { message = $"Module con id {id} no encontrado o no está marcado como eliminado." });
            }
            catch (ValidationException ex)
            {
                _logger.LogWarning(ex, "Validación fallida al restaurar lógicamente Module con id: {ModuleId}", id);
                return BadRequest(new { message = ex.Message });
            }
            catch (EntityNotFoundException ex)
            {
                _logger.LogInformation(ex, "Module no encontrado para restauración lógica con id: {ModuleId}", id);
                return NotFound(new { message = ex.Message });
            }
            catch (ExternalServiceException ex)
            {
                _logger.LogError(ex, "Error al restaurar lógicamente Module con id: {ModuleId}", id);
                return StatusCode(500, new { message = ex.Message });
            }
        }


    }
}
