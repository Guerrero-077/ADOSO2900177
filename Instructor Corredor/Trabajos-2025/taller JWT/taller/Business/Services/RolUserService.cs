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
using Entity.Models;
using Microsoft.Extensions.Logging;
using Utilities.Exceptions;

namespace Business.Services
{
    public class RolUserService : BusinessGeneric<RolUserSelect, RolUserDto, RolUser>, IBusinessExtended<RolUserSelect, RolUserDto>
    {

        private readonly IRolUserRepository _data;
        private readonly ILogger<RolUserService> _logger;
        public RolUserService(IRolUserRepository data, ILogger<RolUserService> logger, IMapper mapper) : base(data, mapper)
        {
            _data = data;
            _logger = logger;

        }

        public async Task<IEnumerable<RolUserSelect>> GeAllJoin()
        {
            var entity = await _data.GetAllJoinAsync();
            return _mapper.Map<IEnumerable<RolUserSelect>>(entity);
        }

        public async Task<IEnumerable<string>> GetAllRolUser(int idUser)
        {
            var entity = await _data.GetJoinRolesAsync(idUser);
            return entity;
        }

        public async Task<RolUserSelect?> GetByIdJoin(int id)
        {
            var entity = await _data.GetByIdJoinAsync(id);
            return entity == null ? default : _mapper.Map<RolUserSelect>(entity);
        }


        protected override void ValidateDto(RolUserDto dto)
        {
            if (dto == null)
            {
                throw new ValidationException("El objeto RolUser no puede ser nulo");
            }
        }

        protected override async Task ValidateIdAsync(int id)
        {
            var entity = await _data.GetByIdAsync(id);
            if (entity == null) 
            {
                _logger.LogWarning($"Se intentó operar con un ID inválido: {id}");
                throw new EntityNotFoundException($"No se encontró una RolUser con el ID {id}");
            }
        }
    }
}
