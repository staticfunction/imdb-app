import { Action } from '@ngrx/store';
import { Movie, GenreType } from './movie.model';

export const SEARCH = 'SEARCH';
export const FILTER_BY_GENRE = 'FILTER_BY_GENRE';
export const SELECT = 'SELECT';

export class SearchAction implements Action {
    readonly type = SEARCH;
    constructor(public payload: string) {}
}

export class FilterByGenreAction implements Action {
    readonly type = FILTER_BY_GENRE;
    payload: GenreType;
    constructor(genre: string) {

        switch(genre) {
            case GenreType.Action:
                this.payload = GenreType.Action;
                break;
            case GenreType.Adventure:
                this.payload = GenreType.Adventure;
                break;
            case GenreType.Biography:
                this.payload = GenreType.Biography;
                break;
            case GenreType.Comedy:
                this.payload = GenreType.Comedy;
                break;
            case GenreType.Crime:
                this.payload = GenreType.Crime;
                break;
            case GenreType.Drama:
                this.payload = GenreType.Drama;
                break;
            case GenreType.History:
                this.payload = GenreType.History;
                break;
            case GenreType.Mystery:
                this.payload = GenreType.Mystery;
                break;
            case GenreType.Scifi:
                this.payload = GenreType.Scifi;
                break;
            case GenreType.Sport:
                this.payload = GenreType.Sport;
                break;
            case GenreType.Thriller:
                this.payload = GenreType.Thriller;
                break;
            }
        }
}

export class SelectAction implements Action {
    readonly type = SELECT;
    constructor(public payload: number) {}
}