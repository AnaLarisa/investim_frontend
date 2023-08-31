import {Component, ElementRef, Input} from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {

  @Input() meeting_dict!: any;

  public chart: any;

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    this.createChart();
  }

  createChart(){
    const keys = this.meeting_dict.map((d: any) => Object.keys(d)[0]);
    const values = this.meeting_dict.map((d: any) => Object.values(d)[0]);
    let htmlRef = this.elementRef.nativeElement.querySelector(`#MyChart`);
    this.chart = new Chart(htmlRef, {
      type: 'pie', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: keys,
        datasets: [{
          label: 'My First Dataset',
          data: values,
          backgroundColor: [
            'red',
            'pink',
            'green',
            'yellow',
            'orange',
            'blue',
          ].slice(0, this.meeting_dict.length),
          hoverOffset: 4
        }],
      },
      options: {
        aspectRatio:2.5
      }

    });
  }
}
