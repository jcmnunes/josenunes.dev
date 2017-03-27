import rootReducer from '/reducers';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import persistedState from '/reducers/persistedState';

/**
 * Development Redux store
 */
export default function configureStore() {
  return createStore(
    rootReducer,
    persistedState,
    composeWithDevTools(applyMiddleware(reduxThunk)),
  );
}
