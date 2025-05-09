namespace Business.Interfaces
{
    public interface IValidate<TDto> : IBusiness<TDto>
    {
        Task<TDto?> CreateValidateAsync(TDto dto);
        Task<TDto?> UpdateValidateAsync(TDto dto);

    }
}
