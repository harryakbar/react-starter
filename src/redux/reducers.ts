import { combineReducers } from 'redux';

function auth(state = {}, action: { type: any; }) {
  switch (action.type) {
  case 'SET_AUTH':
    return ;
  default:
    return state;
  }
  return state;
}

const rootReducer = combineReducers({
  auth,
});

export default rootReducer;
