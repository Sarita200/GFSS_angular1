import { Component } from '@angular/core';

@Component({
  selector: 'app-array-task',
  imports: [],
  templateUrl: './array-task.html',
  styleUrl: './array-task.css'
})
export class ArrayTask {
  // A.Create an array of Cities
  //   Print Length of City Array in console
  //   Print 3rd Element from array
  
  cityArray: string[] = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata"];

  constructor() {
    this.printCityDetails();
  }

  printCityDetails() {
    console.log("     ");
    console.log("*** ARRAY TASK ***");
    console.log("City Array Length:", this.cityArray.length);
    console.log("3rd Element in City Array:", this.cityArray[2]);
  }
}
