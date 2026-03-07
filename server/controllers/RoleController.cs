using FirebaseAdmin.Auth;
using Microsoft.AspNetCore.Mvc;

namespace server.controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RoleController : ControllerBase
    {
        [HttpPost("assign")]
        public async Task<IActionResult> AssignRole([FromBody] RoleAssignmentRequest request)
        {
            try
            {
                var claims = new Dictionary<string, object>
                {
                    { "role", request.Role }
                };

                await FirebaseAuth.DefaultInstance.SetCustomUserClaimsAsync(request.Uid, claims);

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
