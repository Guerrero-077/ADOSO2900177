using AutoMapper;
using Entity.DTOs;
using Entity.Models;

namespace Business.Map;

public  class AutoMapper : Profile
{
    public AutoMapper()
    {
         CreateMap<PersonDto, Person>();
        CreateMap<Person, PersonDto>();
    
        CreateMap<City, CityDto>().ReverseMap();
        CreateMap<Departament, DepartamentDto>().ReverseMap();

    }
}
