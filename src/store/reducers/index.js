import { combineReducers } from 'redux';
import TrendingReducer from './reducerTrending';
import NetflixOriginalsReducer from './reducerNetflixOriginals';
import TopRatedReducer from './reducerTopRated';
import ActionMoviesReducer from './reducerActionMovies';
import ComedyMoviesReducer from './reducerComedyMovies';
import HorrorMoviesReducer from './reducerHorrorMovies';
import RomanceMoviesReducer from './reducerRomanceMovies';
import DocumentaryReducer from './reducerDocumentary';

export default combineReducers({
    netflixOriginals: NetflixOriginalsReducer,
    trending: TrendingReducer,
    topRated: TopRatedReducer,
    action: ActionMoviesReducer,
    comedy: ComedyMoviesReducer,
    horror: HorrorMoviesReducer,
    romance: RomanceMoviesReducer,
    documentary: DocumentaryReducer,
});
