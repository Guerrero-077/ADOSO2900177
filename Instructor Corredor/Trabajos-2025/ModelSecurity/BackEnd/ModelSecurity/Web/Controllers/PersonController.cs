using Business.Services;
using Entity.DTOs;
using Entity.DTOs.Default;
using Entity.DTOs.Select;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Utilities.Exceptions;

namespace Web.Controllers
{
    /// <summary>
    /// Controlador para la gestión de personas en el sistema
    /// </summary>
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class PersonController : ControllerBase
    {
        private readonly PersonService _PersonBusiness;
        private readonly ILogger<PersonController> _logger;

        /// <summary>
        /// Constructor del controlador de personas
        /// </summary>
        /// <param name="PersonBusiness">Capa de negocio de personas</param>
        /// <param name="logger">Logger para registro de eventos</param>
        public PersonController(PersonService PersonBusiness, ILogger<PersonController> logger)
        {
            _PersonBusiness = PersonBusiness;
            _logger = logger;
        }

        /// <summary>
        /// Obtiene todas las personas del sistema
        /// </summary>
        /// <returns>Lista de personas</returns>
        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<PersonSelectDto>), 200)]
        [ProducesResponseType(500)]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                var persons = await _PersonBusiness.GetAllJoin();
                return Ok(persons);
            }
            catch (ExternalServiceException ex)
            {
                _logger.LogError(ex, "Error al obtener personas");
                return StatusCode(500, new { message = ex.Message });
            }
        }

        //Traer eliminados logicamente
        [HttpGet("getDelete")]
        [ProducesResponseType(typeof(IEnumerable<PersonSelectDto>), 200)]
        [ProducesResponseType(500)]
        public async Task<IActionResult> GetAllDeletes()
        {
            try
            {
                var persons = await _PersonBusiness.GetAllDeletes();
                return Ok(persons);
            }
            catch (ExternalServiceException ex)
            {
                _logger.LogError(ex, "Error al obtener personas");
                return StatusCode(500, new { message = ex.Message });
            }
        }

        /// <summary>
        /// Obtiene una persona específica por su ID
        /// </summary>
        /// <param name="id">ID de la persona</param>
        /// <returns>Persona solicitada</returns>
        [HttpGet("{id}")]
        [ProducesResponseType(typeof(PersonSelectDto), 200)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        [ProducesResponseType(500)]
        public async Task<IActionResult> GetById(int id)
        {
            try
            {
                var person = await _PersonBusiness.GetByIdJoin(id);
                return Ok(person);
            }
            catch (ValidationException ex)
            {
                _logger.LogWarning(ex, "Validación fallida para la persona con ID: {PersonId}", id);
                return BadRequest(new { message = ex.Message });
            }
            catch (EntityNotFoundException ex)
            {
                _logger.LogInformation(ex, "Persona no encontrada con ID: {PersonId}", id);
                return NotFound(new { message = ex.Message });
            }
            catch (ExternalServiceException ex)
            {
                _logger.LogError(ex, "Error al obtener persona con ID: {PersonId}", id);
                return StatusCode(500, new { message = ex.Message });
            }
        }

        /// <summary>
        /// Crea una nueva persona en el sistema
        /// </summary>
        /// <param name="personDto">Datos de la persona a crear</param>
        [HttpPost]
        [ProducesResponseType(typeof(PersonDto), 201)]
        [ProducesResponseType(400)]
        [ProducesResponseType(500)]
        public async Task<IActionResult> CreatePerson([FromBody] PersonDto personDto)
        {
            try
            {
                var createdPerson = await _PersonBusiness.CreateAsync(personDto);
                return CreatedAtAction(nameof(GetById), new { id = createdPerson.id }, createdPerson);
            }
            catch (ValidationException ex)
            {
                _logger.LogWarning(ex, "Validación fallida al crear persona");
                return BadRequest(new { message = ex.Message });
            }
            catch (ExternalServiceException ex)
            {
                _logger.LogError(ex, "Error al crear persona");
                return StatusCode(500, new { message = ex.Message });
            }
        }

        /// <summary>
        /// Actualiza una persona existente por su ID
        /// </summary>
        /// <param name="personDto">Datos de la persona a actualizar</param>
        [HttpPut("{id}")]
        [ProducesResponseType(typeof(PersonDto), 200)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        [ProducesResponseType(500)]
        public async Task<IActionResult> Update(int id, [FromBody] PersonDto personDto)
        {
            //if (id != personDto.id)
            //    return BadRequest(new { message = "El ID de la URL no coincide con el del objeto." });

            try
            {
                personDto.id = id;
                var updatedPerson = await _PersonBusiness.UpdateAsync(id, personDto);
                return Ok(new { message = "Actualizado correctamente" });

            }
            catch (ValidationException ex)
            {
                _logger.LogWarning(ex, "Validación fallida al actualizar persona con ID: {PersonId}", personDto.id);
                return BadRequest(new { message = ex.Message });
            }
            catch (EntityNotFoundException ex)
            {
                _logger.LogInformation(ex, "Persona no encontrada para actualizar con ID: {PersonId}", personDto.id);
                return NotFound(new { message = ex.Message });
            }
            catch (ExternalServiceException ex)
            {
                _logger.LogError(ex, "Error al actualizar persona con ID: {PersonId}", personDto.id);
                return StatusCode(500, new { message = ex.Message });
            }
        }

        /// <summary>
        /// Elimina una persona de manera física por su ID
        /// </summary>
        /// <param name="id">ID de la persona</param>
        [HttpDelete("{id}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        [ProducesResponseType(500)]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                await _PersonBusiness.DeleteAsync(id);
                return Ok(new { message = "Eliminado correctamente" });

            }
            catch (DbUpdateException ex)
            {
                if (ex.InnerException?.Message.Contains("FK_User_Person") == true)
                {
                    return BadRequest(new
                    {
                        message = "No se puede eliminar esta persona porque está asociada a un usuario. Elimine primero el usuario correspondiente."
                    });
                }

                return StatusCode(500, new { message = "Error al eliminar el registro.", details = ex.Message });
            }

            catch (ValidationException ex)
            {
                _logger.LogWarning(ex, "Validación fallida al eliminar persona con ID: {PersonId}", id);
                return BadRequest(new { message = ex.Message });
            }
            catch (EntityNotFoundException ex)
            {
                _logger.LogInformation(ex, "Persona no encontrada para eliminar con ID: {PersonId}", id);
                return NotFound(new { message = ex.Message });
            }
            catch (ExternalServiceException ex)
            {
                _logger.LogError(ex, "Error al eliminar persona con ID: {PersonId}", id);
                return StatusCode(500, new { message = ex.Message });
            }
        }

        /// <summary>
        /// Elimina lógicamente una persona (marca como inactiva o eliminada)
        /// </summary>
        /// <param name="id">ID del Person</param>
        [HttpPatch("logical-delete/{id}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        [ProducesResponseType(500)]
        public async Task<IActionResult> DeleteLogical(int id)
        {
            try
            {
                await _PersonBusiness.DeleteLogicAsync(id);
                return Ok(new { message = "Eliminado lógicamente correctamente" });

            }
            catch (ValidationException ex)
            {
                _logger.LogWarning(ex, "Validación fallida al eliminar lógicamente persona con id: {PersonId}", id);
                return BadRequest(new { message = ex.Message });
            }
            catch (EntityNotFoundException ex)
            {
                _logger.LogInformation(ex, "Persona no encontrada para eliminación lógica con id: {PersonId}", id);
                return NotFound(new { message = ex.Message });
            }
            catch (ExternalServiceException ex)
            {
                _logger.LogError(ex, "Error al eliminar lógicamente persona con id: {PersonId}", id);
                return StatusCode(500, new { message = ex.Message });
            }
        }

        /// <summary>
        /// Restaura lógicamente una persona (revierte eliminación lógica)
        /// </summary>
        /// <param name="id">ID del Person</param>
        [HttpPatch("logical-restore/{id}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        [ProducesResponseType(500)]
        public async Task<IActionResult> RestoreLogical(int id)
        {
            try
            {
                var result = await _PersonBusiness.RestoreLogicAsync(id);
                if (result)
                    return NoContent();

                return NotFound(new { message = $"Person con id {id} no encontrado o no está marcado como eliminado." });
            }
            catch (ValidationException ex)
            {
                _logger.LogWarning(ex, "Validación fallida al restaurar lógicamente Person con id: {PersonId}", id);
                return BadRequest(new { message = ex.Message });
            }
            catch (EntityNotFoundException ex)
            {
                _logger.LogInformation(ex, "Person no encontrado para restauración lógica con id: {PersonId}", id);
                return NotFound(new { message = ex.Message });
            }
            catch (ExternalServiceException ex)
            {
                _logger.LogError(ex, "Error al restaurar lógicamente Person con id: {PersonId}", id);
                return StatusCode(500, new { message = ex.Message });
            }
        }

    }
}
