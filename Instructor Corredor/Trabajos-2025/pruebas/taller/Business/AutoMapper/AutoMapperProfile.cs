using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Entity.DTOs.Default;
using Entity.DTOs.Select;
using Entity.Models;

namespace Business.AutoMapper
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<Rol, RolDto>().ReverseMap();

            CreateMap<User, UserDto>().ReverseMap();

            CreateMap<RolUser, RolUserDto>().ReverseMap();
            CreateMap <RolUser, RolUserSelect>().ReverseMap();
        }

    }
}
