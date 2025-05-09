using AutoMapper;
using DataGeneric.RepositoryDataGeneric;
using Entity.DTOs;
using Entity.Models;
using Microsoft.Extensions.Logging;

namespace Business;

public class CityService: ServiceBase<CityDto,City> 
{
     private readonly DataGeneric<City> _data;
      public CityService(DataGeneric<City> data, ILogger<CityService> logger,IMapper mapper): base(data,logger,mapper)
    {
        _data = data;
        // _logger = logger;

    }

}
