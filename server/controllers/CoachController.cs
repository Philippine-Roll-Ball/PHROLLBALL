

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Models;
namespace server;

[ApiController]
[Route("api/[controller]")]
public class CoachController : ControllerBase {
    private readonly AppDbContext _coachContext;

    public CoachController(AppDbContext coachContext)
    {
        _coachContext = coachContext;
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] Coach request)
    {

        var existing = await _coachContext.Players.FirstOrDefaultAsync(p => p.Email == request.Email &&
            p.FirstName == request.FirstName && 
            p.LastName == request.LastName);
        if (existing != null) return BadRequest("Player Already Exists");

        await _coachContext.Coaches.AddAsync(request);
        await _coachContext.SaveChangesAsync();
        return Ok("Registration Successful!");
    }
}