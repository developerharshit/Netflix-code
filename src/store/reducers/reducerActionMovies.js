import { FETCH_ACTION_MOVIES } from '../actions/index';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_ACTION_MOVIES:
      const data = {
        title: 'Action Movies',
        movies: action.payload
      }
      return { ...state, data };
    default:
      return state;
  }
}
