using AutoMapper;
using Business.Repository;
using Data.Interfaces;
using Entity.DTOs.Default;
using Entity.Models;
using Microsoft.Extensions.Logging;
using Utilities.Custom;
using Utilities.Exceptions;

namespace Business.Services
{
    public class UserService : BusinessBasic<UserDto, User>
    {
        private readonly IUserRepository _dataUser;
        private readonly ILogger<UserService> _logger;
        private readonly EncriptePassword _utilities;

        public UserService(IUserRepository data, ILogger<UserService> logger, EncriptePassword utilities, IMapper mapper) : base(data, mapper)
        {
            _dataUser = data;
            _logger = logger;
            _utilities = utilities;

        }

        protected override void ValidateDto(UserDto dto)
        {
            if (dto == null)
            {
                throw new ValidationException("El objeto Rol no puede ser nulo");
            }

        }

        protected async override Task ValidateIdAsync(int id)
        {
            var entity = await _data.GetByIdAsync(id);
            if (entity == null)
            {
                _logger.LogWarning($"Se intentó operar con un ID inválido: {id}");
                throw new EntityNotFoundException($"No se encontró una Rol con el ID {id}");
            }

        }

        //Nuevo metodo 

        public async Task<UserDto> CreateAsyncUser(UserDto dto)
        {
            ValidateDto(dto);

            // Mapeamos primero
            var userEntity = _mapper.Map<User>(dto);

            // Luego encripto la contraseña antes de guardar
            //userEntity.password = _utilities.EncripteSHA256(userEntity.password);
            userEntity.password = userEntity.password;

            var createdEntity = await _data.CreateAsync(userEntity);
            return _mapper.Map<UserDto>(createdEntity);
        }

        //Actalizar
        public async Task<bool> UpdateAsyncUser(UserDto dto)
        {
            ValidateDto(dto);
            var entity = _mapper.Map<User>(dto);
            //entity.password = _utilities.EncripteSHA256(entity.password);
            entity.password = entity.password;

            return await _data.UpdateAsync(entity);
        }

        public async Task<User> createUserGoogle(string email, string name)
        {
            var user = await _dataUser.FindEmail(email);

            if (user != null) return user;

            var newUser = new User
            {
                name = name,
                //password = _utilities.EncripteSHA256("hola"),
                password = null,
                email = email
            };

            await _data.CreateAsync(newUser);
            return newUser;
        }

    }
}
