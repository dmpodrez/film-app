import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { films } from './data/films';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
})
export class App {
  films = films;
}