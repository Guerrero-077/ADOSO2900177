using Entity.DTOs.Default;
using Entity.Models;

namespace Data.Interfaces
{
    public interface IUserRepository: IData<User> 
    {
        Task<User> ValidateUserAsync(LoginDto loginDto);
    }
}
