using server.DTOs;

namespace server.Services.Interfaces
{
    public interface IMemberService
    {
        Task<UserDto?> GetUserAsync(Guid id);
        Task<IEnumerable<UserDto>> GetAllAsync();

        Task<UserDto?> CreateAsync(UserDto user);

        Task<UserDto?> UpdateAsync(Guid id, UserDto user);

        Task<bool> DeleteAsync(Guid id);
    }
}
