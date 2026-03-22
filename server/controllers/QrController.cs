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
                return BadRequest(new { message = "QR Code data already exists." });
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

            return Ok(new { message = "Connected!" });
        }
    }

       
}
