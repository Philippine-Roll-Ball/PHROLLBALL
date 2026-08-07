using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.IdentityModel.Tokens.Jwt;
using FirebaseAdmin.Auth;

using server.Data; 
using server.Models;
using server.Services;
using System.Text.Json.Serialization;


namespace server.controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {

        private readonly AppDbContext _context;
        private readonly AuthenticationService _authService;
        public AuthController(AppDbContext context, AuthenticationService authService)
        {
            _context = context;
            _authService = authService;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequestDto request)
        {

            // called from the client who successfully logged in using firebase, so this is trusted. 
            // We just need to issue a JWT token for our own backend to recognize the user and their role.
           
            try
            {
                FirebaseToken decodedToken = await FirebaseAuth.DefaultInstance.VerifyIdTokenAsync(request.FirebaseUserToken);

                string verifiedEmail = decodedToken.Claims["email"]?.ToString();

                var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == verifiedEmail);

                if (user == null)
                {
                    Console.WriteLine("User not found for email: " + verifiedEmail);
                    return Unauthorized(new { message = "User not Found" });

                }


                var jwtToken = _authService.IssueJwt(user.UserID, user.Email, user.Role);

                return Ok(new { message = "Login successful", token = jwtToken });
            }
            catch (Exception ex)
            {
                return Unauthorized(new { message = "Invalid token", error = ex.Message });
            }

        }
    }

    public class LoginRequestDto
    {
        [JsonPropertyName("firebaseUserToken")]
        public string? FirebaseUserToken { get; set; }
    }

  

       
}
