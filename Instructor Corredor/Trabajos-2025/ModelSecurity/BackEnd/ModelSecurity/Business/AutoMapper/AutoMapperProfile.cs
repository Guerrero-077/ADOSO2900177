using System.Reflection;
using AutoMapper;
using Entity.DTOs.Default;
using Entity.DTOs.Select;
using Entity.Model;
using Module = Entity.Model.Module;

namespace Business.AutoMapper
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile() 
        {

            CreateMap<Rol, RolDto>();
            CreateMap<RolDto, Rol>();

            CreateMap<Form, FormDto>();
            CreateMap<FormDto, Form>();

            CreateMap<Permission, PermissionDto>();
            CreateMap<PermissionDto, Permission>();

            // Mapeo directo entidad -> DTO
            CreateMap<RolFormPermission, RolFormPermissionSelectDto>()
                .ForMember(dest => dest.rol_name, opt => opt.MapFrom(src => src.rol.name))
                .ForMember(dest => dest.form_name, opt => opt.MapFrom(src => src.form.name))
                .ForMember(dest => dest.permission_name, opt => opt.MapFrom(src => src.permission.name));


            // Opcional si vas a mapear DTO -> entidad también
            CreateMap<RolFormPermissionSelectDto, RolFormPermission>();

            CreateMap<RolFormPermission, RolFormPermissionDto>();
            CreateMap<RolFormPermissionDto, RolFormPermission>();

            // Para mostrar datos
            CreateMap<Person, PersonSelectDto>()
                .ForMember(dest => dest.full_name,
                   opt => opt.MapFrom(src => $"{src.first_name} {src.last_name}"));

            // Para crear o actualizar  
            CreateMap<PersonDto, Person>();
            CreateMap<Person, PersonDto>();

            
            CreateMap<UserSelectDto, User>();
            CreateMap<User, UserSelectDto>()
                .ForMember(dest => dest.Name_Person, opt => opt.MapFrom(src => src.person.first_name + " " + src.person.last_name));


            CreateMap<User, UserDto>();
            CreateMap<UserDto, User>();

            CreateMap<Module, ModuleDto>();
            CreateMap<ModuleDto, Module>();

            CreateMap<RolUser, RolUserSelectDto>()
                .ForMember(dest => dest.UserName, opt => opt.MapFrom(src => src.user.user_name) )
                .ForMember(dest => dest.RolName, opt => opt.MapFrom(src => src.rol.name) );

            CreateMap<RolUser, RolUserDto>();
            CreateMap<RolUserDto, RolUser>();


            CreateMap<FormModule, FormModuleSelectDto>()
                .ForMember(dest => dest.module_name, opt => opt.MapFrom(src => src.module.name))
                .ForMember(dest => dest.form_name, opt => opt.MapFrom(src => src.form.name));

            CreateMap<FormModule, FormModuleDto>();
            CreateMap<FormModuleDto, FormModule>();
        }
    }
}
