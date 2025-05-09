namespace Entity.DTOs.Default
{
    public class RolFormPermissionDto
    {
        public int id { get; set; }
        public int rolid { get; set; }
        public int formid { get; set; }
        public bool active { get; set; }
        public int permissionid { get; set; }
    }
}
