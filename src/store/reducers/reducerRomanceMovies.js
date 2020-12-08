import { FETCH_ROMANCE_MOVIES } from '../actions/index';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_ROMANCE_MOVIES:
      const data = {
        title: 'Romanace Movies',
        movies: action.payload
      }
      return { ...state, data };
    default:
      return state;
  }
}
