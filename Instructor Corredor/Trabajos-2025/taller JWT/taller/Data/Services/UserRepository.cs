using Data.Interfaces;
using Data.Repositoy;
using Entity.Contexts;
using Entity.DTOs.Default;
using Entity.Models;
using Microsoft.EntityFrameworkCore;

namespace Data.Services
{
    public class UserRepository: DataGeneric<User>, IUserRepository
    {
        public UserRepository(ApplicationDbContext context) : base(context)
        {
        }

        public async Task<User> ValidateUserAsync(LoginDto loginDto)
        {
            bool suceeded = false;

            var user = await _dbSet
                .Where(u => 
                            u.email == loginDto.email && 
                            u.password == loginDto.password)
                .FirstOrDefaultAsync();


            suceeded = (user != null) ? true : throw new UnauthorizedAccessException("Credenciales inválidas");

            return user;
        }
    }
}
