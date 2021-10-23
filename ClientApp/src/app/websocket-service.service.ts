import { User } from './models/User';
import { SendMsgRequest } from './models/send-msg-request';
import { Message } from './models/message';
import { SocketMessage } from './models/socket-message';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WebSocketServiceService {
  readonly url = "https://localhost:5001/api/chat/"; 
  constructor(private http:HttpClient) {}


  private socket :WebSocket;
  private name:string;
  private id:number=0;
  announcement$ : BehaviorSubject<string> = new BehaviorSubject<string>('');
  Message$ : BehaviorSubject<string> = new BehaviorSubject<string>('');
  user$ : BehaviorSubject<User> = new BehaviorSubject<User>(new User());
 

  addUser(item:User):Observable<any> //return user id
  {
    
    return this.http.post<any>(this.url + 'createUser',item)
  }
  createRoom(id:number) //return room id
  {
    return this.http.post<any>(this.url + '?id=' + id ,id)
  }
  getUsers():Observable<any[]>
  {
    return this.http.get<any>(this.url + 'Id')
  }
  StartSocket(){
    this.socket = new WebSocket('wss://localhost:5001/ws');
    this.socket.addEventListener("open", (ev=> {console.log(ev)
    }));
    
    this.socket.addEventListener("message", (ev=>{
      var msg:SocketMessage = new SocketMessage();
      msg = JSON.parse(ev.data);
      switch(msg.MessageType){
        case "user":
        this.name = msg.Payload.name;
        let user = new User(0,msg.Payload.name,msg.Payload.socket);
        
        this.addUser(user).subscribe(res=>{user.id=res;this.user$.next(user);});
        break;
        case "message":
        this.Message$.next(msg.Payload);
        
        break;
        case"announce":
        this.announcement$.next(msg.Payload);
        break;
        default:
          break;
      }
      
    }));
    
  }
  sendMessage(req:SendMsgRequest) {
   
    var msgAsJson = JSON.stringify(req);
    console.log(req.Msg);
    this.socket.send(msgAsJson);
  }
  
}
