import { combineReducers } from 'redux';

import history from './showHistory';
import currentExpression from './operationsReducers';

export default combineReducers({
  history,
  currentExpression
});
