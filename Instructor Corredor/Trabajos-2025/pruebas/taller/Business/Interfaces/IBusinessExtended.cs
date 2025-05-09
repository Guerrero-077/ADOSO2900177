namespace Business.Interfaces
{
    public interface IBusinessExtended<TDtoGet, TDto> : IBusiness<TDto>
    {
        Task<IEnumerable<TDtoGet>> GeAllJoin();
        Task<TDtoGet?> GetByIdJoin(int id);
        Task<IEnumerable<string>> GetAllRolUser(int idUser);
    }
}
