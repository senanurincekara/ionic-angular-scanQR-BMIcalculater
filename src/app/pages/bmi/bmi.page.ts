import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.page.html',
  styleUrls: ['./bmi.page.scss'],
})
export class BmiPage implements OnInit {

  userData: string | null = ''; 
  bmiCategory: string | null = ''; 
  bmiMessage: string | null = '';
  
  userWeight: number | null = null;
  userHeight: number | null = null;
  userName: string |null=null;
  userSurname: string |null=null;
  constructor() { }

  ngOnInit() {
    this.userData = localStorage.getItem('loginUserData');
    console.log("User data:", this.userData);
    this.splitData();
  }

  splitData() {
    if (this.userData) {
      const newUserData = this.userData.split(" ", 4); 
      console.log("Split data:", newUserData);
      this.bmiCalculator(newUserData);
    } else {
      console.log("errprd.");
    }
  }

  bmiCalculator(newUserData: string[]) {
    this.userWeight = Number(newUserData[2]);
    this.userHeight = Number(newUserData[3]);
    this.userName =newUserData[0]
    this.userSurname = newUserData[1]
    console.log("Weight:", this.userWeight);
    console.log("Height:", this.userHeight);

    let heightInMeters = this.userHeight / 100.0;
    console.log("Height :", heightInMeters);

    let bmiResult = this.userWeight / (heightInMeters * heightInMeters);
    console.log("BMI Result:", bmiResult);

    localStorage.setItem('userBMI', String(bmiResult));

    if (bmiResult < 18.5) {
      this.bmiCategory = 'Underweight';
      this.bmiMessage = 'You are underweight. Consider consulting a healthcare provider for advice on healthy weight gain.';
    } else if (bmiResult >= 18.5 && bmiResult < 24.9) {
      this.bmiCategory = 'Normal weight';
      this.bmiMessage = 'You have a normal weight. Keep up your healthy diet and regular exercise!';
    } else if (bmiResult >= 24.9 && bmiResult < 29.9) {
      this.bmiCategory = 'Overweight';
      this.bmiMessage = 'You are overweight. Consider improving your diet and exercise routine.';
    } else {
      this.bmiCategory = 'Obesity';
      this.bmiMessage = 'You are classified as obese. Please consult with a healthcare professional.';
    }
  }
}
