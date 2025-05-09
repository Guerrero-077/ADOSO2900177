using DataGeneric.RepositoryDataGeneric;
using Entity.context;
using Entity.Models;

namespace Data.RepositoryData;

public class DepartamentRepository : DataGeneric<Departament>
{
    public DepartamentRepository(AplicationDbContext context) : base(context)
    {
        
    }



}
