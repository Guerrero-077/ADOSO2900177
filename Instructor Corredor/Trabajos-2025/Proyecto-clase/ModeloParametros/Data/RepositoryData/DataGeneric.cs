
using Entity.context;
using Microsoft.EntityFrameworkCore;

namespace DataGeneric.RepositoryDataGeneric;

public class DataGeneric<T> where T : class
{
    private readonly AplicationDbContext _context;

    public DataGeneric(AplicationDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<T>> GetAllAsync()
    {
        return await _context.Set<T>().ToListAsync();
    }

    public async Task<T> GetById(int id){
        return await _context.Set<T>().FindAsync(id);
    }

    public async Task<T> AddAsync(T Entity){
        await _context.Set<T>().AddAsync(Entity);
        await _context.SaveChangesAsync();
        return Entity;
    }

    public async Task<bool> UpdateAsync(T Entity){
        _context.Set<T>().Update(Entity);
        await _context.SaveChangesAsync();
        return true;
    }

    public async Task<bool> DeleteAsync(int id){
        var Entity = await _context.Set<T>().FindAsync(id);
        if (Entity == null) return false;

        _context.Set<T>().Remove(Entity);
        await _context.SaveChangesAsync();
        return true;
    }

}

