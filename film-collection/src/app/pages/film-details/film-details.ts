import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { films, Film } from '../../data/films';

@Component({
  selector: 'app-film-details',
  imports: [RouterLink],
  templateUrl: './film-details.html',
  styleUrl: './film-details.scss'
})
export class FilmDetails {
  film?: Film;

  constructor(private route: ActivatedRoute) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.film = films.find(film => film.id === id);
  }
}