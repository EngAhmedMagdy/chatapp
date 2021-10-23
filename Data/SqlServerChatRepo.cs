using System.Collections.Generic;
using System.Linq;
namespace chat
{
    public class SqlServerChatRepo : ChatRepo
    {
        private readonly ChatDbContext _context;

        public SqlServerChatRepo(ChatDbContext context)
        {
            _context = context;
        }
        public int CreateUsers(Users user)
        {
             _context.Users.Add(user);
            
            _context.SaveChanges();
            return user.id;
        }

        public Users GetUserById(int id)
        {
            return _context.Users.FirstOrDefault(x => x.id == id);
        }

        public IEnumerable<Users> GetUsers(List<string> names)
        {
           return _context.Users.Where(x => names.Any(y => y == x.name));
        }
        public int CreateRoom(int id)
        {
            Users user = _context.Users.FirstOrDefault(x => x.id == id);
            Rooms room = new Rooms();
            _context.Rooms.Add(room);
            user.roomId = room;
            _context.SaveChanges();
            return room.Id;
        }
    }
}