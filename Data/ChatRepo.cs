using System.Collections.Generic;
namespace chat
{
    public interface ChatRepo
    {
        Users GetUserById(int id);
        
        IEnumerable<Users> GetUsers(List<string> names);
        int CreateUsers(Users user);
        int CreateRoom(int UserId);
    }
}