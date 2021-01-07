import React from 'react';
import ConnectedBooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

const App = () => (
  <div>
    <ConnectedBooksList />
    <BooksForm />
  </div>
);

export default App;
