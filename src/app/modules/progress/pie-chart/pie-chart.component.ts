import {Component, ElementRef} from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {
  public chart: any;

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    this.createChart();
  }

  meeting_dict = [
    {
      type:"Type 1",
      number: 50
    },
    {
      type:"Type 2",
      number: 30
    },
    {
      type:"Type 3",
      number: 10
    },
    {
      type:"Type 4",
      number: 70
    },
  ]

  createChart(){
    let htmlRef = this.elementRef.nativeElement.querySelector(`#MyChart`);
    this.chart = new Chart(htmlRef, {
      type: 'pie', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: this.meeting_dict.map(d => d.type),
        datasets: [{
          label: 'My First Dataset',
          data: this.meeting_dict.map(d => d.number),
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
