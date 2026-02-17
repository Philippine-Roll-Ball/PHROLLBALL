using System.ComponentModel.DataAnnotations;

namespace server.Models
{
    public class Team
    {
        [Required]
        public int TeamID { get; set; }

        [Required]
        public Coach? CoachAssigned { get; set; }

        [Required]
        public List<Player>? Players { get; set; }

        [Required]
        public DateTime? DateCreated { get; set; }

        [Required]
        public int Wins { get; set; }

        [Required]
        public int Losses { get; set; }

        [Required]
        public List<Match>? Matches { get; set; }

        [Required]
        public int? TeamScore { get; set; }

        [Required]
        public int? FoulNumber { get; set; }
    }
}
