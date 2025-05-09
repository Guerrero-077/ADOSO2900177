namespace Entity.Model
{
    public class RolFormPermission
    {
        public int id {  get; set; }
        public Rol rol { get; set; }
        public int rolid { get; set; }
        public Form form { get; set; }
        public int formid { get; set; }
        public Permission permission { get; set; }
        public int permissionid { get; set; }
        public bool is_deleted { get; set; }
    }
}
