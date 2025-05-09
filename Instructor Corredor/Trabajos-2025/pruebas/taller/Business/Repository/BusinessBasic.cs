using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Business.Interfaces;
using Data.Interfaces;

namespace Business.Repository
{
    public abstract class BusinessBasic<TDto, TEntity> : IBusiness<TDto> where TEntity : class
    {
        protected readonly IData<TEntity> _data;
        protected readonly IMapper _mapper;

        public BusinessBasic(IData<TEntity> data, IMapper mapper) 
        {
            _data = data;
            _mapper = mapper;   
        }

        public async Task<IEnumerable<TDto>> GetAllAsync()
        {
            var entities = await _data.GetAllAsync();
            return _mapper.Map<IEnumerable<TDto>>(entities);
        }

        public async Task<TDto?> GetByIdAsync(int id)
        {
            await ValidateIdAsync(id);
            var entity = await _data.GetByIdAsync(id);
            return entity == null ? default : _mapper.Map<TDto>(entity);
        }

        public async Task<TDto> CreateAsync(TDto dto)
        {
            ValidateDto(dto);
            var entity = _mapper.Map<TEntity>(dto);
            var created = await _data.CreateAsync(entity);
            return  _mapper.Map<TDto>(created);
        }

        public async Task<bool> UpdateAsync(TDto dto)
        {
            ValidateDto(dto);
            var entity = _mapper.Map<TEntity>(dto);
            return await _data.UpdateAsync(entity);
        }

        public async Task<bool> DeleteAsync(int id)
        {
            await ValidateIdAsync(id);
            return await _data.DeleteAsync(id);
        }



        protected abstract void ValidateDto(TDto dto);
        protected abstract Task ValidateIdAsync(int id);
    }
}
