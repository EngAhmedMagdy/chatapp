import { RoomComponent } from './room/room.component';
import { WebSocketServiceService } from './websocket-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { Input, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ChatuiComponent } from './chatui/chatui.component';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

import {MatTableModule} from '@angular/material/table'

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    ChatuiComponent,
    RoomComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
    {path: 'room', component: RoomComponent},
    { path: '', component: ChatuiComponent, pathMatch: 'full' },
], { relativeLinkResolution: 'legacy' }),
    MatTableModule
  ],
  providers: [
    WebSocketServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  @Input() id:any;
 }
