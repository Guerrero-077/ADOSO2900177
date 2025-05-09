using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity.Models
{
    public class Rol
    {
        public int id { get; set; }
        public string name { get; set; } 
        public string description { get; set; }
           
        public List<RolUser> rolUsers { get; set; } = new List<RolUser>();

    }
}
