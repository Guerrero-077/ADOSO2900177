namespace Entity.Model
{
    public class RolUser 
    {
        public int id { get; set; }
        public int rolid { get; set; }
        public int userid { get; set; }
        public bool is_deleted { get; set; }
        public Rol rol { get; set; }
        public User user { get; set; }
    }
}
