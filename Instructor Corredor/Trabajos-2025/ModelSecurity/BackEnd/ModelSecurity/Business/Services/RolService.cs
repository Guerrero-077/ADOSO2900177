

using AutoMapper;
using Business.Repository;
using Data.Interfaces;
using Entity.DTOs.Default;
using Entity.Model;
using Microsoft.Extensions.Logging;
using Utilities.Exceptions;

namespace Business.Services
{
    public class RolService : BusinessBasic<RolDto, Rol>
    {
        private readonly IData<Rol> _rolRepository;
        private readonly ILogger<RolService> _logger;
        public RolService(IData<Rol> data, ILogger<RolService> logger, IMapper mapper) : base(data, mapper)
        {
            _rolRepository = data;
            _logger = logger;
        }


        protected override void ValidateDto(RolDto dto)
        {
            if (dto == null)
            {
                throw new ValidationException("El objeto Rol no puede ser nulo");
            }

            if (string.IsNullOrWhiteSpace(dto.name))
            {
                _logger.LogWarning("Se intentó crear/actualizar una Rol con Name vacío");
                throw new ValidationException("user_name", "El UserName de la Rol es obligatorio");
            }
        }

        protected override async Task ValidateIdAsync(int id)
        {
            var entity = await _rolRepository.GetByIdAsync(id);

            if (entity == null)
            {
                _logger.LogWarning($"Se intentó operar con un ID inválido: {id}");
                throw new EntityNotFoundException($"No se encontró una Rol con el ID {id}");
            }
        }
    }
}
