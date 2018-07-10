import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Movie, GenreType } from '../movie.model';
import { SelectAction, SearchAction, FilterByGenreAction } from '../movie.actions';
import { ActivatedRoute } from '@angular/router';
import { GenericBrowserDomAdapter } from '@angular/platform-browser/src/browser/generic_browser_adapter';

interface AppState {
  movies: {movies: Movie[], selected: Movie};
  selected: Movie;
}

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies$: Observable<{movies: Movie[], selected: Movie}>
  movies: Movie[] = [];
  
  constructor(
    private store: Store<AppState>, 
    private route: ActivatedRoute
  ) { 
    this.movies$ = store.select('movies');
  }

  selectMovie(movie: Movie) {
    this.store.dispatch(new SelectAction(movie.id));
  }

  ngOnInit() {
    const q = this.route.snapshot.queryParamMap.get('q');
    
    if(q) {
      this.store.dispatch(new SearchAction(q));
      return;
    }

    const genre = this.route.snapshot.queryParamMap.get('genre');
    this.store.dispatch(new FilterByGenreAction(genre));
  }

}
