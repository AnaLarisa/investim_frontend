import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {AppComponent} from "../../../app.component";
import {RequestsService} from "../../../services/requests.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(
    private router: Router,
    private appComponent: AppComponent,
    private requestService: RequestsService,
  ) {
    this.appComponent.selectedOption = ''
  }

  signupForm = new FormGroup({
    firstName: new FormControl(''),
    lastName:  new FormControl(''),
    email: new FormControl(''),
    username: new FormControl(''),
    manager: new FormControl(''),
  });
  errorMsg = ''

  ngOnInit(): void {
  }

  onSignUp() {
    this.requestService.askForAccount(this.signupForm.value).subscribe(
      {
        next:(data: any) => {
          this.goToLogin();
          this.errorMsg = '';
        },
        error:(msg) => {
          if(typeof msg.error === "object"){
            this.errorMsg = msg.error.errors[Object.keys(msg.error.errors)[0]][0];
          } else {
            this.errorMsg = msg.error;
          }
          console.log(msg)
        }
      });
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
