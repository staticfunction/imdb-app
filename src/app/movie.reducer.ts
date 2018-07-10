import { movies } from './movie.mock-data';
import { Movie, GenreType} from './movie.model';
import { SEARCH, SELECT, FILTER_BY_GENRE} from './movie.actions';
import * as Fuse from 'fuse.js';

const initialState = {
    movies, 
    genres: [
        GenreType.Action, 
        GenreType.Adventure, 
        GenreType.Biography, 
        GenreType.Comedy,
        GenreType.Crime,
        GenreType.Drama,
        GenreType.History,
        GenreType.Mystery,
        GenreType.Scifi,
        GenreType.Sport,
        GenreType.Thriller
    ],
    selected: undefined
}

var options = {
    keys: [{
      name: 'name',
      weight: 0.3
    }, {
      name: 'description',
      weight: 0.7
    }]
};

const fusedMovies = new Fuse(movies, options);

export function moviesReducer(state = initialState, action) {

    switch(action.type) {
        case SEARCH:
            if(action.payload == undefined || action.payload.length < 1)
                return Object.assign({}, state, {movies})

            return Object.assign({}, state, {
                movies: fusedMovies.search(action.payload)
            })

        case FILTER_BY_GENRE:
            if(!action.payload)
                return Object.assign({}, state, {movies});

            return Object.assign({}, state, {
                movies: movies.filter(movie => movie.genres.indexOf(action.payload) > -1)
            })
        
        case SELECT:
            let selected = movies.find(movie => movie.id === action.payload)
            return Object.assign({}, state, {selected});
                
    }

    return state;
}


