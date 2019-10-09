import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import * as CanvasJS from '../../assets/js/CanvasJS.min.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
    let chart = new CanvasJS.Chart("chartContainer", {
      theme: "light2",
      animationEnabled: true,
      
      data: [{
        type: "pie",
        showInLegend: true,
        toolTipContent: "<b>{name}</b>: {y} (#percent%)",
        indexLabel: "{name} - #percent%",
        dataPoints: [
          { y: 70, name: "Remaining" },
          { y: 30, name: "Used" }
          
        ]
      }]
    });
      
    chart.render();
  }

}
