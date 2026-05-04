import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilmList } from '../../components/film-list/film-list';
import { FilmService } from '../../services/film';
import { Autofocus } from '../../directives/autofocus';

@Component({
  selector: 'app-home',
  imports: [FormsModule, FilmList, Autofocus],
  templateUrl: './home.html'
})
export class Home {
  search = '';

  constructor(private filmService: FilmService) {}

  get filteredFilms() {
    return this.filmService.searchFilms(this.search);
  }

  toggleFavorite(id: number) {
    this.filmService.toggleFavorite(id);
  }
}