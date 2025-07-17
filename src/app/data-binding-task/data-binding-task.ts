import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding-task',
  imports: [],
  templateUrl: './data-binding-task.html',
  styleUrl: './data-binding-task.css'
})
export class DataBindingTask {
  // A. INTERPOLATION TASK
  //    Create an Angular component named UserProfile.
  //    Define properties for name and age in the component's TypeScript file.
  //    Use property binding in the component's template to display the name and age
  userName :string ="Natasha";
  age :number = 10;


  // B. PROPERTY BINDING TASK
  //    Create an Angular component called ImageComponent.
  //    Inside the component, define a property called imageUrl with the value of a placeholder image URL.
  //    Use property binding to dynamically bind the imageUrl to the source of an  element in the template

  // C. EVENT BINDING
  //    Create a new Angular component named ClickButton.
  //    Add a button to the component's template.
  //    Use event binding to trigger an alert message when the button is clicked.
}
