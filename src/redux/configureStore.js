import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// data
import { formValues } from './formValues';
import { data } from './data';


export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      formValues,
      data,
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};