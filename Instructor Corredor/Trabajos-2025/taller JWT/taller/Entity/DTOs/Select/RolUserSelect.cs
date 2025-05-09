using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity.DTOs.Select
{
    public class RolUserSelect
    {
        public int id { get; set; }
        public int userId { get; set; }
        public int rolId { get; set; }
        public string userName { get; set; }
        public string rolName { get; set; }
    }
}
