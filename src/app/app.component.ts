import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Movie } from './movie.model';
import { SearchAction } from './movie.actions';
import { Observable } from 'rxjs';

interface AppState {
  movies: {movies: Movie[], selected: Movie};
  selected: Movie;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'IMDB';
  constructor(){}
}
