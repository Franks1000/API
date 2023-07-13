import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { AboutAPIComponent } from './about-api/about-api.component';
import { MovieDatabaseAlternativeComponent } from './movie-database-alternative/movie-database-alternative.component';
import { MovieCardComponent } from './movie-database-alternative/movie-card/movie-card.component';
import { MovieComponent } from './movie-database-alternative/movie/movie.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    AboutAPIComponent,
    MovieDatabaseAlternativeComponent,
    MovieCardComponent,
    MovieComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
