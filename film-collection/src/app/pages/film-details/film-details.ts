import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Film } from '../../data/films';
import { FilmService } from '../../services/film';

@Component({
  selector: 'app-film-details',
  imports: [RouterLink],
  templateUrl: './film-details.html'
})
export class FilmDetails {
  film?: Film;

  constructor(
    private route: ActivatedRoute,
    private filmService: FilmService
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.film = this.filmService.getFilmById(id);
  }
}