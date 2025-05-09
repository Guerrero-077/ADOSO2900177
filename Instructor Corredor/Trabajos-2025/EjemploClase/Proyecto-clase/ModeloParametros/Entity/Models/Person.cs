namespace Entity.Models;

public class Person
{
    public int id { get; set; }

    public string firstName { get; set; }
    public string lastName { get; set; }
    public string documentType { get; set; }
    public string email { get; set; }
    public string phone { get; set; }
    public int cityId { get; set; }
    public City city { get; set; }
    
}
