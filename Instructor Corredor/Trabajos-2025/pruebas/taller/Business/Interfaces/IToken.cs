using Entity.DTOs.Default;
using Google.Apis.Auth;
namespace Business.Interfaces
{
    public interface IToken
    {
        Task<string> GenerateToken(LoginDto dto);
        bool validarToken(string token);
        Task<GoogleJsonWebSignature.Payload?> VerifyGoogleToken(string tokenId);
    }
}
