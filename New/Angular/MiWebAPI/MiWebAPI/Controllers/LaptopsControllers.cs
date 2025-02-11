using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MiWebAPI.Entidades;
using Npgsql.EntityFrameworkCore.PostgreSQL.Query.Expressions.Internal;

namespace MiWebAPI.Controllers
{
    [Route("api/laptops")]
    [ApiController]
    public class LaptopsControllers : ControllerBase

    {
        private readonly ApplicationDbContext context;

        public LaptopsControllers(ApplicationDbContext context)
        {
            this.context = context;
        }

        //Traer todos lo elementos
        [HttpGet]

        public async Task<List<Laptop>> Get()
        {
            return await context.Laptops.ToListAsync();
        }

        [HttpGet("{nombre}/existe")]
        
        public async Task<ActionResult<bool>> ExisteLaptopConNombre(string nombre, int id) 
        {
            if (id == 0)
            {

                return await context.Laptops.AnyAsync(x => x.Nombre == nombre);
            }
            else
            {
                return await context.Laptops.AnyAsync(x => x.Nombre == nombre && x.Id != id);
            }
        }

        //Traer un solo elemento
        [HttpGet("{id:int}", Name = "ObtenerLaptopPorId")]//atraves de la url se envia el id de la laptop para poder traerla

        public async Task<ActionResult<Laptop>> Get(int id)
        {
            var laptop = await context.Laptops.FirstOrDefaultAsync(x => x.Id == id);//se trae la primera laptop que se encutre con ese id

            if (laptop is null)
            {
                return NotFound();
            }
            return laptop;

        }

        [HttpPost] //Opciones creaer
        public async Task<IActionResult> Post([FromBody] Laptop laptop)
        {
            var existe = await context.Laptops.AnyAsync(x => x.Nombre == laptop.Nombre);
            if (existe)
            {
                var mensajeDeError = $"Ya existe la laptop con el nombre {laptop.Nombre}";
                ModelState.AddModelError(nameof(laptop.Nombre), mensajeDeError);
                return ValidationProblem(ModelState);
            }   
            context.Add(laptop);//El Add sirve para guardar los datos antes de enviarlos a la DB
            await context.SaveChangesAsync();//Ahora si se guardan los cambios
            return CreatedAtRoute("ObtenerLaptopPorId", new { id = laptop.Id }, laptop);

        }

        [HttpPut("{id:int}")] //Opciones para actualizar  

        public async Task<ActionResult> Put(int id, [FromBody] Laptop laptop)
        {
            var existeLaptop = await context.Laptops.AnyAsync(x => x.Id == id);
            if (!existeLaptop)
            {
                return NotFound();
            }

            var existe = await context.Laptops.AnyAsync(x => x.Nombre == laptop.Nombre && x.Id != id);

            if (existe)
            {
                var mensajeDeError = $"Ya existe la laptop con el nombre {laptop.Nombre}";
                ModelState.AddModelError(nameof(laptop.Nombre), mensajeDeError);
                return ValidationProblem(ModelState);
            }
            laptop.Id = id;
            context.Update(laptop);
            await context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id:int}")]//Opcion de eliminar

        public async Task<ActionResult> Delete(int id)
        {
            var filasBorradas = await context.Laptops.Where(x => x.Id == id).ExecuteDeleteAsync();//Busca los id que se encuentran
            if (filasBorradas == 0)
            {
                return NotFound();
                
            }
            return NoContent();
        }
    }
}
