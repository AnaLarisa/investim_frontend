import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProgressComponent} from "./progress.component";
import {PieChartComponent} from "./pie-chart/pie-chart.component";
import {NgCircleProgressModule} from "ng-circle-progress";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {FormsModule} from "@angular/forms";
import { ChangeTargetComponent } from './change-target/change-target.component';
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";



@NgModule({
  declarations: [ProgressComponent, PieChartComponent, ChangeTargetComponent],
  exports: [
    ProgressComponent
  ],
  imports: [
    CommonModule,
    NgCircleProgressModule.forRoot({
      "radius": 60,
      "space": -10,
      "outerStrokeGradient": true,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#4882c2",
      "outerStrokeGradientStopColor": "#53a9ff",
      "innerStrokeColor": "#e7e8ea",
      "innerStrokeWidth": 10,
      "title": "UI",
      "subtitleFontSize": "22",
      "animateTitle": false,
      "animationDuration": 1100,
      "showTitle": false,
      "showUnits": false,
      "showBackground": false,
      "lazy": true
    }),
    MatListModule,
    MatIconModule,
    MatProgressBarModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class ProgressModule {
}
