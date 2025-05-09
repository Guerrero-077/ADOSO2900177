using Data.Interfaces;
using Data.Repositoy;
using Entity.Contexts;
using Entity.Models;
using Microsoft.EntityFrameworkCore;

namespace Data.Services
{
    public class RolUserRepository : DataGeneric<RolUser>, IRolUserRepository
    {
        public RolUserRepository(ApplicationDbContext context) : base(context)
        {
        }

        public async Task<IEnumerable<RolUser>> GetAllJoinAsync()
        {
            return await _dbSet
                        .Include(u => u.rol)
                        .Include(u => u.user)
                        .ToListAsync();
        }

        public async Task<RolUser?> GetByIdJoinAsync(int id)
        {
            return await _dbSet
                      .Include(u => u.rol)
                      .Include(u => u.user)
                      .Where(u => u.id == id)
                      .FirstOrDefaultAsync();   

        }

        public async Task<IEnumerable<string>> GetJoinRolesAsync(int idUser)
        {
            var rolAsignated = await _dbSet
                               .Include(ru => ru.rol)
                               .Include(ru => ru.user)
                               .Where(ru => ru.userId == idUser)
                               .ToListAsync();

            var roles = rolAsignated
                                .Select(ru => ru.rol.name)
                                .Where(name => !string.IsNullOrWhiteSpace(name))
                                .Distinct()
                                .ToList();
            return roles;
        }
    }
}
