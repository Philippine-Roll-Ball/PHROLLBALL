
public interface IPlayerRepository { 
    Task<IEnumerable<Player>> GetAllAsync();
    Task<IEnumerable<Player>> GetAllByTeamIdAsync(int teamID);
    Task<Player?> GetByIdAsync(int id);
    Task<bool> CreateAsync(Player player);
    Task<bool> UpdateAsync(int id);
    Task<bool> DeleteAsync(int id);
}