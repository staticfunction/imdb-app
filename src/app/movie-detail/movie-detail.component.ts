import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.model';
import { Movie } from '../movie.model'
import { ActivatedRoute } from '@angular/router';
import { SelectAction } from '../movie.actions';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  movie: Movie;

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute
  ) { 
    store.select('movies').subscribe(data => {
      this.movie = data.selected;
    })
  }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.store.dispatch(new SelectAction(id));
  }

}
