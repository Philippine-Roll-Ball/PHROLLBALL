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

        

        [HttpPost("register-bulk")]
        public async Task<IActionResult> QrRegisterBulk([FromBody] QrCodeBulkRequest request)
        {
            if (request.Items == null || request.Items.Count == 0)
            {
                return BadRequest("No QR codes provided to register.");
            }

            const int MaxBatchSize = 500;
            if (request.Items.Count > MaxBatchSize)
            {
                return BadRequest($"Batch too large. Max {MaxBatchSize} items per request.");
            }

            var results = new List<QrBulkResultItem>();

            // Guard against duplicate "Data" values within the same incoming batch
            var incomingData = request.Items.Select(i => i.Data).ToList();
            var duplicatesInBatch = incomingData
                .GroupBy(d => d)
                .Where(g => g.Count() > 1)
                .Select(g => g.Key)
                .ToHashSet();

            // Single query to find which of these already exist in the DB
            var existingData = await _context.Qrcodes
                .Where(q => incomingData.Contains(q.Data))
                .Select(q => q.Data)
                .ToListAsync();
            var existingSet = existingData.ToHashSet();

            var toInsert = new List<QrCode>();

            foreach (var item in request.Items)
            {
                if (duplicatesInBatch.Contains(item.Data))
                {
                    results.Add(new QrBulkResultItem
                    {
                        Data = item.Data,
                        Success = false,
                        Message = "Duplicate entry within this batch"
                    });
                    continue;
                }

                if (existingSet.Contains(item.Data))
                {
                    results.Add(new QrBulkResultItem
                    {
                        Data = item.Data,
                        Success = false,
                        Message = "QR Code data already exists"
                    });
                    continue;
                }

                toInsert.Add(new QrCode
                {
                    SecurityToken = item.SecurityToken,
                    EntityType = item.EntityType,
                    Data = item.Data,
                    CreatedByEmail = item.CreatedByEmail
                });

                results.Add(new QrBulkResultItem
                {
                    Data = item.Data,
                    Success = true,
                    Message = "Registered"
                });
            }

            if (toInsert.Count > 0)
            {
                var strategy = _context.Database.CreateExecutionStrategy();

                try
                {
                    await strategy.ExecuteAsync(async () =>
                    {
                        await using var transaction = await _context.Database.BeginTransactionAsync();
                        await _context.Qrcodes.AddRangeAsync(toInsert);
                        await _context.SaveChangesAsync();
                        await transaction.CommitAsync();
                    });
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"Bulk QR registration failed: {ex.Message}");
                    return StatusCode(500, "Failed to register QR codes due to a server error.");
                }
            }

            var successCount = results.Count(r => r.Success);
            var failCount = results.Count - successCount;

            return Ok(new
            {
                message = $"{successCount} registered, {failCount} failed.",
                results
            });
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

    public class QrCodeBulkRequest
    {
        public List<QrCode> Items { get; set; } = new();
    }

    public class QrBulkResultItem
    {
        public string Data { get; set; } = string.Empty;
        public bool Success { get; set; }
        public string? Message { get; set; }
    }


}
