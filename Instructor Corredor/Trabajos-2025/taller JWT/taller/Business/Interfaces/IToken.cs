using Entity.DTOs.Default;
namespace Business.Interfaces
{
    public interface IToken
    {
        Task<string> GenerateToken(LoginDto dto);
    }
}
