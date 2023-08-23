import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import {AppComponent} from "../../../app.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private appComponent: AppComponent
    ) {
    this.appComponent.selectedOption = ''
  }

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit(): void {
  }

  onLogIn() {
    // TODO: http post to validate credentials
    const token = 'DummyToken';
    sessionStorage.setItem('authToken', token);
    console.log(this.loginForm.value);
    this.router.navigate(['/']).then();
  }

  goToSignUp() {
    // Navigate to the sign-up page using its route path
    this.router.navigate(['/signup']).then();
  }
}
