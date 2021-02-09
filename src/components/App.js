import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

const App = () => (
  <>
    <BooksList />
    <BooksForm className="books-form" />
  </>
);

export default App;
