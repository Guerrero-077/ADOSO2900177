using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Interfaces
{
    public interface IValidate<TDto> : IBusiness<TDto>
    {
        Task<TDto?> CreateValidateAsync(TDto dto);
        Task<TDto?> UpdateValidateAsync(TDto dto);
    }
}
