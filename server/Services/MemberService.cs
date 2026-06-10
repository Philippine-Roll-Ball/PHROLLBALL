using server.DTOs;
using server.Repositories;
using server.Services.Interfaces;

namespace server.Services
{
    public class MemberService : IMemberService
    {
        private readonly IMemberRepository _repo;

        public MemberService(IMemberRepository repo)
        {
            _repo = repo;
        }

        public async Task<UserDto?> GetUserAsync(Guid id)
        {
            var user = await _repo.GetByIdAsync(id);

            if (user == null) return null;

            return new UserDto
            {
                UserID = user.UserID,
                Email = user.Email,
                ContactNumber = user.ContactNumber,
                FirstName = user.FirstName,
                MiddleName = user.MiddleName,
                LastName = user.LastName,
                Suffix = user.Suffix,
                BirthDate = user.BirthDate,
                Address = user.Address,
            };
        }

        

        public async Task<UserDto?> CreateAsync(UserDto user)
        {
            // replace with actual implementation soon
            return new UserDto();
        }

        public async Task<UserDto?> UpdateAsync(Guid id, UserDto user)
        {
            // will replace with the actual implementation soon
            return new UserDto();
        }

        
    }
}
