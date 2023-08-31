import {Component, ElementRef} from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {
  public chart: any;
  meeting_dict = [
    {
      type:"Type 111111111111",
      number: 50
    },
    {
      type:"Type 111111111111",
      number: 30
    },
    {
      type:"Type 111111111111",
      number: 10
    },
    {
      type:"Type 111111111111",
      number: 70
    },
    {
      type:"Type 111111111111",
      number: 50
    },
    {
      type:"Type 111111111111",
      number: 30
    },
    {
      type:"Type 111111111111",
      number: 10
    },
    {
      type:"Type 111111111111",
      number: 70
    },
  ]

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    this.createChart();
  }

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
