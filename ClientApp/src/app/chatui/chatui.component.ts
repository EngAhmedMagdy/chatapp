import { User } from './../models/User';
import { Component } from '@angular/core';
import { SendMsgRequest } from '../models/send-msg-request';
import { WebSocketServiceService } from '../websocket-service.service';

@Component({
  selector: 'app-chatui',
  
  styleUrls: ['./chatui.component.css'],
  templateUrl: './chatui.component.html'
})
export class ChatuiComponent {

  Messages:string[]=[];
  Announcement:string[]=[];
  msg:string='';
  name:string ="";
  id:number=0;
  Users:User[]=[];
  constructor(private _WebSocketServiceService : WebSocketServiceService)
  {
   this._WebSocketServiceService.announcement$.subscribe(ev =>
      {
        if(ev){this.Announcement.unshift(ev)}
        this.getUsers();
        
        
      })
    this._WebSocketServiceService.Message$.subscribe(ev =>
      
    {
       if(ev){ this.Messages.unshift(ev)}
    })
    this._WebSocketServiceService.user$.subscribe(n => {
        this.name = n.name;
        this.id = n.id;
        //console.log(n.id);
    })

  }
  ngOnInit() {
    this._WebSocketServiceService.StartSocket();
    this.getUsers();
 
  }
  getUsers(){
    this._WebSocketServiceService.getUsers().subscribe(data => {
      this.Users = data
    });
  }
  sendMsg(){
    var req = new SendMsgRequest();
    
    req.Id = 0;
    req.Msg = this.msg;
    req.Name = this.name;
    this._WebSocketServiceService.sendMessage(req);
    
  }
  createRoom(){
    this._WebSocketServiceService.createRoom(this.id).subscribe(res=> {console.log(res)});
    
  }

 
  
}
