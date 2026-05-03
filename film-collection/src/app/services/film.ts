import { Injectable, computed, signal } from '@angular/core';
import { Film, films as initialFilms } from '../data/films';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private filmsSignal = signal<Film[]>(initialFilms);

  films = this.filmsSignal.asReadonly();

  favorites = computed(() =>
    this.filmsSignal().filter(film => film.favorite)
  );

  getFilmById(id: number): Film | undefined {
    return this.filmsSignal().find(film => film.id === id);
  }

  toggleFavorite(id: number): void {
    this.filmsSignal.update(films =>
      films.map(film =>
        film.id === id
          ? { ...film, favorite: !film.favorite }
          : film
      )
    );
  }

  searchFilms(search: string): Film[] {
    return this.filmsSignal().filter(film =>
      film.title.toLowerCase().includes(search.toLowerCase())
    );
  }
}