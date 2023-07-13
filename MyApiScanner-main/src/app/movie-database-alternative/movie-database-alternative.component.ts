import { Observable } from 'rxjs';
import { Component, Injectable, Input } from '@angular/core';
import axios from 'axios';
import { Subject } from 'rxjs';
import { Movie } from './movie-card/movie-card.component';
import Swal from 'sweetalert2';
import { environment } from 'src/environment/environment';

interface MovieFilters {
  // TODO add your filters variable here
  title: string;
}

@Component({
  selector: 'app-movie-database-alternative',
  templateUrl: './movie-database-alternative.component.html',
  styleUrls: ['./movie-database-alternative.component.css'],
})
@Injectable({
  providedIn: 'root',
})
export class MovieDatabaseAlternativeComponent {
  movieFilters: MovieFilters = {
    title: '',
  };

  movies$: Subject<Movie[]> = new Subject<Movie[]>();

  public async searchFilm() {
    const options = {
      method: 'GET',
      url: 'https://movie-database-alternative.p.rapidapi.com/',
      params: {
        s: this.movieFilters.title,
        r: 'json',
        page: '1',
      },
      headers: {
        'X-RapidAPI-Key': environment.apiKey,
        'X-RapidAPI-Host': environment.apiHost,
      },
    };

    try {
      const response = await axios.request(options);
      if (response.data.Response == 'True') {
        this.movies$.next(response.data.Search);
      } else {
        Swal.fire(
          'Oops...',
          'Film introuvable, veillez entrer un titre existant',
          'error'
        );
      }
    } catch (error) {
      console.error(error);
    }
  }

  public async getFilmById(imdbID: string) {
    const options = {
      method: 'GET',
      url: 'https://movie-database-alternative.p.rapidapi.com/',
      params: {
        r: 'json',
        i: imdbID,
      },
      headers: {
        'X-RapidAPI-Key': environment.apiKey,
        'X-RapidAPI-Host': environment.apiHost,
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}
