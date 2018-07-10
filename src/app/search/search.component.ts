import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { GenreType } from '../movie.model';
import { AppState } from '../app.model';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  myControl = new FormControl();

  search: string;
  genres: GenreType[] = [];

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) { 
    this.store.select('movies').subscribe(data => {
      this.genres = data.genres;
    })
  }

  onSubmit() {
    this.router.navigate(['/movies'], {queryParams: {q: this.search}})
  }

  ngOnInit() {
  }

}
