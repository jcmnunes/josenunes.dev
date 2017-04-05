import * as types from './types';
import { sliderTime, heros } from '/jn.config';
import findIndex from '/utils';

let timer = null;

export const changeActiveHero = activeHero => ({
  type: types.CHANGE_ACTIVE_HERO,
  payload: activeHero,
});

export const startTimer = (activeHero = null, reverse = false) =>
(dispatch, getState) => {
  let newHero = activeHero;
  if (!activeHero) {
    const hero = getState().home.activeHero;
    const len = heros.length - 1;
    let index = findIndex(heros, 'stringKey', hero);
    if (reverse) {
      index = index === 0 ? len : index -= 1;
    } else {
      index = index === len ? 0 : index += 1;
    }
    newHero = heros[index].stringKey;
  }
  dispatch(changeActiveHero(newHero));
  clearInterval(timer);
  timer = setInterval(() => dispatch(startTimer()), sliderTime * 1000);
};

export const stopTimer = () => dispatch => {
  clearInterval(timer);
  dispatch(changeActiveHero('apps'));
};
