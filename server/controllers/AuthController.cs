using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Mvc;
using server.Models;

namespace server.controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            Console.WriteLine($"Connected Successfully {request.Email} {request.Password}");
            return Ok(new { message = "Connected!" });
        }

        [HttpGet("register")]
        public async Task<IActionResult> Register([FromBody] RegisterRequest request)
        {
            Console.WriteLine("Connected Successfully");
            return Ok(new {message = "Registration Successful!"});
        }
        
    }

  

       
}
