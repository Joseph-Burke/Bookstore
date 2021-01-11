import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import combinedReducer from './reducers/index';
import generateRandomID from './helpers/generateRandomID';

const initialState = {
  books: [
    {
      id: generateRandomID(),
      title: 'The Hunger Games',
      category: 'Action',
      author: 'Suzanne Collins',
    },
    {
      id: generateRandomID(),
      title: 'Dune',
      category: 'Science Fiction',
      author: 'Frank Herbert',
    },
    {
      id: generateRandomID(),
      title: 'Capital in the Twenty-First Century',
      category: 'Economy',
      author: 'Suzanne Collins',
    },
  ],
};

const store = createStore(combinedReducer, initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
