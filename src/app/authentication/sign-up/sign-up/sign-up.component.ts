import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private router: Router) { }

  signupForm = new FormGroup({
    firstName: new FormControl(''),
    lastName:  new FormControl(''),
    email: new FormControl(''),
    username: new FormControl(''),
    manager: new FormControl(''),
  });

  ngOnInit(): void {
  }

  onSignUp() {
    //TODO: send http post request to create user
    console.log(this.signupForm.value)
    this.goToLogin()
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
