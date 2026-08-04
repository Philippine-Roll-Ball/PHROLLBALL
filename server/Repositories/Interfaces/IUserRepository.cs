public interface IUserRepository { 
    // General User DB Queries
    Task<IEnumerable<User>> GetAllUsersAsync();
    Task<bool> CreateUserAsync(User user);
    Task<bool> UpdateUserAsync();
    Task<boo> DeleteUserAsync();

    // Player Specific DB Queries
    Task<IEnumerable<User>> GetAllPlayersAsync();
    Task<IEnumerable<User>> GetAllByTeamIdAsync();

    // Coach Specific DB Queries
    Task<IEnumerable<User>> GetAllCoachesAsync();
    Task<IEnumerable<User>> GetCoachByIdAsync();

}