namespace server.Models
{
    public class Tournament
    {
        public int? TournamentID { get; set; }

        public List<Team>? ParticipatingTeams { get; set; }

        public DateTime? DateCreated { get; set; }

        public int? Duration { get; set; }

        public string? Location { get; set; }
    }
}
