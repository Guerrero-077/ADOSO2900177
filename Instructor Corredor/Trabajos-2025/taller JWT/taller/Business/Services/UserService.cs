using AutoMapper;
using Business.Repository;
using Data.Interfaces;
using Entity.DTOs.Default;
using Entity.Models;
using Microsoft.Extensions.Logging;
using Utilities.Exceptions;

namespace Business.Services
{
    public class UserService : BusinessBasic<UserDto, User>
    { 
        private readonly IData<User> _data;
        private readonly ILogger<UserService> _logger;

        public UserService(IData<User> data, ILogger<UserService> logger, IMapper mapper) : base (data, mapper)
        {
            _data = data;
            _logger = logger;

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
    }
}
