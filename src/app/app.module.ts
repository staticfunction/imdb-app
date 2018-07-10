import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { StoreModule } from '@ngrx/store';
import { moviesReducer } from './movie.reducer';
import { StarRatingModule } from 'angular-star-rating';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { 
  MatFormFieldModule, 
  MatInputModule,
  MatListModule,
  MatCardModule,
 } from '@angular/material'

import {MatChipsModule} from '@angular/material/chips';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { SearchComponent } from './search/search.component';
import { GenresComponent } from './genres/genres.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieDetailComponent,
    SearchComponent,
    GenresComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot({movies: moviesReducer}),
    StarRatingModule.forRoot(),
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
