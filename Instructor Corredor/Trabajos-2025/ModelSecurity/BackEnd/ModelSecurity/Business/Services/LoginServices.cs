using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entity.Context;
using Microsoft.EntityFrameworkCore;

namespace Business.Services
{
    public class LoginServices
    {
        private readonly ApplicationDbContext _context;
        private readonly AuthService _jwtService;

        public LoginServices(ApplicationDbContext context, AuthService jwtService)
        {
            _context = context;
            _jwtService = jwtService;
        }



    }
}
