using System;
using Microsoft.EntityFrameworkCore;
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

        public async Task<IEnumerable<User>> GetAllAsync()
        {
            return await _context.Users.ToListAsync();
        }

        public async Task<User?> AddAsync(User user)
        {
            _context.Users.Add(user);
            await _context.SaveChangesAsync();
            return user;
        }

        public async Task<bool> DeleteAsync(Guid id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null) return false;

            _context.Users.Remove(user);

            await _context.SaveChangesAsync();

            return true;
        }
    }
}
