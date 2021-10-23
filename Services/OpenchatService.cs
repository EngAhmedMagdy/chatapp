using Newtonsoft.Json;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Net.WebSockets;
using System.Threading;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using chat.Controllers;

using System.Text;
using System.Net.Http;
using System.Net.Http.Headers;
using chat;
namespace chat
{
    public class OpenchatService
    {
        
        public static Dictionary<string,WebSocket> _users = new Dictionary<string, WebSocket>();
        public Dictionary<int,List<Users>> _rooms = new Dictionary<int,List<Users>>();
        public async Task AddUser(WebSocket socket)
        {
            
            var name = GenerateName();
            _users.TryAdd(name, socket);
            AnnounceNewUser(name).Wait();
            GiveUserTheirName(name,socket).Wait();
           
            while (socket.State == WebSocketState.Open)
            {
                WebSocketReceiveResult response;
                var buffer = new byte[1024*4];
                var package = new List<byte>();
                do
                {
                    response = await  socket.ReceiveAsync( new ArraySegment<byte>(buffer),CancellationToken.None);
                    package.AddRange(new ArraySegment<byte>(buffer,0,response.Count));
                   
                } while (!response.EndOfMessage);
                var bufferAsString = System.Text.Encoding.ASCII.GetString(package.ToArray());
                if(!string.IsNullOrEmpty(bufferAsString))
                {
                    var msgRequest = SendMsgRequest.FromJson(bufferAsString);
                    await NewMessageSent(msgRequest);
                    
                }
            }
            
            await socket.CloseAsync(WebSocketCloseStatus.NormalClosure,"",CancellationToken.None);
            
        }
         private string GenerateName()
        {
            var prefix = "WebUser";
            Random ran = new Random();
            var name = prefix + ran.Next(1, 1000);
            while (_users.ContainsKey(name))
            {
                name = prefix + ran.Next(1, 1000);
            }
           
            return name;

        }
        

        private async Task SendAll(string message,string name)
        {
           
            await Send(message, _users.Values.ToArray()); 
            
           
        }

        private async Task Send(string message, params WebSocket[] socketsToSendTo)
        {
            var sockets = socketsToSendTo.Where(s => s.State == WebSocketState.Open);
            foreach (var theSocket in sockets)
            {
                
                var stringAsBytes = System.Text.Encoding.ASCII.GetBytes(message);
                var byteArraySegment = new ArraySegment<byte>(stringAsBytes, 0, stringAsBytes.Length);
                await theSocket.SendAsync(byteArraySegment, WebSocketMessageType.Text, true, CancellationToken.None);
            }
        }

        private async Task GiveUserTheirName(string name, WebSocket socket)
        {
            string str = socket.SubProtocol;
            Users user = new Users(name,socket.ToString());
            var message = new SocketMessage<Users>
            {
                MessageType = "user",
                Payload = user
            };
            await Send(message.ToJson(), socket);
            /*using (var client = new HttpClient()) //this code doesn't work
            {
            client.BaseAddress = new Uri("http://localhost:5001/api/chat");

            //HTTP POST
            var postTask = client.PostAsJsonAsync<Users>("user", new Users(name,""));
            postTask.Wait(); 
            }*/
           
        }

        private async Task AnnounceNewUser(string name)
        {
            var message = new SocketMessage<string>
            {
                MessageType = "announce",
                Payload = $"{name} has joined"
            };
            await SendAll(message.ToJson(),name);
        }

        private async Task NewMessageSent(SendMsgRequest msg)
        {
            var message = new SocketMessage<string>
            {
                MessageType = "message",
                Payload = $"{msg.Name} ) {msg.Msg}"
            };
            await SendAll(message.ToJson(),msg.Name);
        }

        
        
    }
}