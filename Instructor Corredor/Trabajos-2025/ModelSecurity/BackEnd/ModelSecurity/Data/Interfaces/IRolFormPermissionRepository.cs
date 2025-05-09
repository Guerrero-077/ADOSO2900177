using Entity.Model;

namespace Data.Interfaces
{
    public interface IRolFormPermissionRepository : IData<RolFormPermission>
    {
        Task<IEnumerable<RolFormPermission>> GetAllJoinAsync();
        Task<RolFormPermission?> GetByIdJoinAsync(int id);
    }
}
