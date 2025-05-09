namespace Entity.DTOs.Select
{
    public class PersonSelectDto
    {
        public int id { get; set; }
        public string first_name { get; set; }
        public string last_name { get; set; }
        public string phone_number { get; set; }
        public bool active { get; set; }

        public string full_name => $"{first_name} {last_name}";
    }

}
