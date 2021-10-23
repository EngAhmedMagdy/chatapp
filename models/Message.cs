using System.Text.Json;
using Newtonsoft.Json;
using System.Collections.Generic;
using System;
namespace chat
{
    public class Message {
        public int Id ;
        public string msg;
    
    }
    public class SendMsgRequest{
        public int Id;
        public string Msg;
        public string Name;
        public static SendMsgRequest FromJson(string json)
        {
            return JsonConvert.DeserializeObject<SendMsgRequest>(json);
        }
    }
    
        
    
}