import * as types from '/actions/home/types';
import initialState from '/reducers/initialState';

const initial = initialState.home;

export default (state = initial, action) => {
  switch (action.type) {
    case types.CHANGE_ACTIVE_HERO:
      return { ...state, activeHero: action.payload };
    default:
      return state;
  }
};
