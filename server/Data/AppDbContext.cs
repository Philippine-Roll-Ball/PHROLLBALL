using Microsoft.EntityFrameworkCore;
using server.Models;



namespace server.Data
{
    public class AppDbContext: DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Player> Players { get; set; }
        public DbSet<Match> Matches { get; set; }

        public DbSet<Coach> Coaches { get; set; }

        public DbSet<Team> Teams { get; set; }

        public DbSet<Tournament> Tournaments { get; set;  }

    }
}
