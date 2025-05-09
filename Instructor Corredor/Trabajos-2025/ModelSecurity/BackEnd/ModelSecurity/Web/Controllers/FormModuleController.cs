using Business.Services;
using Entity.DTOs.Default;
using Entity.DTOs.Select;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.SqlServer.Server;
using Utilities.Exceptions;

namespace Web.Controllers
{
    /// <summary>
    /// Controlador para la gestión de FormModule en el sistema
    /// </summary>
    
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class FormModuleController : ControllerBase
    {
        private readonly FormModuleService _FormModuleBusiness;
        private readonly ILogger<FormModuleController> _logger;

        /// <summary>
        /// Constructor del controlador de FormModule
        /// </summary>
        /// <param name="FormModuleBusiness">Capa de negocio de FormModule</param>
        /// <param name="logger">Logger para registro de eventos</param>
        public FormModuleController(FormModuleService FormModuleBusiness, ILogger<FormModuleController> logger)
        {
            _FormModuleBusiness = FormModuleBusiness;
            _logger = logger;
        }

        /// <summary>
        /// Obtiene todos los FormModule del sistema
        /// </summary>
        /// <returns>Lista de FormModule</returns>
        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<FormModuleSelectDto>), 200)]
        [ProducesResponseType(500)]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                var FormModules = await _FormModuleBusiness.GetAllJoin();
                return Ok(FormModules);
            }
            catch (ExternalServiceException ex)
            {
                _logger.LogError(ex, "Error al obtener FormModule");
                return StatusCode(500, new { message = ex.Message });
            }
        }

        /// <summary>
        /// Obtiene una FormModule específica por su id
        /// </summary>
        /// <param name="id">id de la FormModule</param>
        /// <returns>FormModule solicitada</returns>
        [HttpGet("{id}")]
        [ProducesResponseType(typeof(FormModuleSelectDto), 200)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        [ProducesResponseType(500)]
        public async Task<IActionResult> GetById(int id)
        {
            try
            {
                var FormModule = await _FormModuleBusiness.GetByIdJoin(id);
                return Ok(FormModule);
            }
            catch (ValidationException ex)
            {
                _logger.LogWarning(ex, "Validación fallida para la FormModule con id: {FormModuleId}", id);
                return BadRequest(new { message = ex.Message });
            }
            catch (EntityNotFoundException ex)
            {
                _logger.LogInformation(ex, "FormModule no encontrada con id: {FormModuleId}", id);
                return NotFound(new { message = ex.Message });
            }
            catch (ExternalServiceException ex)
            {
                _logger.LogError(ex, "Error al obtener FormModule con id: {FormModuleId}", id);
                return StatusCode(500, new { message = ex.Message });
            }
        }

        /// <summary>
        /// Crea una nueva FormModule en el sistema
        /// </summary>
        /// <param name="FormModuleDto">Datos de la FormModule a crear</param>
        [HttpPost]
        [ProducesResponseType(typeof(FormModuleDto), 201)]
        [ProducesResponseType(400)]
        [ProducesResponseType(500)]
        public async Task<IActionResult> CreatePerson([FromBody] FormModuleDto FormModuleDto)
        {
            try
            {
                var createdFormModule = await _FormModuleBusiness.CreateAsync(FormModuleDto);
                return CreatedAtAction(nameof(GetById), new { id = createdFormModule.id }, createdFormModule);
            }
            catch (ValidationException ex)
            {
                _logger.LogWarning(ex, "Validación fallida al crear FormModule");
                return BadRequest(new { message = ex.Message });
            }
            catch (ExternalServiceException ex)
            {
                _logger.LogError(ex, "Error al crear FormModule");
                return StatusCode(500, new { message = ex.Message });
            }
        }

        /// <summary>
        /// Actualiza una FormModule existente por su id
        /// </summary>
        /// <param name="FormModuleDto">Datos de la FormModule a actualizar</param>
        [HttpPut("{id}")]
        [ProducesResponseType(typeof(FormModuleDto), 200)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        [ProducesResponseType(500)]
        public async Task<IActionResult> Update(int id, [FromBody] FormModuleDto FormModuleDto)
        {
            //if (id != FormModuleDto.id)
            //    return BadRequest(new { message = "El ID de la URL no coincide con el del objeto." });

            try
            {
                FormModuleDto.id = id;
                var updatedFormModule = await _FormModuleBusiness.UpdateAsync(id, FormModuleDto);
                return Ok(new { message = "Actualizado correctamente" });
            }
            catch (ValidationException ex)
            {
                _logger.LogWarning(ex, "Validación fallida al actualizar FormModule con id: {FormModuleId}", FormModuleDto.id);
                return BadRequest(new { message = ex.Message });
            }
            catch (EntityNotFoundException ex)
            {
                _logger.LogInformation(ex, "FormModule no encontrada para actualizar con id: {FormModuleId}", FormModuleDto.id);
                return NotFound(new { message = ex.Message });
            }
            catch (ExternalServiceException ex)
            {
                _logger.LogError(ex, "Error al actualizar FormModule con id: {FormModuleId}", FormModuleDto.id);
                return StatusCode(500, new { message = ex.Message });
            }
        }

        /// <summary>
        /// Elimina una FormModule de manera física por su id
        /// </summary>
        /// <param name="id">id de la FormModule</param>
        [HttpDelete("{id}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        [ProducesResponseType(500)]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                await _FormModuleBusiness.DeleteAsync(id);
                return Ok(new { message = "Eliminado correctamente" });

            }
            catch (ValidationException ex)
            {
                _logger.LogWarning(ex, "Validación fallida al eliminar FormModule con id: {FormModuleId}", id);
                return BadRequest(new { message = ex.Message });
            }
            catch (EntityNotFoundException ex)
            {
                _logger.LogInformation(ex, "FormModule no encontrada para eliminar con id: {FormModuleId}", id);
                return NotFound(new { message = ex.Message });
            }
            catch (ExternalServiceException ex)
            {
                _logger.LogError(ex, "Error al eliminar FormModule con id: {FormModuleId}", id);
                return StatusCode(500, new { message = ex.Message });
            }
        }


        /// <summary>
        /// Elimina lógicamente una FormModule (marca como inactiva o eliminada)
        /// </summary>
        /// <param name="id">ID del FormModule</param>
        [HttpPatch("logical-delete/{id}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        [ProducesResponseType(500)]
        public async Task<IActionResult> DeleteLogical(int id)
        {
            try
            {
                await _FormModuleBusiness.DeleteLogicAsync(id);
                return Ok(new { message = "Eliminado lógicamente correctamente" });

            }
            catch (ValidationException ex)
            {
                _logger.LogWarning(ex, "Validación fallida al eliminar lógicamente FormModule con id: {FormModuleId}", id);
                return BadRequest(new { message = ex.Message });
            }
            catch (EntityNotFoundException ex)
            {
                _logger.LogInformation(ex, "FormModule no encontrada para eliminación lógica con id: {FormModuleId}", id);
                return NotFound(new { message = ex.Message });
            }
            catch (ExternalServiceException ex)
            {
                _logger.LogError(ex, "Error al eliminar lógicamente FormModule con id: {FormModuleId}", id);
                return StatusCode(500, new { message = ex.Message });
            }
        }

        /// <summary>
        /// Restaura lógicamente una FormModule (revierte eliminación lógica)
        /// </summary>
        /// <param name="id">ID del FormModule</param>
        [HttpPatch("logical-restore/{id}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        [ProducesResponseType(500)]
        public async Task<IActionResult> RestoreLogical(int id)
        {
            try
            {
                var result = await _FormModuleBusiness.RestoreLogicAsync(id);
                if (result)
                    return NoContent();

                return NotFound(new { message = $"FormModule con id {id} no encontrado o no está marcado como eliminado." });
            }
            catch (ValidationException ex)
            {
                _logger.LogWarning(ex, "Validación fallida al restaurar lógicamente FormModule con id: {FormModuleId}", id);
                return BadRequest(new { message = ex.Message });
            }
            catch (EntityNotFoundException ex)
            {
                _logger.LogInformation(ex, "FormModule no encontrado para restauración lógica con id: {FormModuleId}", id);
                return NotFound(new { message = ex.Message });
            }
            catch (ExternalServiceException ex)
            {
                _logger.LogError(ex, "Error al restaurar lógicamente FormModule con id: {FormModuleId}", id);
                return StatusCode(500, new { message = ex.Message });
            }
        }


    }
}
