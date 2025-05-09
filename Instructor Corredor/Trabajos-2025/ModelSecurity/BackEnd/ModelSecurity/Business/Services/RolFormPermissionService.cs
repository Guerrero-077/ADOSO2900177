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
    public class RolFormPermissionService : BusinessGeneric<RolFormPermissionSelectDto, RolFormPermissionDto, RolFormPermission>, IBusinessExtended<RolFormPermissionSelectDto, RolFormPermissionDto>
    {
        private readonly IRolFormPermissionRepository _repository;
        private readonly ILogger<RolFormPermissionService> _logger;

        public RolFormPermissionService(IRolFormPermissionRepository repository, ILogger<RolFormPermissionService> logger, IMapper mapper) : base(repository, mapper)
        {
            _repository = repository;
            _logger = logger;
        }
        public async Task<IEnumerable<RolFormPermissionSelectDto>> GetAllJoin()
        {
            var entities = await _repository.GetAllJoinAsync();
            return _mapper.Map<IEnumerable<RolFormPermissionSelectDto>>(entities);
        }

        public async Task<RolFormPermissionSelectDto?> GetByIdJoin(int id)
        {
            var entity = await _repository.GetByIdJoinAsync(id);
            return _mapper.Map<RolFormPermissionSelectDto>(entity);
        }

        protected override void ValidateDto(RolFormPermissionDto dto)
        {
            if (dto == null)
            {
                throw new ValidationException("El objeto Rol no puede ser nulo");
            }
        }

        protected override async Task ValidateIdAsync(int id)
        {
            var entity = await _repository.GetByIdAsync(id);
            if (entity == null)
            {
                _logger.LogWarning($"Se intentó operar con un ID inválido: {id}");
                throw new EntityNotFoundException($"No se encontró una Rol con el ID {id}");
            }
        }
    }
}
