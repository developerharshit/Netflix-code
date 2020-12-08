import movies from '../../apis/tmdb'

export const FETCH_TRENDING = 'FETCH_TRENDING';
export const FETCH_NETFLIX_ORIGINALS = 'FETCH_NETFLIX_ORIGINALS';
export const FETCH_TOP_RATED = 'FETCH_TOP_RATED';
export const FETCH_ACTION_MOVIES = 'FETCH_ACTION_MOVIES';
export const FETCH_COMEDY_MOVIES = 'FETCH_COMEDY_MOVIES';
export const FETCH_HORROR_MOVIES = 'FETCH_HORROR_MOVIES';
export const FETCH_ROMANCE_MOVIES = 'FETCH_ROMANCE_MOVIES';
export const FETCH_DOCUMENTARIES = 'FETCH_DOCUMENTARIES';


export const fetchNetflixOriginals = () => async (dispatch) => {
    const response = await movies.get(
        `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_networks=213`
    );
    dispatch({ type: FETCH_NETFLIX_ORIGINALS, payload: response.data.results })
}

export const fetchTrendingNow = () => async (dispatch) => {
    const response = await movies.get(
        `/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    dispatch({ type: FETCH_TRENDING, payload: response.data.results })
}

export const fetchTopRated = () => async (dispatch) => {
    const response = await movies.get(
        `/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    dispatch({ type: FETCH_TOP_RATED, payload: response.data.results })
}

export const fetchActionMovies = () => async (dispatch) => {
    const response = await movies.get(
        `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=28`
    );
    dispatch({ type: FETCH_ACTION_MOVIES, payload: response.data.results })
}

export const fetchComedyMovies = () => async (dispatch) => {
    const response = await movies.get(
        `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=35`
    );
    dispatch({ type: FETCH_COMEDY_MOVIES, payload: response.data.results })
}

export const fetchHorrorMovies = () => async (dispatch) => {
    const response = await movies.get(
        `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=27`
    );
    dispatch({ type: FETCH_HORROR_MOVIES, payload: response.data.results })
}

export const fetchRomanceMovies = () => async (dispatch) => {
    const response = await movies.get(
        `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10749`
    );
    dispatch({ type: FETCH_ROMANCE_MOVIES, payload: response.data.results })
}

export const fetchDocumentries = () => async (dispatch) => {
    const response = await movies.get(
        `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=99`
    );
    dispatch({ type: FETCH_DOCUMENTARIES, payload: response.data.results })
}

export const fetchMainHeader = () => async (dispatch) => {

}

