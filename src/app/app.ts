import { Component, createComponent } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Variable } from './variable/variable';
import { CreateObject } from './create-object/create-object';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , Variable, CreateObject],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'project1';
}
