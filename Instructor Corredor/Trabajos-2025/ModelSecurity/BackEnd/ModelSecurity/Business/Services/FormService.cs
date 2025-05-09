using AutoMapper;
using Business.Repository;
using Data.Interfaces;
using Entity.DTOs.Default;
using Entity.Model;
using Microsoft.Extensions.Logging;
using Utilities.Exceptions;

namespace Business.Services
{
    public class FormService : BusinessBasic<FormDto, Form>
    {
        public IData<Form> _FormRepository;
        public ILogger<FormService> _logger;

        public FormService(IData<Form> data, ILogger<FormService> logger, IMapper mapper): base(data, mapper)
        {
            _FormRepository = data;
            _logger = logger;
        }

        protected override void ValidateDto(FormDto dto)
        {
            if (dto == null)
            {
                throw new ValidationException("El objeto Form no puede ser nulo");
            }

            if (string.IsNullOrWhiteSpace(dto.name))
            {
                _logger.LogWarning("Se intentó crear/actualizar una Form con Name vacío");
                throw new ValidationException("user_name", "El Name de la Form es obligatorio");
            }
        }

        protected override async Task ValidateIdAsync(int id)
        {
            var entity = await _FormRepository.GetByIdAsync(id);

            if (entity == null)
            {
                _logger.LogWarning($"Se intentó operar con un ID inválido: {id}");
                throw new EntityNotFoundException($"No se encontró una Form con el ID {id}");
            }
        }
    }
}
