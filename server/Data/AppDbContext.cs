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

        public DbSet<QrCode> Qrcodes { get; set; }

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

            modelBuilder.Entity<TournamentTeam>()
                .HasOne(tt => tt.Tournament)
                .WithMany(tt => tt.TournamentTeams)
                .HasForeignKey(tt => tt.TournamentID)
                .OnDelete(DeleteBehavior.Cascade);


            modelBuilder.Entity<MatchTeam>()
                .HasKey(mt => new { mt.MatchID, mt.TeamID });

            modelBuilder.Entity<MatchTeam>()
                .HasOne(mt => mt.Team)
                .WithMany(mt => mt.MatchTeams)
                .HasForeignKey(mt => mt.TeamID)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<MatchTeam>()
                .HasOne(mt => mt.Match)
                .WithMany(mt => mt.MatchTeams)
                .HasForeignKey(mt => mt.MatchID)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Coach>()
                .HasOne(c => c.Team)
                .WithOne(t => t.CoachAssigned)
                .HasForeignKey<Coach>(c => c.TeamAssigned)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Player>()
                .HasOne(p => p.TeamAssigned)
                .WithMany(t => t.Players)
                .HasForeignKey(p => p.TeamID)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Coach>()
                .Property(c => c.OtherSports)
                .HasConversion(
                v => string.Join(',', v ?? new List<string?>()),
                    v => v.Split(',', StringSplitOptions.RemoveEmptyEntries)
                           .Select(s => (string?)s).ToList()
                );

            modelBuilder.Entity<Player>()
                .Property(p => p.OtherSports)
                .HasConversion(
                    v => string.Join('v', v ?? new List<string?>()),
                    v => v.Split(',', StringSplitOptions.RemoveEmptyEntries)
                    .Select(s => (string?)s).ToList()
                );

        }

    }
}
