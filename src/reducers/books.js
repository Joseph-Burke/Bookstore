import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

const booksReducer = (bookList = [], action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...bookList, action.book];
    case REMOVE_BOOK:
      return bookList.filter(book => book !== action.book)
    default:
      return bookList;
  }
};

export default booksReducer;
