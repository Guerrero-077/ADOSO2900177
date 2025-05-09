using AutoMapper;
using DataGeneric.RepositoryDataGeneric;
using Entity.DTOs;
using Entity.Models;
using Microsoft.Extensions.Logging;

namespace Business.ServiceRepository;

public class PersonService : ServiceBase<PersonDto,Person> 
{
    private readonly DataGeneric<Person> _data;
    // private readonly ILogger<PersonService> _logger;
    // private readonly IMapper _mapper;
    public PersonService(DataGeneric<Person> data, ILogger<PersonService> logger,IMapper mapper): base(data,logger,mapper)
    {
        _data = data;
        // _logger = logger;

    }

    



}
