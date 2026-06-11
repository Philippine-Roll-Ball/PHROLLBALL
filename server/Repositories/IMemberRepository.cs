using server.Models;

namespace server.Repositories
{
    public interface IMemberRepository
    {
        Task<User?> GetByIdAsync(Guid id);
        Task<IEnumerable<User>> GetAllAsync();

        Task<User?> AddAsync(User user);

        Task<User?> UpdateAsync(User user);

        Task<bool> DeleteAsync(Guid id);
    }
}
