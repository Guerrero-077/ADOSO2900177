namespace Entity.Model
{
    public class FormModule 
    {
        public int id { get; set; }
        public int formid { get; set; }
        public int moduleid { get; set; }
        public bool is_deleted { get; set; }

        public Form form { get; set; }
        public Module module { get; set; }
    }
}
