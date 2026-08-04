

public class PlayerRepository : IPlayerRepository { 
    private readonly AppDbContext _db;
    public PlayerRepository(AppDbContext db) { 
        _db = db;
    }

    public async Task<IEnumerable<Player>> GetAllAsync() => await _db.Players.ToListAsync();

    public async Task<IEnumerable<Player>> GetAllByTeamIdAsync(int teamID) { 
        var result = await _db.Player
    }
    public async Task<Player?> GetByIdAsync(int id) { 

    }
    public async Task<bool> CreateAsync(Player player) { 

    }
    public async Task<bool> UpdateAsync(int id) {

    }
    public async Task<bool> DeleteAsync(int id) {

    }
}