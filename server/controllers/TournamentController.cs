
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Data;
using server.DTOs;
using server.Models;

namespace server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TournamentController 
        (
            AppDbContext _context
        ): ControllerBase
    {
        [HttpGet("all")]
        public async Task<IActionResult> GetTournaments() 
        {
            var result = await _context.Tournaments.ToListAsync();
            if (result is null) return NotFound();

            return Ok(new { result });
        }
        [HttpPost("create")]
        public async Task<IActionResult> CreateTournament([FromBody] Tournament request)
        {
            var existing = await _context.Tournaments
                .Where(t => t.TournamentName == request.TournamentName)
                .FirstOrDefaultAsync();

            if (existing is not null) return BadRequest(new { Message = "A Tournament as already created" });

            await _context.AddAsync(request);
            await _context.SaveChangesAsync();
            return Ok(new { Message = "Tournament Successfully Created" });
        }
        [HttpPatch("update/{id}")]
        public async Task<IActionResult> UpdateTournament(int id, [FromBody] Tournament request)
        {   
            var existing = await _context.Tournaments.FindAsync(request.TournamentID);
            if (existing == null) return NotFound(new
            {
                Error = $"Tournament with Id {request.TournamentID} is not found... Try again later... "
            });
            existing.TournamentName = request.TournamentName;
            existing.Location = request.Location;
            existing.TournamentTeams = request.TournamentTeams;
            existing.Duration = request.Duration;
            existing.TournamentType = request.TournamentType;

            await _context.SaveChangesAsync();
            return Ok(new
            {
                Message = "Tournament Updated Successfully"
            });
        }
        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> DeleteTournament(int id)
        {
            var existing = await _context.Tournaments.FindAsync(id);
            if (existing == null) return NotFound(new
            {
                Error = "Tournament is not found, try again later..."
            });

            _context.Tournaments.Remove(existing);
            await _context.SaveChangesAsync();
            return Ok(new
            {
                Message = "Tournament Deleted Successfully"
            });

        }
        
    }
}
