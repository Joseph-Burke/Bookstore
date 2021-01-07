import { combineReducers } from 'redux';
import booksReducer from "./books";

const combinedReducer = combineReducers({
  books: booksReducer
});

export default combinedReducer;