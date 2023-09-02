import {Component, inject, Input} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddEventDialogComponent} from "../calendar-module/dialogs/add-event-dialog/add-event-dialog.component";
import {ChangeTargetComponent} from "./change-target/change-target.component";
import {RequestsService} from "../../services/requests.service";
import {GlobalVarsService} from "../../services/global-vars.service";

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {
  @Input() consultant_name!: string;
  @Input() isEditable!: boolean;


  constructor(
    private readonly _matDialog: MatDialog,
    private globalVarsService: GlobalVarsService,
    private requestsService: RequestsService,
  ) {}

  user_statistics: any = null;
  number_of_contracts = 9;
  number_of_clients = 12;
  percentage = this.number_of_contracts / this.number_of_clients * 100;
  target = 40;

  startDate = '';
  endDate = '';

  initValues = (data: any) => {
    this.number_of_contracts = data.contractsSigned;
    this.number_of_clients = data.clientsCount;
    this.percentage = this.number_of_clients ? this.number_of_contracts / this.number_of_clients * 100 : 0;
    this.target = data.targetNrOfClientsPerYear;
    this.startDate = data.startDate.slice(0, 10);
    this.endDate = data.endDate.slice(0, 10);
  }

  fetchStatistics = (startDate: string, endDate: string) => {
    // @ts-ignore
    if(this.globalVarsService.getUser().username === this.consultant_name){
      this.requestsService.getOwnStatistics(startDate, endDate).subscribe({
        next:(data: any) => {
          this.user_statistics = data;
          this.initValues(data);
        },
        error:(msg: any) => {
          console.log(msg);
        }
      });
    } else {
      this.requestsService.getConsultantStatistics(this.consultant_name, startDate, endDate).subscribe({
        next:(data: any) => {
          this.user_statistics = data;
          this.initValues(data);
        },
        error:(msg: any) => {
          console.log(msg);
        }
      });
    }
  }

  ngOnInit(): void {
    const today_date = new Date();
    const today = today_date.getFullYear() + '-' + (today_date.getMonth() + 1) + '-' + today_date.getDate();
    this.fetchStatistics(today, today);
  }

  readonly #matDialog = inject(MatDialog);

  handleChange(dateName: string, newDate: string){
    if(dateName === 'startDate') {
      if(newDate > this.endDate) {
        this.startDate = this.endDate;
      } else {
        this.startDate = newDate;
      }
    } else {
      if(newDate < this.startDate) {
        this.endDate = this.startDate;
      } else {
        this.endDate = newDate;
      }
    }
    this.fetchStatistics(this.startDate, this.endDate);
  }



  openDialog() {
    const dialog = this._matDialog.open(ChangeTargetComponent);
    dialog.afterClosed().subscribe((data) => {
      this.target = data;
      this.requestsService.setTarget(data).subscribe({
        next: (data: any) => {},
        error: (err: any) => {
          if(err.status !== 200) {
            console.log(err);
          }
        }
      })
    });
  }
}
