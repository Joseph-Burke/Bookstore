import React, { Component } from 'react';
import ConnectedBooksList from '../components/BooksList';
import BooksForm from '../components/BooksForm';

const App = () => {
  return (
    <div>
      <ConnectedBooksList />
      <BooksForm />
    </div>
  )
};

export default App;
