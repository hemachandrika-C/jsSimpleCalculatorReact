import { ADD_HISTORY_ITEM } from '../actions/showHistory';

const DEFAULT_STATE = [];

export default (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case ADD_HISTORY_ITEM: {
      return [...state, action.payload];
    }
    default:
      return state;
  }
}