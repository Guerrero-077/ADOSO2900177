using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore.Migrations;

namespace MiWebAPI.Entidades
{

    //comando para hacer migracion a la base de datos
    //1 Add-Migration name ejemplo(TablaLaptops)
    //2 Update-Database

    public class Laptop
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "El campo {0} es requerido")]
        public required string Nombre { get; set; }
    }
}
