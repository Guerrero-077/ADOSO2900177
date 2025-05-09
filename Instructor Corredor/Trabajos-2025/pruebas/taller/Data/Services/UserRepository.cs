using Data.Interfaces;
using Data.Repositoy;
using Entity.Contexts;
using Entity.DTOs.Default;
using Entity.Models;
using Microsoft.EntityFrameworkCore;
using Utilities.Custom;

namespace Data.Services
{
    public class UserRepository: DataGeneric<User>, IUserRepository
    {
        private readonly EncriptePassword _encriptePass;

        public UserRepository(ApplicationDbContext context, EncriptePassword encriptePass) : base(context)
        {
            _encriptePass = encriptePass;
        }

        public async Task<User?> FindEmail(string email)
        {
            var user = await _dbSet.Where(u => u.email == email).FirstOrDefaultAsync();
            return user;
        }

        public async Task<User> ValidateUserAsync(LoginDto loginDto)
        {
            bool suceeded = false;

            var user = await _dbSet
                //.Where(u => 
                //            u.email == loginDto.email && 
                //            u.password == (loginDto.password))
                .FirstOrDefaultAsync(u =>
                            u.email == loginDto.email &&
                            u.password == (loginDto.password));

            suceeded = (user != null) ? true : throw new UnauthorizedAccessException("Credenciales inválidas");

            return user;
        }
    }
}
