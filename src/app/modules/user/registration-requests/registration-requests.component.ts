import { Component } from '@angular/core';
import {GlobalVarsService} from "../../../services/global-vars.service";
import {RequestsService} from "../../../services/requests.service";

export interface RegistrationRequest {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
}

@Component({
  selector: 'app-registration-requests',
  templateUrl: './registration-requests.component.html',
  styleUrls: ['./registration-requests.component.css']
})
export class RegistrationRequestsComponent {

  constructor(
    private requestsService: RequestsService,
    private globalVarsService: GlobalVarsService,
  ) {
  }

  requests: RegistrationRequest[] = [];
  ngOnInit(): void {
    this.requestsService.getRegistrationRequests().subscribe({
      next: (data: any) => {
        this.requests = data.map((details: any) => ({
          id: details.id,
          firstName: details.firstName,
          lastName: details.lastName,
          email: details.email,
          username: details.username,
        }));
      },
      error: (err: any) => {
      }
    })
  }

  removeRequestFromList(id: string) {
    this.requests = this.requests.filter((request: RegistrationRequest) => request.id !== id);
  }

  acceptRequest(request: RegistrationRequest) {
    this.removeRequestFromList(request.id);
    this.requestsService.approveRegistrationRequests(request.id).subscribe({
      next: (data: any) => {

      },
      error: (err: any) => {
        if(err.status !== 200)
        console.log(err);
      }
    })
  }

  rejectRequest(request: RegistrationRequest) {
    this.removeRequestFromList(request.id);
    this.requestsService.deleteRegistrationRequests(request.id).subscribe({
      next: (data: any) => {

      },
      error: (err: any) => {
        if(err.status !== 200)
          console.log(err);
      }
    })
  }
}
