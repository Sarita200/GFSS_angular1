import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Variable } from './variable/variable';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , Variable],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'project1';
}
