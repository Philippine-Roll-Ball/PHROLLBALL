using System;
using server.Data;
namespace server.Repositories
{
    public class MemberRepository : IMemberRepository
    {
        private readonly AppDbContext _context;
        public MemberRepository(AppDbContext context) => _context = context; 
    }
}
