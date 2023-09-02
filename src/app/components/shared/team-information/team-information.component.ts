import {Component, inject} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {InspectProgressComponent} from "../inspect-progress/inspect-progress.component";
import {GlobalVarsService} from "../../../services/global-vars.service";
import {RequestsService} from "../../../services/requests.service";

@Component({
  selector: 'app-team-information',
  templateUrl: './team-information.component.html',
  styleUrls: ['./team-information.component.css']
})
export class TeamInformationComponent {

  readonly #matDialog = inject(MatDialog);

  constructor(
    private readonly _matDialog: MatDialog,
    private requestsService: RequestsService,
    private globalVarsService: GlobalVarsService,
  ) {}

  consultants: any = null;
  selectedForDeletion = -1;
  role = '';
  ngOnInit(): void {
    this.role = this.globalVarsService.getUser()?.isAdmin ? 'manager' : 'consultant';
    this.requestsService.getConsultants().subscribe({
      next: (data: any) => {
        this.consultants = data;
      },
      error: (err: any) => {
        if(err.status !== 200)
        console.log(err)
      }
    })
  }

  openProgress(consultant_name: string) {
    this._matDialog.open(InspectProgressComponent, {data: {consultant_name: consultant_name}});
  }

  deleteUser(consultant_name: string, index: number) {
    if(index === this.selectedForDeletion){
      this.requestsService.deleteConsultant(consultant_name).subscribe({
        next: (data: any) => {
          this.consultants = this.consultants.filter((consultant: any) => consultant.username !== consultant_name);
        },
        error: (err: any) => {
          if(err.status === 200){
            this.consultants = this.consultants.filter((consultant: any) => consultant.username !== consultant_name);
          } else {
            if(err.status !== 200)
            console.log(err);
          }
        }
      })
    } else {
      this.selectedForDeletion = index;
    }
  }
}
