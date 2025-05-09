using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
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
    public class RolUserService : BusinessGeneric<RolUserSelectDto, RolUserDto, RolUser>, IBusinessExtended<RolUserSelectDto, RolUserDto>
    {
        private readonly IRolUserRepository _repository;
        private readonly ILogger<RolUserService> _logger;

        public RolUserService(IRolUserRepository data, ILogger<RolUserService> logger ,IMapper mapper) : base(data, mapper)
        {
            _repository = data;
            _logger = logger;
        }

        public async Task<IEnumerable<RolUserSelectDto>> GetAllJoin()
        {
            var entities = await _repository.GetAllJoinAsync();
            return _mapper.Map<IEnumerable<RolUserSelectDto>>(entities);
        }

        public async Task<RolUserSelectDto?> GetByIdJoin(int id)
        {
            var entity = await _repository.GetByIdJoinAsync(id);
            return _mapper.Map<RolUserSelectDto>(entity);
        }

        protected override void ValidateDto(RolUserDto dto)
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
