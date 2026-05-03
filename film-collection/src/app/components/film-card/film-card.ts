import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Film } from '../../data/films';

@Component({
  selector: 'app-film-card',
  imports: [RouterLink],
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