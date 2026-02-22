using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace server.Models
{
    public class MatchTeam
    {
        [Required]
        public int MatchID { get; set; }

        [Required]
        public int TeamID { get; set; }

        [Required]
        public int Score { get; set; }

        [ForeignKey(nameof(MatchID))]
        public Match? Match { get; set; }

        [ForeignKey(nameof(TeamID))]
        public Team? Team { get; set; }


    }
}
