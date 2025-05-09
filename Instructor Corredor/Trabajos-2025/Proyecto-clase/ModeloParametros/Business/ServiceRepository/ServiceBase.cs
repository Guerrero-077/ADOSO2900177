

using AutoMapper;
using DataGeneric.RepositoryDataGeneric;
using Microsoft.Extensions.Logging;

namespace Business;

public abstract class ServiceBase <TDto, TEntity> where  TEntity: class
{



    // posible error  where
   private DataGeneric<TEntity>  _data;

   private ILogger _logger;
   private IMapper _mapper;

   public ServiceBase(DataGeneric<TEntity>  data, ILogger _logger, IMapper mapper )
   {
    this._logger = _logger;
    this._data = data;
    this._mapper = mapper;
   }



    public async Task<IEnumerable<TDto>>  GetAll(){
        try{

            var entity = await _data.GetAllAsync();
            return _mapper.Map<IEnumerable<TDto>>(entity);
        }catch(Exception ex){
            _logger.LogError("error ",ex);
            throw;
        }
    }



    public async Task<TDto?>  GetAllById(int id){
        try{

            var entity = await _data.GetById(id);
            return _mapper.Map<TDto>(entity);
        }catch(Exception ex){
            _logger.LogError("error ",ex);
            throw;
        }
    }


    public async Task<TDto?>  AddAsycn(TDto dto){
        try{

            var entity = _mapper.Map<TEntity>(dto);
            var create = await _data.AddAsync(entity);
            return _mapper.Map<TDto>(entity);
        }catch(Exception ex){
            _logger.LogError("error ",ex);
            throw;
        }
    }

      public async Task<bool>  UpdateAsycn(TDto dto){
        try{

            var entity = _mapper.Map<TEntity>(dto);
            return await _data.UpdateAsync(entity);
  
        }catch(Exception ex){
            _logger.LogError("error ",ex);
            throw;
        }
    }


 public async Task<bool>  Deleted(int id){
        try{

            return await _data.DeleteAsync(id);
  
        }catch(Exception ex){
            _logger.LogError("error ",ex);
            throw;
        }
    }


}
