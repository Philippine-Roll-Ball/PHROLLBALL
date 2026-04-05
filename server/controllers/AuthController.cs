using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.IdentityModel.Tokens.Jwt;

using server.Data; 
using server.Models;


namespace server.controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {

        private readonly AppDbContext _context;

        public AuthController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(string token)
        {
            Console.WriteLine($"Received token: {token}");

            return Ok(new { message = "Login successful" });
            // called from the client who successfully logged in using firebase, so this is trusted. 
            // We just need to issue a JWT token for our own backend to recognize the user and their role.


        }

        
    }

  

       
}
