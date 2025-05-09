using AutoMapper;
using Business.Interfaces;
using Business.Repository;
using Data.Interfaces;
using Entity.DTOs.Default;
using Entity.Model;
using Microsoft.Extensions.Logging;
using Utilities.Exceptions;

namespace Business.Services
{
    public class PermissionService : BusinessBasic<PermissionDto, Permission>, IBusiness<PermissionDto>
    {
        private readonly IData<Permission> _PermissionRepository;
        private readonly ILogger<PermissionService> _logger;
        public PermissionService(IData<Permission> data, ILogger<PermissionService> logger, IMapper mapper): base(data, mapper) 
        {
            _PermissionRepository = data;
            _logger = logger;
        }
        protected override void ValidateDto(PermissionDto dto)
        {
            if (dto == null)
            {
                throw new ValidationException("El objeto Permission no puede ser nulo");
            }

            if (string.IsNullOrWhiteSpace(dto.name))
            {
                _logger.LogWarning("Se intentó crear/actualizar una Permission con Name vacío");
                throw new ValidationException("user_name", "El UserName de la Permission es obligatorio");
            }
        }

        protected override async Task ValidateIdAsync(int id)
        {
            var entity = await _PermissionRepository.GetByIdAsync(id);

            if (entity == null)
            {
                _logger.LogWarning($"Se intentó operar con un ID inválido: {id}");
                throw new EntityNotFoundException($"No se encontró una Permission con el ID {id}");
            }
        }
    }
}
