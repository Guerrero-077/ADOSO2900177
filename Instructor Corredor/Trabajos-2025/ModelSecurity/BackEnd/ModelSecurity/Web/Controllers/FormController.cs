
using Business.Services;
using Entity.DTOs.Default;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
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
    public class FormController : ControllerBase
    {
        private readonly FormService _FormBusiness;
        private readonly ILogger<FormController> _logger;

        /// <summary>
        /// Constructor del controlador de User
        /// </summary>
        /// <param name="FormBusiness">Capa de negocio de User</param>
        /// <param name="logger">Logger para registro de eventos</param>
        public FormController(FormService FormBusiness, ILogger<FormController> logger)
        {
            _FormBusiness = FormBusiness;
            _logger = logger;
        }

        /// <summary>
        /// Obtiene todos los User del sistema
        /// </summary>
        /// <returns>Lista de User</returns>
        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<FormDto>), 200)]
        [ProducesResponseType(500)]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                var Forms = await _FormBusiness.GetAllAsync();
                return Ok(Forms);
            }
            catch (ExternalServiceException ex)
            {
                _logger.LogError(ex, "Error al obtener User");
                return StatusCode(500, new { message = ex.Message });
            }
        }

        //Traer solo borrados logicamnete
        [HttpGet("getDelete")]
        [ProducesResponseType(typeof(IEnumerable<FormDto>), 200)]
        [ProducesResponseType(500)]
        public async Task<IActionResult> GetAllDeletes()
        {
            try
            {
                var Forms = await _FormBusiness.GetAllDeletes();
                return Ok(Forms);
            }
            catch (ExternalServiceException ex)
            {
                _logger.LogError(ex, "Error al obtener User borrados logicamente");
                return StatusCode(500, new { message = ex.Message });
            }
        }

        /// <summary>
        /// Obtiene una Form específica por su id
        /// </summary>
        /// <param name="id">id de la Form</param>
        /// <returns>Form solicitada</returns>
        [HttpGet("{id}")]
        [ProducesResponseType(typeof(FormDto), 200)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        [ProducesResponseType(500)]
        public async Task<IActionResult> GetById(int id)
        {
            try
            {
                var person = await _FormBusiness.GetByIdAsync(id);
                return Ok(person);
            }
            catch (ValidationException ex)
            {
                _logger.LogWarning(ex, "Validación fallida para la Form con id: {FormId}", id);
                return BadRequest(new { message = ex.Message });
            }
            catch (EntityNotFoundException ex)
            {
                _logger.LogInformation(ex, "Form no encontrada con id: {FormId}", id);
                return NotFound(new { message = ex.Message });
            }
            catch (ExternalServiceException ex)
            {
                _logger.LogError(ex, "Error al obtener Form con id: {FormId}", id);
                return StatusCode(500, new { message = ex.Message });
            }
        }

        /// <summary>
        /// Crea una nueva Form en el sistema
        /// </summary>
        /// <param name="FormDto">Datos de la Form a crear</param>
        [HttpPost]
        [ProducesResponseType(typeof(FormDto), 201)]
        [ProducesResponseType(400)]
        [ProducesResponseType(500)]
        public async Task<IActionResult> CreatePerson([FromBody] FormDto FormDto)
        {
            try
            {
                var createdRol = await _FormBusiness.CreateAsync(FormDto);
                return CreatedAtAction(nameof(GetById), new { createdRol.id }, createdRol);
            }
            catch (ValidationException ex)
            {
                _logger.LogWarning(ex, "Validación fallida al crear Form");
                return BadRequest(new { message = ex.Message });
            }
            catch (ExternalServiceException ex)
            {
                _logger.LogError(ex, "Error al crear Form");
                return StatusCode(500, new { message = ex.Message });
            }
        }

        /// <summary>
        /// Actualiza una Form existente por su id
        /// </summary>
        /// <param name="FormDto">Datos de la Form a actualizar</param>
        [HttpPut("{id}")]
        [ProducesResponseType(typeof(UserDto), 200)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        [ProducesResponseType(500)]
        public async Task<IActionResult> Update(int id,[FromBody] FormDto formDto)
        {

            try
            {
                formDto.id = id;
                var updatedForm = await _FormBusiness.UpdateAsync(id, formDto);
                return Ok(new { message = "Actualizado correctamente" });

            }
            catch (ValidationException ex)
            {
                _logger.LogWarning(ex, "Validación fallida al actualizar Form con id: {FormId}", formDto.id);
                return BadRequest(new { message = ex.Message });
            }
            catch (EntityNotFoundException ex)
            {
                _logger.LogInformation(ex, "Form no encontrada para actualizar con id: {FormId}", formDto.id);
                return NotFound(new { message = ex.Message });
            }
            catch (ExternalServiceException ex)
            {
                _logger.LogError(ex, "Error al actualizar Form con id: {FormId}", formDto.id);
                return StatusCode(500, new { message = ex.Message });
            }
        }


        /// <summary>
        /// Elimina una Form de manera física por su id
        /// </summary>
        /// <param name="id">id de la Form</param>
        [HttpDelete("{id}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        [ProducesResponseType(500)]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                await _FormBusiness.DeleteAsync(id);
                return Ok(new { message = "Eliminado correctamente" });
            }
            catch (ValidationException ex)
            {
                _logger.LogWarning(ex, "Validación fallida al eliminar Form con id: {FormId}", id);
                return BadRequest(new { message = ex.Message });
            }
            catch (EntityNotFoundException ex)
            {
                _logger.LogInformation(ex, "Form no encontrada para eliminar con id: {FormId}", id);
                return NotFound(new { message = ex.Message });
            }
            catch (ExternalServiceException ex)
            {
                _logger.LogError(ex, "Error al eliminar Form con id: {FormId}", id);
                return StatusCode(500, new { message = ex.Message });
            }
        }


        /// <summary>
        /// Elimina lógicamente una Form (marca como inactiva o eliminada)
        /// </summary>
        /// <param name="id">ID del Form</param>
        [HttpPatch("logical-delete/{id}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        [ProducesResponseType(500)]
        public async Task<IActionResult> DeleteLogical(int id)
        {
            try
            {
                await _FormBusiness.DeleteLogicAsync(id);
                return Ok(new { message = "Eliminado lógicamente correctamente" });
            }
            catch (ValidationException ex)
            {
                _logger.LogWarning(ex, "Validación fallida al eliminar lógicamente Form con id: {FormId}", id);
                return BadRequest(new { message = ex.Message });
            }
            catch (EntityNotFoundException ex)
            {
                _logger.LogInformation(ex, "Form no encontrada para eliminación lógica con id: {FormId}", id);
                return NotFound(new { message = ex.Message });
            }
            catch (ExternalServiceException ex)
            {
                _logger.LogError(ex, "Error al eliminar lógicamente Form con id: {FormId}", id);
                return StatusCode(500, new { message = ex.Message });
            }
        }

        /// <summary>
        /// Restaura lógicamente una Form (revierte eliminación lógica)
        /// </summary>
        /// <param name="id">ID del Form</param>
        [HttpPatch("logical-restore/{id}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        [ProducesResponseType(500)]
        public async Task<IActionResult> RestoreLogical(int id)
        {
            try
            {
                var result = await _FormBusiness.RestoreLogicAsync(id);
                if (result)
                    return NoContent();

                return NotFound(new { message = $"Form con id {id} no encontrado o no está marcado como eliminado." });
            }
            catch (ValidationException ex)
            {
                _logger.LogWarning(ex, "Validación fallida al restaurar lógicamente Form con id: {FormId}", id);
                return BadRequest(new { message = ex.Message });
            }
            catch (EntityNotFoundException ex)
            {
                _logger.LogInformation(ex, "Form no encontrado para restauración lógica con id: {FormId}", id);
                return NotFound(new { message = ex.Message });
            }
            catch (ExternalServiceException ex)
            {
                _logger.LogError(ex, "Error al restaurar lógicamente Form con id: {FormId}", id);
                return StatusCode(500, new { message = ex.Message });
            }
        }


    }
}
