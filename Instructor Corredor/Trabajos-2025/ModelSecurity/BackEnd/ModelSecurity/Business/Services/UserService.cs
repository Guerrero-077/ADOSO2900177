using AutoMapper;
using Business.Interfaces;
using Business.Repository;
using Data.Interfaces;
using Entity.DTOs.Default;
using Entity.DTOs.Select;
using Entity.Model;
using Microsoft.Extensions.Logging;
using Utilities.Exceptions;

namespace Business.Services
{
    public class UserService : BusinessGeneric<UserSelectDto, UserDto, User>, IBusinessExtended<UserSelectDto, UserDto>
    {
        private readonly IUserRepository _UserRepository;
        private readonly ILogger<UserService> _logger;

        public UserService(IUserRepository data, ILogger<UserService> logger, IMapper mapper): base(data, mapper) 
        {
            _UserRepository = data;
            _logger = logger;
        }

        public async Task<IEnumerable<UserSelectDto>> GetAllJoin()
        {
            var entities = await _UserRepository.GetAllJoinAsync();
            return _mapper.Map<IEnumerable<UserSelectDto>>(entities);
        }

        public async Task<IEnumerable<UserSelectDto>> GetAllDeletesJoin()
        {
            var entities = await _UserRepository.GetAllDeletesJoinAsync();
            return _mapper.Map<IEnumerable<UserSelectDto>>(entities);
        }

        public async Task<UserSelectDto?> GetByIdJoin(int id)
        {
            var entity = await _UserRepository.GetByIdJoinAsync(id);
            return _mapper.Map<UserSelectDto>(entity);
        }

        protected override void ValidateDto(UserDto dto)
        {
            if (dto == null)
            {
                throw new ValidationException("El objeto User no puede ser nulo");
            }

        }

        protected override async Task ValidateIdAsync(int id)
        {
            var entity = await _UserRepository.GetByIdJoinAsync(id);
            if (entity == null)
            {
                _logger.LogWarning($"Se intentó operar con un ID inválido: {id}");
                throw new EntityNotFoundException($"No se encontró una User con el ID {id}");
            }
        }
    }
}
