using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using chat;
namespace chat
{
    public class Rooms
    {
        [Key]
        public int Id {get;set;}
        
        public virtual ICollection<Users> users { get; set; }

        
    }
}