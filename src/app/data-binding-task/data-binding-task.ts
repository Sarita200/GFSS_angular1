import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding-task',
  imports: [FormsModule],
  templateUrl: './data-binding-task.html',
  styleUrl: './data-binding-task.css'
})
export class DataBindingTask {
  /*A. INTERPOLATION TASK
     Create an Angular component named UserProfile.
     Define properties for name and age in the component's TypeScript file.
     Use property binding in the component's template to display the name and age*/

     name :string = 'Aditya Birla';
     age :number =25;


  /*B. PROPERTY BINDING TASK
     Create an Angular component called ImageComponent.
     Inside the component, define a property called imageUrl with the value of a placeholder image URL.
     Use property binding to dynamically bind the imageUrl to the source of an  element in the template*/

     imgUrl :string = "https://th.bing.com/th/id/OIP.sWZ1P6zeZ4-Wwfps4qRJBAHaEJ?w=289&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
     imgMessage :string = "This is a placeholder image";

  /* C. EVENT BINDING
     Create a new Angular component named ClickButton.
     Add a button to the component's template.
     Use event binding to trigger an alert message when the button is clicked.*/


  showAlert() {
    alert("Button is Clicked..!!");
  }

  /* A.Create a new Angular component named TwoWayBinding.
       Add a text input field to the component's template.
       Use two-way data binding to update the userInput property as the user types.*/

       inputText :string = '';
}
