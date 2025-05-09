using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity.Models
{
    public class RolUser
    {
        public int id { get; set; }
        public int userId { get; set;}
        public int rolId {  get; set;}
        public User user { get; set; }
        public Rol rol { get; set; }
    }
}
