using System.ComponentModel.DataAnnotations;

namespace server.DTOs
{
    public class CreateTournamentDto
    {
        [Required]
        [MaxLength(50)]
        public string TournamentName { get; set; } = string.Empty;

        public int? Duration { get; set; }

        public string? Location { get; set; }

        [Required]
        [MaxLength(20)]
        public string TournamentType { get; set; } = string.Empty;
    }
    public class UpdateTournamentDto
    {
        [Required]
        public int TournamentID { get; set; }

        [Required]
        [MaxLength(50)]
        public string TournamentName { get; set; } = string.Empty;

        public int? Duration { get; set; }

        public string? Location { get; set; }

        [Required]
        [MaxLength(20)]
        public string TournamentType { get; set; } = string.Empty;
    }

    public class TournamentResponseDto
    {
        public int TournamentID { get; set; }
        public string TournamentName { get; set; } = string.Empty;
        public DateTime? DateCreated { get; set; }
        public int? Duration { get; set; }
        public string? Location { get; set; }
        public string TournamentType { get; set; } = string.Empty;
        public List<TournamentTeamResponseDto>? TournamentTeams { get; set; }
    }

    public class TournamentTeamResponseDto
    {
        public int TournamentTeamID { get; set; }
        public string? TeamName { get; set; }
    }
}
