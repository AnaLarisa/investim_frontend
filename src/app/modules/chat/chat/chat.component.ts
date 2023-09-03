import { Component } from '@angular/core';
import {AppComponent} from "../../../app.component";
import { CometChat } from "@cometchat-pro/chat";
import {GlobalVarsService} from "../../../services/global-vars.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  constructor(
    private appComponent: AppComponent,
    private globalVarsService: GlobalVarsService,
    private router: Router,
  ) {
    this.appComponent.selectedOption = 'chat';
  }

  reloadedChat = false;

  ngOnInit(): void {
    let authKey = "3773a91e2303f324d516d897b5f127c6ef9eb6fa";
    const InvesTimeUser = this.globalVarsService.getUser();
    var uid = InvesTimeUser?.id;
    var name = InvesTimeUser?.firstName + " " + InvesTimeUser?.lastName;

    var user = new CometChat.User(uid);
    user.setName(name);
    CometChat.logout().then( () => {
        CometChat.login(uid, authKey).then(
          (user) => {
            this.reloadComponent();
          },
          (error) => {
            CometChat.createUser(user, authKey).then(
              user => {
              },error => {
                console.log("error", error);
              }
            )
          }
        );
      }
    )
  }

  reloadComponent(){
    //skipLocationChange:true means don't update the url to / when navigating
    this.reloadedChat = this.globalVarsService.getReloadedChat();
    if(!this.reloadedChat){
      this.globalVarsService.setReloadedChat(true);
      this.reloadedChat = true;
      const url=this.router.url;
      this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
        this.router.navigate([`/${url}`]).then(()=>{})
      })
    }
  }
}
