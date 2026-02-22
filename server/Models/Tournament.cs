using System.ComponentModel.DataAnnotations;

namespace server.Models
{
    public class Tournament
    {
        [Key]
        public int? TournamentID { get; set; }

        [Required]
        [MaxLength(50)]
        public string? TournamentName { get; set; }

        public DateTime? DateCreated { get; set; }

        public int? Duration { get; set; }

        public string? Location { get; set; }

        public List<TournamentTeam>? TournamentTeams { get; set; }
    }
}
