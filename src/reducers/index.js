import { combineReducers } from 'redux';
import { createBook, removeBook } from '../actions/index'

export default combineReducers(
  {
    add: createBook,
    remove: removeBook
  }
);