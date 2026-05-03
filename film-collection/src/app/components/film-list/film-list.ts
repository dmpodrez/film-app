import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Film } from '../../data/films';
import { FilmCard } from '../film-card/film-card';

@Component({
  selector: 'app-film-list',
  imports: [FilmCard],
  templateUrl: './film-list.html',
  styleUrl: './film-list.scss'
})
export class FilmList {
  @Input() films: Film[] = [];

  @Output() favoriteToggled = new EventEmitter<number>();

  onFavoriteToggled(id: number) {
    this.favoriteToggled.emit(id);
  }
}