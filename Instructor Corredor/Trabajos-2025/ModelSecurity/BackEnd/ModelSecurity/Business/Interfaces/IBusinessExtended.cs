namespace Business.Interfaces
{
    public interface IBusinessExtended<TDtoGet, TDto> : IBusiness<TDto>
    {
        Task<IEnumerable<TDtoGet>> GetAllJoin();
        Task<TDtoGet?> GetByIdJoin(int id);
    }
}
