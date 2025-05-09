using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entity.Model;

namespace Data.Interfaces
{
    public interface IRolUserRepository : IData<RolUser>
    {
        Task<IEnumerable<RolUser>> GetAllJoinAsync();
        Task<RolUser?> GetByIdJoinAsync(int id);
    }
}
