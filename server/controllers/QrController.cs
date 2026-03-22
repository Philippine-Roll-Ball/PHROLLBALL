using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Models;

namespace server.controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class QrController : ControllerBase
    {

        private readonly AppDbContext _context;

        public QrController(AppDbContext context)
        {
            _context = context;
        }
        [HttpPost("register")]
        public async Task<IActionResult> QrRegister([FromBody] QrCode qrCodeRequest)
        {
            Console.WriteLine($"Connected Successfully {qrCodeRequest.EntityType} {qrCodeRequest.CreatedByEmail} {qrCodeRequest.Data} {qrCodeRequest.SecurityToken}");


            /** Validate QR Code data if it exists in the databbase, 
             if so, return error that it exists already, otherwise, 
            register the incoming qrCodeRequest data 
            and token and store it to the database */

            var existingQrCode = await _context.Qrcodes.FirstOrDefaultAsync(d => d.Data == qrCodeRequest.Data);

            if (existingQrCode != null)
            {
                return BadRequest("Failed to Register: QR Code data already exists");
            }

            // Create a new QrCode and save it to the database

            var qrCodeRecord = new QrCode
            {
                SecurityToken = qrCodeRequest.SecurityToken,
                EntityType = qrCodeRequest.EntityType,
                Data = qrCodeRequest.Data,
                CreatedByEmail = qrCodeRequest.CreatedByEmail
            };
            await _context.Qrcodes.AddAsync(qrCodeRecord);
            await _context.SaveChangesAsync();

            return Ok("QR Successfully Registered!");
        }

        [HttpGet("verify")]
        public async Task<IActionResult> Verify([FromQuery] string entityType, [FromQuery] string data, [FromQuery] string token)
        {

            if (string.IsNullOrEmpty(entityType) || string.IsNullOrEmpty(data) || string.IsNullOrEmpty(token))
            {
                return BadRequest(new { message = "Missing verification parameters." });
            }

            try
            {
                var validQr = await _context.Qrcodes.FirstOrDefaultAsync(d =>
                    d.Data == data &&
                    d.SecurityToken == token); // <-- Fixed this comparison!

                if (validQr == null)
                {
                    return BadRequest(new { message = "Invalid QR Code or Token mismatch." });
                }

                return Ok(new { message = $"Qr Code with Name {data} is valid" });
            }
            catch (Exception ex)
            {
                Console.WriteLine($"SERVER CRASHED: {ex.Message}");
                return StatusCode(500, new { message = "Internal Server Error" });
            }
        }
    }

       
}
