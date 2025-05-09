using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity.DTOs.Default
{
    public class UserDto
    {
        public int id { get; set; }
        public string user_name { get; set; }
        public string email { get; set; }
        public string password { get; set; }
        public bool active { get; set; }
        public int person_id { get; set; }
        public bool is_deleted { get; set; }

    }
}
