import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { films } from './data/films';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { FilmList } from './components/film-list/film-list';

@Component({
  selector: 'app-root',
  imports: [FormsModule, Header, Footer, FilmList],
  templateUrl: './app.html'
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