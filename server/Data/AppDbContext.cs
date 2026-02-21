using Microsoft.EntityFrameworkCore;
using server.Models;



namespace server.Data
{
    public class AppDbContext: DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Admin> Admins { get; set; }
        public DbSet<Player> Players { get; set; }
        public DbSet<Match> Matches { get; set; }
        public DbSet<Coach> Coaches { get; set; }
        public DbSet<Team> Teams { get; set; }
        public DbSet<Tournament> Tournaments { get; set;  }
        public DbSet<TournamentTeam> TournamentTeams { get; set; }

        public DbSet<MatchTeam> MatchTeams { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // TournamentTeam Composite PK
            modelBuilder.Entity<TournamentTeam>()
                .HasKey(tt => new { tt.TournamentID, tt.TeamID });

            modelBuilder.Entity<TournamentTeam>()
                .HasOne(tt => tt.Team)
                .WithMany(tt => tt.TournamentTeams)
                .HasForeignKey(tt => tt.TeamID)
                .OnDelete(DeleteBehavior.Cascade);


        }

    }
}
