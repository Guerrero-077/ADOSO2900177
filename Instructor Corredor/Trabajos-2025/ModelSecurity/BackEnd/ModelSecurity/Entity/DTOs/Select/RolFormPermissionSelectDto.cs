using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity.DTOs.Select
{
    public class RolFormPermissionSelectDto
    {
        public int id { get; set; }
        public string rol_name { get; set; }
        public string form_name { get; set; }
        public string permission_name { get; set; }
        public int rolid { get; set; }
        public int formid { get; set; }
        public int permissionid { get; set; }
    }
}
