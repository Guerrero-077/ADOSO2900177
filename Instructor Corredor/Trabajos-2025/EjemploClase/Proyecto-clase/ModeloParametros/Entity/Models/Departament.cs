namespace Entity.Models;

public class Departament
{
    public int id { get; set; }
    public string name { get; set; }
      public string country { get; set; }
    public bool active { get; set; }
    public List<City> city { get; set; } = new List<City>();
}
