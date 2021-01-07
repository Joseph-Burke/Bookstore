import React from 'react';
import ConnectedBooksList from '../components/BooksList';
import BooksForm from '../components/BooksForm';

const App = () => (
  <div>
    <ConnectedBooksList />
    <BooksForm />
  </div>
);

export default App;
