import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainContainerComponent} from "./components/main-container/main-container.component";
import {ChatRoomComponent} from "./components/main-container/chat-area/chat-room/chat-room.component";
import {ChatDefaultComponent} from "./components/main-container/chat-area/chat-default/chat-default.component";
import {LoginComponent} from "./components/login/login.component";

const routes: Routes = [
  {
    path:'',
    component:MainContainerComponent,
    children:[
      {
        path:'room/:id',
        component:ChatRoomComponent
      },
      {
        path:'',
        component:ChatDefaultComponent
      }
    ]
  },
  {
    path:'login',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
