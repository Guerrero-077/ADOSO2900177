using Business.ServiceRepository;
using Data.RepositoryData;
using Entity.DTOs;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RouteAttribute = Microsoft.AspNetCore.Mvc.RouteAttribute;

namespace Web1.Controller;


[Route("api/[controller]")]
[ApiController]
[Produces("application/json")]
// [Authorize]
public class PersonController : ControllerBase
 
{
    private readonly PersonService _personBusiness;
    private readonly ILogger<PersonService> _logger;

    public PersonController(PersonService personBusiness,ILogger<PersonService> logger)
    {
        _personBusiness = personBusiness;
        _logger = logger;


    }


    [HttpGet]
    
    public async Task<IActionResult> GetAll(){
        try{
            var persons = await _personBusiness.GetAll();
            return Ok(persons);
        }catch(Exception ex){
            _logger.LogError("Error al obtener todos las persoans");
            return StatusCode(500,new{ message = ex.Message});
        }
    }


    [HttpGet("{id}")]
    public async Task<IActionResult> GetbyId(int id){
        try{

            var person = await _personBusiness.GetAllById(id);
            return Ok(person);
        }catch(Exception ex){
            _logger.LogWarning(ex,"Error al obtener la persona por id");
            return BadRequest(new {message = ex.Message});
        }
    }

    [HttpPost]
    public async Task<IActionResult> Create(PersonDto dto){
        try{
            var created = await _personBusiness.AddAsycn(dto);
            return CreatedAtAction(nameof(GetbyId),new{id = created.id},created);
        }
        catch(Exception ex){
            _logger.LogError(ex,"Error al crear person");
            return StatusCode(500,new{message = ex.Message});
        }
    }

    [HttpPut]
    public async Task<IActionResult> Update(PersonDto dto){
        try{
            var updated = await _personBusiness.UpdateAsycn(dto);
            return Ok(new{message = "Actualizado con exito"});
        }catch(Exception ex){
            _logger.LogWarning(ex,"Error al actualizar persona");
            return BadRequest(new{message = ex.Message});
        }
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id){
        try
        {
            await _personBusiness.Deleted(id);
            return Ok(new{message = "Se borro la persona exitosamente"});
        }catch(Exception ex){
            _logger.LogWarning(ex,"Error al borrar la persona");
            return StatusCode(500,new{message = ex.Message});
        }
    }

}
