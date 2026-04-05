

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Data;
using server.DTOs;
using server.Models;
using Mapster;
using server.Services;
namespace server;

[ApiController]
[Route("api/[controller]")]
public class UserController : ControllerBase {

    private readonly AppDbContext _context;

    public UserController(AppDbContext context, AuthenticationService authService)
    {
        _context = context;
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] UserDto userRequest)
    {
        try
        {

            if (string.IsNullOrWhiteSpace(userRequest.UserID))
            {
                return BadRequest("Firebase UID is missing from the request.");
            }

            bool exists = await _context.Users.AnyAsync(u =>
             u.Email == userRequest.Email &&
             u.FirstName == userRequest.FirstName &&
             u.LastName == userRequest.LastName);

            if (exists) return BadRequest("Player Already Exists");

            User? user = userRequest.Role.ToLower() switch
            {
                "player" => new Player(),
                "coach" => new Coach(),
                _ => null
            };

            if (user == null) return BadRequest("Invalid Role");

            userRequest.Adapt(user);

            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();

            
            // Call the JWT generation method passing the user's email and role
            
            return Ok(new { Message = "Registered Successfully" });


        }
        catch (Exception ex)
        {
            return StatusCode(500, $"An error occurred while registering the player: {ex.Message}");
        }

    }


}