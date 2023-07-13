import { Component } from '@angular/core';
// import { Movie } from '../movie-card/movie-card.component';
import { ActivatedRoute } from '@angular/router';

interface Movie {
  Title: '';
  Year: '';
  Rated: '';
  Released: '';
  Runtime: '';
  Genre: '';
  Director: '';
  Writer: '';
  Actors: '';
  Plot: '';
  Language: '';
  Country: '';
  Awards: '';
  Poster: '';
  Ratings: [
    {
      Source: '';
      Value: '';
    },
    {
      Source: '';
      Value: '';
    },
    {
      Source: '';
      Value: '';
    }
  ];
  Metascore: '';
  imdbRating: '';
  imdbVotes: '';
  imdbID: '';
  Type: '';
  DVD: '';
  BoxOffice: '';
  Production: '';
  Website: '';
  Response: '';
}

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent {
  movie!: Movie;
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(({ movie }) => {
      this.movie = movie;
    });
  }
}
