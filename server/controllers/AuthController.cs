using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            Console.WriteLine($"Connected Successfully {request.Email} {request.Password}");
            return Ok(new { message = "Connected!" });
        }

        [HttpGet("register")]
        public async Task<IActionResult> Register([FromBody] Player request)
        {

            var existing = await _context.Players.FirstOrDefaultAsync(p => p.Email == request.Email && p.PlayerID == request.PlayerID);
            Console.WriteLine("Connected Successfully");
            return Ok(new {message = "Registration Successful!"});
        }
        
    }

  

       
}
