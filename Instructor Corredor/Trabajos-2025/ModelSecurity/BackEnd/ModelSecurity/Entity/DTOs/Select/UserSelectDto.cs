using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity.DTOs.Select
{
    public class UserSelectDto
    {
        public int Id { get; set; }
        public string user_name { get; set; }
        public string Email { get; set; }
        public string Name_Person { get; set; }
        public bool active { get; set; }
        public int person_id { get; set; }

    }
}
