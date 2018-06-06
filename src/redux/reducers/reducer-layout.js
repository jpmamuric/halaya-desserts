import * as types from '../actions/types';

const initialState = {
  sidebar: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_SIDEBAR:
      return {
        sidebar: action.payload
      };
    default:
      return state;
  }
};
