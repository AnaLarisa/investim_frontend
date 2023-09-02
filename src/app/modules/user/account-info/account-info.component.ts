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
  private user = {}
  form: any = null
  options: any = []
  ngOnInit(): void {
    // @ts-ignore
    this.user = this.globalVarsService.getUser();
    this.requestsService.getManagers().subscribe({
      next: (data: any) => {
        this.options = data
      },
      error: (err: any) => {
        if(err.status !== 200)
        console.log(err);
      }
    })
    this.form = this._formBuilder.group({
      // @ts-ignore
      firstName: [this.user.firstName],
      // @ts-ignore
      lastName: [this.user.lastName],
      // @ts-ignore
      email: [this.user.email, Validators.email],
      // @ts-ignore
      address: [this.user.address],
      // @ts-ignore
      phone: [this.user.phoneNumber],
      // @ts-ignore
      username: [this.user.username, Validators.required],
      // @ts-ignore
      city: [this.user.city],
      // @ts-ignore
      managerUsername: [this.user.managerUsername, Validators.required],
    });

  }

  readonly changePasswordForm = this._formBuilder.group({
    old: ['', Validators.required],
    newPass: ['', Validators.required],
    confirm: ['', Validators.required],
  });

  save() {
    this.requestsService.updateUser(this.form.value).subscribe({
      next: (data: any) => {
        this.userError = 'User updated Successfully';
      },
      error: (err: any) => {
        if(err.status !== 200) {
          console.log(err);
          this.userError = "Invalid fields!"
        }
      }
    })
  }

  updatePassword() {
    const {old, newPass, confirm} = this.changePasswordForm.value;
    this.requestsService.updatePassword(old as string, newPass as string, confirm as string).subscribe(
      {
        next:() => {
        },
        error:(msg: any) => {
          if(msg.status === 200){
            this.passwordError = 'Password updated Successfully';
          } else {
            if(typeof msg.error === "object"){
              this.passwordError = msg.error.errors[Object.keys(msg.error.errors)[0]][0];
            } else {
              this.passwordError = msg.error;
            }
          }
        }
      });
  }
}
