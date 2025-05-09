using Data.Interfaces;
using Data.Repository;
using Entity.Context;
using Entity.Model;
using Microsoft.EntityFrameworkCore;

namespace Data.Services
{
    public class FormModuleRepository : DataGeneric<FormModule>, IFormModuleRepository
    {
        protected readonly ApplicationDbContext _context;
        public FormModuleRepository(ApplicationDbContext context) : base(context)
        {
            _context = context;
        }

        public async Task<IEnumerable<FormModule>> GetAllJoinAsync()
        {
            return await _context.Set<FormModule>()
                       .Include(u => u.form)
                       .Include(u => u.module)
                       .Where(u => !u.is_deleted)
                       .ToListAsync();
        }

        public async Task<FormModule?> GetByIdJoinAsync(int id)
        {
            return await _context.Set<FormModule>()
                        .Include(u => u.form)
                        .Include(u => u.module)
                        .Where(u => !u.is_deleted && u.id == id)
                        .FirstOrDefaultAsync();
        }
    }
}
