using Data.Interfaces;
using Data.Repository;
using Entity.Context;
using Entity.Model;
using Microsoft.EntityFrameworkCore;

namespace Data.Services
{
    public class RolUserRepository : DataGeneric<RolUser>, IRolUserRepository
    {
        protected readonly ApplicationDbContext _context;
        public RolUserRepository(ApplicationDbContext context) : base(context)
        {
            _context = context;
        }

        public async Task<IEnumerable<RolUser>> GetAllJoinAsync()
        {
            return await _context.Set<RolUser>()
                 .Include(u => u.rol)
                 .Include(u => u.user)
                 .Where(u => !u.is_deleted)
                 .ToListAsync();
        }

        public async Task<RolUser?> GetByIdJoinAsync(int id)
        {
            return await _context.Set<RolUser>()
               .Include(u => u.rol)
               .Include(u => u.user)
               .Where(u => !u.is_deleted && u.id == id)
               .FirstOrDefaultAsync();
        }
    }
}
