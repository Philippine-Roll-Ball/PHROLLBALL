using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace server.Models
{
    public class Team
    {
        [Key]
        public int TeamID { get; set; }

        [Required]
        public string? TeamName { get; set; }

        public int? CoachID { get; set; }

        [ForeignKey(nameof(CoachID))]
        public Coach? CoachAssigned { get; set; }

        [Required]
        
        public DateTime? DateCreated { get; set; }
     
        public int Wins { get; set; }
      
        public int Losses { get; set; }
        public int? TeamScore { get; set; }
        public int? FoulNumber { get; set; }

        public int? Matches { get; set; }

        public List<Player>? Players { get; set; }
        
        
        public List<MatchTeam>? MatchTeams{ get; set; }

        public List<TournamentTeam>? TournamentTeams { get; set; }
    }
}
