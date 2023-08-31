import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import {RouterModule} from "@angular/router";
import {
  CometChatUI
} from "../../../cometchat-pro-angular-ui-kit/CometChatWorkspace/src/components/CometChatUI/CometChat-Ui/cometchat-ui.module";

@NgModule({
  declarations: [
    ChatComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'chat', component: ChatComponent}
    ]),
    CometChatUI,
  ]
})
export class ChatModule { }
