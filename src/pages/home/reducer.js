import { combineReducers } from 'redux';

let counter = (defaultState = {}, action) => {
  switch (action.type) {
    case 'TEST':
      defaultState.test = action.data.inputValue;
      break;
  }
  return defaultState;
}
let reducer = combineReducers({ counter });

export default reducer;