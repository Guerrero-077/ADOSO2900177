using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entity.Model;

namespace Data.Interfaces
{
    public interface IFormModuleRepository : IData<FormModule>
    {
        Task<IEnumerable<FormModule>> GetAllJoinAsync();
        Task<FormModule?> GetByIdJoinAsync(int id);
    }
}
