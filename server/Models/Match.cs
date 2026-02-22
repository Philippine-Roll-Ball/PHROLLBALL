using System.ComponentModel.DataAnnotations;

namespace server.Models
{
    public class Match
    {
        [Key]
        public int? MatchID { get; set; }
        
        [Required]
        public DateTime? MatchDate { get; set; }

        [Required]
        public int Duration { get; set; }

        public List<MatchTeam> MatchTeams { get; set; }
    }
}
