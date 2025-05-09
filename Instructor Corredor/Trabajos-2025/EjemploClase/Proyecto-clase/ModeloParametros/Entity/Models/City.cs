namespace Entity.Models;

public class City
{
    public int id { get; set; }
    public string name { get; set; }
    public bool active { get; set; }
    public int departamentId { get; set; }

    public Departament departament { get; set; }

    public List<Person> persons { get; set; } = new List<Person>();
}
