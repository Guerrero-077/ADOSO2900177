namespace Business.Interfaces
{
    public interface IBusiness<TDto>
    {
        Task<IEnumerable<TDto>> GetAllAsync();
        Task<TDto?> GetByIdAsync(int id);
        Task<TDto> CreateAsync(TDto dto);
        Task<bool> UpdateAsync(TDto dto);   
        Task<bool> DeleteAsync(int id);
    }
}
