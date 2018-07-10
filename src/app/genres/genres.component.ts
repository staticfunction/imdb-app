import { Component, OnInit, Input } from '@angular/core';
import { GenreType } from '../movie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {

  @Input()
  genres: GenreType[];

  constructor(
    private router: Router) {}

  ngOnInit() {
  }

  onSelect(genre) {
    this.router.navigate(['/movies'], {queryParams: {genre: genre}})
  }

}
