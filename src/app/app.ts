import { Component, createComponent } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Variable } from './variable/variable';
import { CreateObject } from './create-object/create-object';
import { NgFor15Jully } from './ng-for15-jully/ng-for15-jully';
import { ArrayTask } from './array-task/array-task';
import { FunctionTask } from './function-task/function-task';
import { DataBindingTask } from './data-binding-task/data-binding-task';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Variable, CreateObject ,NgFor15Jully,ArrayTask,FunctionTask,DataBindingTask],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'project1';
}
