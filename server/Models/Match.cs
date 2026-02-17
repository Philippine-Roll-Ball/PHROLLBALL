using System.ComponentModel.DataAnnotations;

namespace server.Models
{
    public class Match
    {
        [Required]
        public int? MatchID { get; set; }

        public List<Team>? Teams { get; set; }
        [Required]
        public string? Result { get; set; }
        [Required]
        public DateTime? MatchDate { get; set; }

        [Required]
        public int Duration { get; set; }
    }
}
