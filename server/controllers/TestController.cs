using Microsoft.AspNetCore.Mvc;

namespace server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TestController : ControllerBase
    {

        [HttpGet]
        public IActionResult GetTestJson()
        {
            Console.WriteLine("Received GET request at /api/test");

            return Ok(new { Message = "What the heck?!" });

        }
    }
}
