
using DataGeneric.RepositoryDataGeneric;
using Entity.context;
using Entity.Models;

namespace Data.RepositoryData;


public class CityRepository : DataGeneric<City> 
{
    public CityRepository(AplicationDbContext context): base(context)
    {}

}
