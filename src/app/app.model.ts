import { Movie, GenreType } from './movie.model'

export interface AppState {
    movies: {movies: Movie[], genres: GenreType[], selected: Movie}
}