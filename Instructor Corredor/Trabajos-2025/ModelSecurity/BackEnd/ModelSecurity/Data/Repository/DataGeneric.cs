

using Data.Interfaces;
using Entity.Context;
using Microsoft.EntityFrameworkCore;

namespace Data.Repository
{
    public class DataGeneric<T> : IData<T> where T : class
    {
        private const bool Value = false;
        protected readonly ApplicationDbContext _context;
        //protected readonly DbSet<T> _dbSet; 

        public DataGeneric(ApplicationDbContext context)
        {
            _context = context;
            //_dbSet = context.Set<T>();
        }

        public async Task<IEnumerable<T>> GetAllAsync()
        {
            return await _context.Set<T>()
                .Where(e => EF.Property<bool>(e, "is_deleted") == false)
                .ToListAsync();
        }

        public async Task<IEnumerable<T>> GetAllDeletes()
        {
            return await _context.Set<T>()
                .Where(e => EF.Property<bool>(e, "is_deleted") == true)
                .ToListAsync();
        }

        //public async Task<T?> GetByIdAsync(int id)
        //{
        //    var entity = await _dbSet.FindAsync(id);
        //    if (entity == null)
        //        return null;

        //    var isDeleted = (bool?)entity.GetType().GetProperty("is_deleted")?.GetValue(entity);

        //    return isDeleted == false ? entity : null;
        //}

        public async Task<T?> GetByIdAsync(int id)
        {
            var entity = await _context.Set<T>().FindAsync(id);
            return entity;  // No verificamos si "is_deleted" es true o false aquí
        }


        public async Task<T> CreateAsync(T entity)
        {
            entity.GetType().GetProperty("is_deleted")?.SetValue(entity, Value);

            _context.Set<T>().Add(entity);
            await _context.SaveChangesAsync();
            return entity;
        }

        public async Task<bool> UpdateAsync(T entity)
        {
            _context.Entry(entity).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return true;
        }
        public async Task<bool> DeleteAsync(int id)
        {
            var entity = await _context.Set<T>().FindAsync(id);
            if (entity == null)
                return false;
            _context.Remove(entity); await _context.SaveChangesAsync();
            return true;
        }
        public async Task<bool> DeleteLogicalAsync(int id)
        {
            var entity = await _context.Set<T>().FindAsync(id);
            if (entity == null)
                return false;
            entity.GetType().GetProperty("is_deleted")?.SetValue(entity, true);
            _context.Entry(entity).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> RestoreLogicalAsync(int id)
        {
            var entity = await _context.Set<T>().FindAsync(id);
            if (entity == null)
                return false;

            var isDeleted = (bool?)entity.GetType().GetProperty("is_deleted")?.GetValue(entity);

            // Si ya está desmarcado como eliminado, no hay nada que hacer
            if (isDeleted == false)
                return false;

            entity.GetType().GetProperty("is_deleted")?.SetValue(entity, false);
            _context.Entry(entity).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return true;
        }
    }
}
