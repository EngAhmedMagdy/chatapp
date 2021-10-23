using Newtonsoft.Json;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Net.WebSockets;
using System.Threading;
using System.Threading.Tasks;


using chat;
using Microsoft.AspNetCore.Mvc;
using System.IO;
using System.Web;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;


namespace chat.Controllers
{
    [Route("api/chat")]
    [ApiController]
    public class ChatController : ControllerBase
    {
        private readonly ChatRepo _repo;
        private OpenchatService ocs = new OpenchatService();

        public ChatController(ChatRepo repo )
        {
            _repo = repo;
           /* foreach(var user in ocs._users)
            {
                var userItem = new Users(user.Key,user.Value.ToString());
                _repo.CreateUsers(userItem);
            }*/
           
        }
        [HttpGet("Id/{id}")]
        public ActionResult <Users> GetUserById(int id)
        {
            
            var item = _repo.GetUserById(id);
            if(item == null)
            {
                return NotFound();
            }
            return Ok(item);
        }
        [HttpGet("Id")]
        public ActionResult <Users> GetAllUsers()
        {
           //List<string> ActiveUsersNames = new List<string>(OpenchatService._users.Keys);
           var l = OpenchatService._users.Where( x=> x.Value.State == WebSocketState.Open).ToDictionary(val => val.Key, val => val.Value);
            List<string> ActiveUsersNames = new List<string>(l.Keys);

            var items = _repo.GetUsers(ActiveUsersNames);
            if(items == null)
            {
                return NotFound();
            }
            return Ok(items);
        }
        [HttpPost]
        [Route("createUser")]
        public ActionResult CreateUser(Users user)
        {
            
            if(user == null)
            {
                throw new ArgumentNullException();
            }
           
            return Ok(_repo.CreateUsers(user));
        }
        [HttpPost]
        public ActionResult <int> CreateRoom([FromQuery] int id)
        {
            var user = _repo.GetUserById(id);
            var listofusers = new List<Users>();
            listofusers.Add(user);
            if(user ==null)
            {
                throw new ArgumentNullException();
            }
            else
            {
                int roomId = _repo.CreateRoom(id);
                ocs._rooms.TryAdd(roomId,listofusers);
                return Ok(roomId);
            }

        }
       
    }
}