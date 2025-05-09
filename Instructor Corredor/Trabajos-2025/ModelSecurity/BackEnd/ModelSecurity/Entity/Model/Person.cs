namespace Entity.Model
{
    public class Person 
    {
        public int id { get; set; }
        public string first_name { get; set; }
        public string last_name { get; set; }
        public string phone_number { get; set; }
        public bool active { get; set; }
        public bool is_deleted { get; set; }
        public User User { get; set; }
    }
}
