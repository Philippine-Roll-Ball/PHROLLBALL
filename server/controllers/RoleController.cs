
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Data;

namespace server.controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RoleController : ControllerBase
    {
        private readonly AppDbContext _context;

        public RoleController (AppDbContext context)
        {
            _context = context;
        }
        [HttpPut("assign")]
        public async Task<IActionResult> AssignRole([FromBody] RoleAssignmentRequest request)
        {
            try
            {
               

                var exists = await _context.Users.FirstOrDefaultAsync(u => u.UserID == request.Uid);
              
                if (exists == null)
                {
                    return NotFound(new { Error = $"User with UID {request.Uid} not found in the database" });
                }

                await _context.Users.Where(u => u.UserID == request.Uid)
                    .ExecuteUpdateAsync(setters => setters.SetProperty(u => u.Role, request.Role));

                await _context.SaveChangesAsync();

                return Ok( new { Message = $"Success The user {request.Uid} has been granted the {request.Role} role"});
            } catch(Exception ex)
            {
                return StatusCode(500, new { Error = "Failed to assign role", Details = ex.Message });
            }

            
        }
    }

    public class RoleAssignmentRequest
    {
        public string? Uid { get; set; }
        public string? Role { get; set; }
    }
}
