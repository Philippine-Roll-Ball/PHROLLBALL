

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Models;
namespace server;

[ApiController]
[Route("api/[controller]")]
public class PlayerController : ControllerBase {
    private readonly AppDbContext _playerContext;

    public PlayerController(AppDbContext playerContext)
    {
        _playerContext = playerContext;
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] Player request)
    {

        var existing = await _playerContext.Players.FirstOrDefaultAsync(p => p.Email == request.Email )

        return Ok("Registration Successful!");
    }
}