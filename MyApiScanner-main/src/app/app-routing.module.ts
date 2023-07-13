import { inject, NgModule } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterModule,
  RouterStateSnapshot,
  Routes,
} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AboutAPIComponent } from './about-api/about-api.component';
import { MovieDatabaseAlternativeComponent } from './movie-database-alternative/movie-database-alternative.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MovieComponent } from './movie-database-alternative/movie/movie.component';

const routes: Routes = [
  { path: '', redirectTo: 'acceuil', pathMatch: 'full' },
  { path: 'acceuil', component: HomeComponent },
  { path: 'Apropos', component: AboutComponent },
  { path: 'aboutAPI', component: AboutAPIComponent },
  {
    path: 'movie-database-alternative',
    component: MovieDatabaseAlternativeComponent,
  },

  {
    path: 'movie/:imdbID',
    component: MovieComponent,
    resolve: {
      movie: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        let id = String(route.paramMap.get('imdbID'));
        console.log(id);

        return inject(MovieDatabaseAlternativeComponent).getFilmById(id);
      },
    },
  },

  // TODO Create a routing here to display a "Page not found" message. The route should match any path
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
