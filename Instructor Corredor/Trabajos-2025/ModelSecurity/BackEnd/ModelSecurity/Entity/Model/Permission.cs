namespace Entity.Model
{
    public class Permission
    {
        public int id { get; set; }
        public string name { get; set; }
        public string description { get; set; }
        public bool active { get; set; }
        public bool is_deleted { get; set; }
        public ICollection<RolFormPermission> rol_form_permission { get; set; }

    }
}
