using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entity.Model;

namespace Data.Interfaces
{
    public interface IUserRepository : IData<User>
    {
        Task<IEnumerable<User>> GetAllJoinAsync();

        Task<IEnumerable<User>> GetAllDeletesJoinAsync();

        Task<User?> GetByIdJoinAsync(int id);
    }
}
