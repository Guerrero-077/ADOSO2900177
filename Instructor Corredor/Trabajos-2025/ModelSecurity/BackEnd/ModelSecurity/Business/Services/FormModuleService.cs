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
    public class FormModuleService : BusinessGeneric<FormModuleSelectDto, FormModuleDto, FormModule>, IBusinessExtended<FormModuleSelectDto, FormModuleDto>
    {
        private readonly IFormModuleRepository _repository;
        private readonly ILogger<FormModuleService> _logger;
        public FormModuleService(IFormModuleRepository data, ILogger<FormModuleService> logger, IMapper mapper) : base(data, mapper)
        {
            _repository = data;
            _logger = logger;
        }

        public async Task<IEnumerable<FormModuleSelectDto>> GetAllJoin()
        {
            var entities = await _repository.GetAllJoinAsync();
            return _mapper.Map<IEnumerable<FormModuleSelectDto>>(entities);
        }

        public async Task<FormModuleSelectDto?> GetByIdJoin(int id)
        {
            var entity = await _repository.GetByIdJoinAsync(id);
            return _mapper.Map<FormModuleSelectDto>(entity);
        }

        protected override void ValidateDto(FormModuleDto dto)
        {
            if (dto == null)
            {
                throw new ValidationException("El objeto FormModule no puede ser nulo");
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
