using Microsoft.EntityFrameworkCore;
namespace chat
{
    public class ChatDbContext : DbContext
    {
        public ChatDbContext(DbContextOptions<ChatDbContext> opt ) : base(opt)
        {

        }
        public DbSet<Users> Users {get;set;}
        public DbSet<Rooms> Rooms {get;set;}
    }
}