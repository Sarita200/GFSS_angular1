import { Component, createComponent } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Variable } from './variable/variable';
import { CreateObject } from './create-object/create-object';
import { NgFor15Jully } from './ng-for15-jully/ng-for15-jully';

@Component({
  selector: 'app-root',
  imports: [Variable, CreateObject ,NgFor15Jully,],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'project1';
}
