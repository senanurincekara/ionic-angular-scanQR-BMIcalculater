import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
  standalone: true,
  imports:[NgxChartsModule]
})
export class GraphComponent  implements OnInit {

  userBMI : string | null = ''; 


  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'BMI';
  showYAxisLabel = true;
  yAxisLabel = 'RESULTS';

  colorScheme:any = {
    domain: ['#E8EE3D', '#86C2E4', '#24AC29', '#444644','#CB2129']
  };

  view: [number, number] = [350, 300];


  graphData = [
    {
      name: 'Underweight',
      value: 18.5
    },
    {
      name: 'Normal weight',
      value: 24.9
    },
    {
      name: 'Overweight',
      value: 29.9
    },
    {
      name: 'Obesity',
      value: 30.0
    },
    {

        name: 'User BMI',
        value: 0
     }

  ];





  constructor() { }

  ngOnInit() {

    
  
      this.userBMI = localStorage.getItem('userBMI');
      if (this.userBMI) {
        this.updateUserBmi(Number(this.userBMI));
      }
    
    

  }


  updateUserBmi(value: number) {
    const userBmiData = this.graphData.find(data => data.name === 'User BMI');
    if (userBmiData) {
      userBmiData.value = Number(this.userBMI); 
      console.log("bmi-->",this.userBMI);
    }
  }

  onSelect(event: any) {
    console.log('Item clicked', event);
  }

}
