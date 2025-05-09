namespace Entity.Model
{
    public class User 
    {
        //public int id { get; set; }
        //public string user_name { get; set; }
        //public string email { get; set; }
        //public string password { get; set; }
        ////public DateTime createddate { get; set; }
        //public bool active { get; set; }
        //public bool is_deleted { get; set; }
        //public int person_id { get; set; }
        //public Person person { get; set; }

        public int id { get; set; }
        public string user_name { get; set; }
        public string email { get; set; }
        public string password { get; set; }
        public bool active { get; set; }
        public bool is_deleted { get; set; }
        public int person_id { get; set; }
        public Person person { get; set; }
        public List<RolUser> rol_users { get; set; } = new List<RolUser>();
    }
}
