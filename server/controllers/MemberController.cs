using Microsoft.AspNetCore.Mvc;
using server.Services;

namespace server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MemberController : ControllerBase
    {
        private readonly MemberService _memberService;

        public MemberController(MemberService memberService) => _memberService = memberService;
        

        [HttpGet("{id}")]
        public async Task<IActionResult> GetMember(Guid id)
        {
            var result = await _memberService.GetUserAsync(id);

            if (result == null) return NotFound();

            return Ok(result);
        }
    }
}
