import {Component, ElementRef, Input} from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {

  @Input() meeting_dict!: any;

  public chart: any = null;
  keys: any = [];
  values: any = [];
  constructor(private elementRef: ElementRef) {
  }

  ngOnChanges(): void {
    if(this.chart) this.chart.destroy()
    this.createChart();
  }

  createChart(){
    this.keys = [];
    this.values = [];
    for(let i = 0; i < this.meeting_dict.length; i++){
      const meeting = this.meeting_dict[i];
      if(Object.values(meeting)[0] !== 0){
        this.keys.push(Object.keys(meeting)[0]);
        this.values.push(Object.values(meeting)[0]);
      }
    }
    let htmlRef = this.elementRef.nativeElement.querySelector(`#MyChart`);
    this.chart = new Chart(htmlRef, {
      type: 'pie', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: this.keys,
        datasets: [{
          label: 'My First Dataset',
          data: this.values,
          backgroundColor: [
            'red',
            'pink',
            'green',
            'yellow',
            'orange',
            'blue',
          ].slice(0, this.keys.length),
          hoverOffset: 4
        }],
      },
      options: {
        aspectRatio:2.5
      }

    });
  }
}
