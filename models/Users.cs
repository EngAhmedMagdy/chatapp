using System.ComponentModel.DataAnnotations;
namespace chat
{
    public class Users
    {
        [Key]
        public int id {get;set;}
        [Required]
        public string name {get;set;}
        [Required]
        public string socket {get;set;}
        public virtual Rooms roomId {get;set;}
        public Users(string name,string socket)
        {
            
            this.name = name;
            this.socket = socket;
        }
    }
}