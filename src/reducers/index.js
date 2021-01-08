import { combineReducers } from 'redux';
import booksReducer from './books';
import filterReducer from './filter';

const combinedReducer = combineReducers({
  books: booksReducer,
  filter: filterReducer
});

export default combinedReducer;
