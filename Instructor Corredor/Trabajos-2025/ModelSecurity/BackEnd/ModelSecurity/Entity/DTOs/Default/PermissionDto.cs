namespace Entity.DTOs.Default
{
    public class PermissionDto
    {
        public int id { get; set; }
        public string name { get; set; }
        public string description { get; set; }
        public bool active { get; set; }
        public bool is_deleted { get; set; }

    }
}
