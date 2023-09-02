import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import {AppComponent} from "../../../app.component";
import {RequestsService} from "../../../services/requests.service";
import {GlobalVarsService} from "../../../services/global-vars.service";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private appComponent: AppComponent,
    private requestsService: RequestsService,
    private globalVarsService: GlobalVarsService
    ) {
    this.appComponent.selectedOption = ''
  }

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  credentialsError = false;

  ngOnInit(): void {
  }

  onLogIn() {
    this.requestsService.login(this.loginForm.value.username as string, this.loginForm.value.password as string).subscribe(
    {
      next:(data: any) => {
        this.globalVarsService.setUser(data); // load user
        this.credentialsError = false;
        this.requestsService.getNews().subscribe({
          next: (data: any) => {
            this.globalVarsService.setNews(data)  // load news
            this.requestsService.getArticlesFromManager().subscribe({
              next: (data: any) => {
                this.globalVarsService.setArticles(data);  // load articles sent by the manager
                this.requestsService.getMeetings().subscribe({
                  next: (data: any) => {
                    this.globalVarsService.setMeetings(data);  // load meetings
                    this.router.navigate(['/dashboard']).then();
                  },
                  error: (err: any) => {
                    if(err.status !== 200)
                    console.log(err);
                  }
                })
              },
              error: (err: any) => {
                if(err.status !== 200)
                console.log(err);
              }
            })
          },
          error: (err: any) => {
            if(err.status !== 200)
            console.log(err);
          }
        });
      },
      error:(msg) => {
        this.credentialsError = true;
      }
    });
  }

  goToSignUp() {
    // Navigate to the sign-up page using its route path
    this.router.navigate(['/signup']).then();
  }
}
