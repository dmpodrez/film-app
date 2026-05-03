import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { films } from './data/films';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
})
export class App {
  films = films;

  search = '';

  get filteredFilms() {
    return this.films.filter(film =>
      film.title.toLowerCase().includes(this.search.toLowerCase())
    );
  }

  toggleFavorite(id: number) {
    const film = this.films.find(film => film.id === id);

    if (film) {
      film.favorite = !film.favorite;
    }
  }
}