import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Film } from '../../data/films';

@Component({
  selector: 'app-film-card',
  imports: [],
  templateUrl: './film-card.html',
  styleUrl: './film-card.scss'
})
export class FilmCard {
  @Input() film!: Film;

  @Output() favoriteToggled = new EventEmitter<number>();

  toggleFavorite() {
    this.favoriteToggled.emit(this.film.id);
  }
}