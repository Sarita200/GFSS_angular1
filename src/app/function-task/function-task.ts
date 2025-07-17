import { Component } from '@angular/core';

@Component({
  selector: 'app-function-task',
  imports: [],
  templateUrl: './function-task.html',
  styleUrl: './function-task.css'
})
export class FunctionTask {
  // A.Create a simple function with name firstFunction().
  //   and stored the value in console ('This is my first function')
  //   and call the function firstFunction().

  firstFunction(){
    console.log("     ");
    console.log("*** FUNCTION TASK ***");
    console.log("This is my first Function");
  }
  constructor(){
    this.firstFunction();
    this.square();
  }
  // B.Create a function with name square().
  //   The function square() takes one parameter and parameter name is num.
  //   Return the parameter (num) multiplied by itself. Example like (num * num)
  //   and call the function square() and store the result in console.

  square(num :number =20){
    var number = num * num;
    console.log("Number multiple by itself :", number);
  }
}