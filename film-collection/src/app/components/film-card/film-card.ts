import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Film } from '../../data/films';
import { DurationPipe } from '../../pipes/duration-pipe';

@Component({
  selector: 'app-film-card',
  imports: [RouterLink, DurationPipe],
  templateUrl: './film-card.html'
})
export class FilmCard {
  @Input() film!: Film;

  @Output() favoriteToggled = new EventEmitter<number>();

  toggleFavorite() {
    this.favoriteToggled.emit(this.film.id);
  }
}