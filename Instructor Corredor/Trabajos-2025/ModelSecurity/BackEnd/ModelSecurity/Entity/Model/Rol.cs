namespace Entity.Model
{
    public class Rol 
    {
        public int id { get; set; }
        public string name { get; set; }
        public string description { get; set; }
        public bool active { get; set; }
        public bool is_deleted { get; set; }
        public List<RolFormPermission> rol_form_permission { get; set; }
        public List<RolUser> rol_users { get; set; } = new List<RolUser>();

    }
}
