import rootReducer from '/reducers';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import persistedState from '/reducers/persistedState';

export default function configureStore() {
  return createStore(
    rootReducer,
    persistedState,
    applyMiddleware(reduxThunk),
  );
}
