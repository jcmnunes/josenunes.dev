import * as types from '/actions/types';
import initialState from '/reducers/initialState';

const initial = initialState.global;

export default (state = initial, action) => {
  switch (action.type) {
    case types.TOGGLE_MENU:
      return { ...state, menuOpen: !state.menuOpen };
    default:
      return state;
  }
};
