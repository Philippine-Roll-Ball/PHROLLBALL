using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace server.Models
{
    public class TournamentTeam
    {

        [Required]
        public int TournamentID { get; set; }

        [Required]
        public int TeamID { get; set; }

        [Required]
        [MaxLength(20)]
        public string? TeamStanding { get; set; }

        [ForeignKey(nameof(TournamentID))]
        public Tournament? Tournament { get; set; }

        [ForeignKey(nameof(TeamID))]
        public Team? Team { get; set; }

    }
}
