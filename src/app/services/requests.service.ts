import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GlobalVarsService} from "./global-vars.service";

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(
    private http: HttpClient,
    private globalVarsService: GlobalVarsService
  ) {}
  baseUrl = 'http://localhost:5074/';
  login(username: string, password: string) {
    return this.http.post(this.baseUrl + 'auth/login',
      {
        username,
        password
      });
  }

  askForAccount(singUpData: any) {
    const {firstName, lastName, email, username, manager} = singUpData;
    return this.http.post(this.baseUrl + 'auth/askForAccount',
      {
        firstName,
        lastName,
        email,
        username,
        managerUsername: manager
      });
  }

  updatePassword(currentPassword: string, newPassword: string, newPasswordAgain: string) {
    return this.http.put(this.baseUrl + 'user/changePassword',
      {
        currentPassword,
        newPassword,
        newPasswordAgain
      },
      this.globalVarsService.getOptions());
  }
}
