using AutoMapper;
using DataGeneric.RepositoryDataGeneric;
using Entity.DTOs;
using Entity.Models;
using Microsoft.Extensions.Logging;

namespace Business;

public class DepartamentService : ServiceBase<DepartamentDto,Departament> 
{
     private readonly DataGeneric<Departament> _data;
      public DepartamentService(DataGeneric<Departament> data, ILogger<DepartamentService> logger,IMapper mapper): base(data,logger,mapper)
    {
        _data = data;
        // _logger = logger;

    }
}
