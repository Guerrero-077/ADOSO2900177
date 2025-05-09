using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Business.Interfaces;
using Data.Interfaces;
using Entity.DTOs.Default;
using Google.Apis.Auth;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace Business.Custom
{
    public class TokenBusiness : IToken
    {
        private readonly IConfiguration _configuration;
        private readonly IUserRepository _dataUser;
        private readonly IRolUserRepository _userRepository;

        public TokenBusiness(IConfiguration configuration, IRolUserRepository userRepository, IUserRepository dataUser)
        {
            _configuration = configuration;
            _userRepository = userRepository;
            _dataUser = dataUser;
        }
        public async Task<string> GenerateToken(LoginDto dto)
        {
            // Crear la información del usuario para el token

            var user = await _dataUser.ValidateUserAsync(dto);
            var roles = await GetUserRoles(user.id);
            var userClaims = new List<Claim>
            {
                new Claim(ClaimTypes.NameIdentifier, user.id.ToString()),
                new Claim(ClaimTypes.Email, dto.email!)
            };


            // Agregar cada rol como un claim
            foreach (var role in roles)
            {
                //userClaims.Add(new Claim("http://schemas.microsoft.com/ws/2008/06/identity/claims/role", role));

                userClaims.Add(new Claim(ClaimTypes.Role, role));
            }

            var SecurityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:key"]!));
            var credentials = new SigningCredentials(SecurityKey, SecurityAlgorithms.HmacSha256Signature);

            //  Crear detalles del Token
            var jwtConfig = new JwtSecurityToken
            (
                claims: userClaims,
                expires: DateTime.Now.AddMinutes(Convert.ToDouble(_configuration["Jwt:exp"])),
                signingCredentials: credentials

            );
            return new JwtSecurityTokenHandler().WriteToken(jwtConfig);
        }

        public async Task<IEnumerable<string>> GetUserRoles(int idUser)
        {
            var roles = await _userRepository.GetJoinRolesAsync(idUser);
            return roles; // devuelve la lista directamente
        }


        public bool validarToken(string token)
        {
            var ClaimsPrincipal = new ClaimsPrincipal();
            var tokenHandler = new JwtSecurityTokenHandler();
            var validationParameters = new TokenValidationParameters
            {
                ValidateIssuerSigningKey = true,
                ValidateIssuer = false,
                ValidateAudience = false,
                ValidateLifetime = true,
                ClockSkew = TimeSpan.Zero,
                IssuerSigningKey = new SymmetricSecurityKey
                (Encoding.UTF8.GetBytes(_configuration["Jwt:key"]!))
            };

            try
            {
                ClaimsPrincipal = tokenHandler.ValidateToken(token, validationParameters, out SecurityToken validatedToken);
                return true;
            }
            catch (SecurityTokenExpiredException)
            {
                //Manejar token Expirado
                return false;
            }
            catch (SecurityTokenInvalidSignatureException)
            {
                // Manejar firma Invalida
                return false;
            }
            catch (Exception ex)
            {

                return false;
            }
        }


        /// <summary>
        /// Verifica la validez de un token JWT generado por Google (ID Token).
        /// </summary>
        /// <param name="tokenId">ID Token recibido desde Google en el frontend</param>
        /// <returns>Payload del token si es válido; null si no lo es</returns>
        public async Task<GoogleJsonWebSignature.Payload?> VerifyGoogleToken(string tokenId)
        {
            try
            {
                var settings = new GoogleJsonWebSignature.ValidationSettings
                {
                    // Lista de IDs de cliente válidos registrados en Google Cloud Console
                    Audience = new List<string> { "436268030419-5q7o4a4lv3ahg2p12iad63ubptlka6pu.apps.googleusercontent.com" }
                };

                // Valida el token contra la audiencia esperada
                var payload = await GoogleJsonWebSignature.ValidateAsync(tokenId, settings);
                return payload;
            }
            catch
            {
                // Si el token es inválido o no se pudo validar, retorna null
                return null;
            }
        }

        
    }
}
