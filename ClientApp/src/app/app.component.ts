import { WebSocketServiceService } from './websocket-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.css']
})
export class AppComponent {
  constructor(private WebSocketServiceService : WebSocketServiceService)
  {

  }
  
}
