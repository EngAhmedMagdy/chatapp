
using System.Text.Json;
using Newtonsoft.Json;

namespace chat
{
    public class SocketMessage <T>
    {
        public T Payload;
        public string MessageType;

        public string ToJson()
        {
            return JsonConvert.SerializeObject(this);
            

        }

    }
}