import { Component, Input } from '@angular/core';

export interface Movie {
  imdbID: string;
  Title: string;
  Poster: string;
  Type: string;
  Year: string;
}

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent {
  @Input()
  movie!: Movie;
}
