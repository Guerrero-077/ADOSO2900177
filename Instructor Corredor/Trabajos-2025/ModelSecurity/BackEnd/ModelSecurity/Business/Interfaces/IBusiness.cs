namespace Business.Interfaces
{
    public interface IBusiness<TDto>
    {
        Task<IEnumerable<TDto>> GetAllAsync();
        Task<IEnumerable<TDto>> GetAllDeletes();
        Task<TDto?> GetByIdAsync(int id);
        Task<TDto> CreateAsync(TDto dto);
        //Task<bool> UpdateAsync(int id, TDto dto);
        Task<bool> UpdateAsync(int id, TDto dto);
        Task<bool> DeleteAsync(int id);
        Task<bool> DeleteLogicAsync(int id);
        Task<bool> RestoreLogicAsync(int id);
    }
}
