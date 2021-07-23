import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// data
import { NAMES_MALE, UNISEX_NAMES, NAMES_FEMALE, LAST_NAMES } from '../shared/names';
import { HOROSCOPE } from '../shared/horoscopes';
import { POSITIVE_ADJECTIVE_LIST, NEGATIVE_ADJECTIVE_LIST} from '../shared/adjectives';
import { QUIRKY_FACT } from '../shared/quirky-fact';
import { PROFESSION } from '../shared/profession';
import { FAMOUS_FEMALES, FAMOUS_MALES, FAMOUS_UNISEX } from '../shared/famous';
import { changePage } from './changePage';

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      changePage: changePage
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};