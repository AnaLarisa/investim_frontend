import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {GlobalVarsService} from "../../../services/global-vars.service";
import {RequestsService} from "../../../services/requests.service";

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent {

  constructor(
    private readonly _formBuilder: FormBuilder,
    private globalVarsService: GlobalVarsService,
    private requestsService: RequestsService,
  ) {}

  userError = '';
  passwordError = '';

  ngOnInit(): void {
    // @ts-ignore
    // this.user = this.globalVarsService.getUser(); //TODO: implement once api call is created
  }

  readonly options = [
    "Luca",
    "Matei"
  ]
  private user = {
    first_name: "Mehrab",
    last_name: "Bozorgi",
    email: "Mehrabbozorgi.business@gmail.com",
    address: "Too long to write it lul",
    phone: "+42000000",
    username: "Username",
    city: "Mehrab",
    manager_username: "Luca",
  };
  readonly form = this._formBuilder.group({
    // @ts-ignore
    first_name: [this.user.first_name, Validators.required],
    // @ts-ignore
    last_name: [this.user.last_name, Validators.required],
    // @ts-ignore
    email: [this.user.email, Validators.required],
    // @ts-ignore
    address: [this.user.address, Validators.required],
    // @ts-ignore
    phone: [this.user.phone, Validators.required],
    // @ts-ignore
    username: [this.user.username, Validators.required],
    // @ts-ignore
    city: [this.user.city, Validators.required],
    // @ts-ignore
    manager_username: [this.user.manager_username, Validators.required],
  });

  readonly changePasswordForm = this._formBuilder.group({
    old: ['', Validators.required],
    newPass: ['', Validators.required],
    confirm: ['', Validators.required],
  });



  save() {
    console.log(this.form.value)
  }

  updatePassword() {
    const {old, newPass, confirm} = this.changePasswordForm.value;
    this.requestsService.updatePassword(old as string, newPass as string, confirm as string).subscribe(
      {
        next:() => {
          this.passwordError = 'Password changed Successfully';
        },
        error:(msg: any) => {
          if(typeof msg.error === "object"){
            this.passwordError = msg.error.errors[Object.keys(msg.error.errors)[0]][0];
          } else {
            this.passwordError = msg.error;
          }
        }
      });
  }
}
