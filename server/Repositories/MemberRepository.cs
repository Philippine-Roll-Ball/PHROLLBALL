using System;
using server.Data;
using server.Models;
namespace server.Repositories
{
    public class MemberRepository : IMemberRepository
    {
        private readonly AppDbContext _context;
        public MemberRepository(AppDbContext context) => _context = context;
        
        public async Task<User?> GetByIdAsync(Guid id)
        {
            return await _context.Users.FindAsync(id);
        }
    }
}
