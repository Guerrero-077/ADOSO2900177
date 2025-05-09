using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity.Models
{
    public class User
    {
        public int id {  get; set; }
        public string name { get; set; }
        public string password { get; set; }
        public string email { get; set; }
        public List<RolUser> rolUsers { get; set; } = new List<RolUser>();
    }
}
