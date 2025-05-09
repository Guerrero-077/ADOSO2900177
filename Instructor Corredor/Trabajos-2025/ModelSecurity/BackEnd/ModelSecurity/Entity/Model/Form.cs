namespace Entity.Model
{
    public class Form 
    {
        public int id {  get; set; }
        public string name { get; set; }
        public string description { get; set; }
        //public DateTime created_date { get; set; }  
        public bool active { get; set; }
        public bool is_deleted { get; set; }
        public ICollection<RolFormPermission> rol_form_permission { get; set; }
        public virtual ICollection<FormModule> FormModules { get; set; } = new List<FormModule>();


    }
}
