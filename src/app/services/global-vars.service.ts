import { Injectable } from '@angular/core';

interface User {
  address: string;
  authorizationToken: string;
  city: string;
  email: string;
  emailConfirmed: boolean;
  firstName: string;
  id: string;
  isAdmin: boolean;
  lastName: string;
  managerUsername: string;
  meetingsNotificationsOff: boolean;
  phoneNumber: string;
  username: string;
}


@Injectable({
  providedIn: 'root'
})
export class GlobalVarsService {

  constructor() { }

  private options = {}

  setOptions(options: any) {
    this.options = options;
  }
  getOptions() {
    return this.options;
  }

  private user: User | null = null;
  setUser(user: User) {
    this.user = user;
    this.setOptions({
      headers: {
        Authorization: `Bearer ${user.authorizationToken}`
      }
    })
  }
  getUser() {
    return this.user;
  }
}
