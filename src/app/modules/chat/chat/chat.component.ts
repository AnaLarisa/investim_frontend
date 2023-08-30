import { Component } from '@angular/core';
import {AppComponent} from "../../../app.component";
import { CometChat } from "@cometchat-pro/chat";
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  constructor(private appComponent: AppComponent) {
    this.appComponent.selectedOption = 'chat';

    let authKey = "3773a91e2303f324d516d897b5f127c6ef9eb6fa";
    var uid = "6480f29a2824a26b62d6a6ec";
    var name = "Ana";

    var user = new CometChat.User(uid);
    user.setName(name);
      CometChat.login(uid, authKey).then(
        (user) => {
          console.log("Login Successful:", { user });
        },
        (error) => {
          CometChat.createUser(user, authKey).then(
            user => {
              console.log("user created", user);
            },error => {
              console.log("error", error);
            }
          )
        }
      );
  }
}
