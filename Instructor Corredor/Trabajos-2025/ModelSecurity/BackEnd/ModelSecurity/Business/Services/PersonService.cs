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
    public class PersonService : BusinessGeneric<PersonSelectDto, PersonDto, Person>, IBusinessExtended<PersonSelectDto, PersonDto>
    {
        private readonly IData<Person> _PersonRepository;
        private readonly ILogger<PermissionService> _logger;

        public PersonService(IData<Person> data, ILogger<PermissionService> logger, IMapper mapper) : base(data, mapper)
        {
            _PersonRepository = data;
            _logger = logger;
        }

        public async Task<IEnumerable<PersonSelectDto>> GetAllJoin()
        {
            var entities = await _data.GetAllAsync();
            return _mapper.Map<IEnumerable<PersonSelectDto>>(entities);
        }

        public async Task<PersonSelectDto?> GetByIdJoin(int id)
        {
            var entity = await _data.GetByIdAsync(id);
            if (entity == null)
            {
                _logger.LogWarning($"No se encontró una persona con el ID {id}");
                throw new EntityNotFoundException($"No se encontró una persona con el ID {id}");
            }

            return _mapper.Map<PersonSelectDto>(entity);
        }

        protected override void ValidateDto(PersonDto dto)
        {
            if (dto == null)
            {
                throw new ValidationException("El objeto Person no puede ser nulo");
            }

            if (string.IsNullOrWhiteSpace(dto.first_name))
            {
                _logger.LogWarning("Se intentó crear/actualizar una persona con FirstName vacío");
                throw new ValidationException("first_name", "El FirstName de la persona es obligatorio");
            }
        }

        protected override async Task ValidateIdAsync(int id)
        {
            var entity = await _data.GetByIdAsync(id);

            if (entity == null)
            {
                _logger.LogWarning($"Se intentó operar con un ID inválido: {id}");
                throw new EntityNotFoundException($"No se encontró una persona con el ID {id}");
            }
        }
    }
}
