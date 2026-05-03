import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { films } from '../../data/films';
import { FilmList } from '../../components/film-list/film-list';

@Component({
  selector: 'app-home',
  imports: [FormsModule, FilmList],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
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