import { FETCH_NETFLIX_ORIGINALS } from '../actions/index';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_NETFLIX_ORIGINALS:
      const data = {
        title: 'Netflix Originals',
        movies: action.payload
      }
      return { ...state, data };
    default:
      return state;
  }
}
