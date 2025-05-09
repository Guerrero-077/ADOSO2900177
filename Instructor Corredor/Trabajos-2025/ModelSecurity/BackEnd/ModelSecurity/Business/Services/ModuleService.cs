

using AutoMapper;
using Business.Repository;
using Data.Interfaces;
using Entity.DTOs.Default;
using Entity.Model;
using Microsoft.Extensions.Logging;
using Utilities.Exceptions;

namespace Business.Services
{
    public class ModuleService : BusinessBasic<ModuleDto, Module>
    {
        private readonly IData<Module> _moduleRepository;
        private readonly ILogger<ModuleService> _logger;
        public ModuleService(IData<Module> data, ILogger<ModuleService> logger, IMapper mapper): base(data, mapper)
        {
            _moduleRepository = data;
            _logger = logger;
        }

        protected override void ValidateDto(ModuleDto dto)
        {
            if (dto == null)
            {
                throw new ValidationException("El objeto Module no puede ser nulo");
            }

            if (string.IsNullOrWhiteSpace(dto.name))
            {
                _logger.LogWarning("Se intentó crear/actualizar una Form con Name vacío");
                throw new ValidationException("user_name", "El Name de la Form es obligatorio");
            }
        }

        protected override async Task ValidateIdAsync(int id)
        {
            var entity = await _moduleRepository.GetByIdAsync(id);

            if (entity == null)
            {
                _logger.LogWarning($"Se intentó operar con un ID inválido: {id}");
                throw new EntityNotFoundException($"No se encontró una Module con el ID {id}");
            }
        }
    }
}
