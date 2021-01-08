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
      title: 'Long Walk to Freedom',
      category: 'Biography',
    },
    {
      id: generateRandomID(),
      title: 'Harry Potter and the Chamber of Secrets',
      category: 'Kids',
    },
    {
      id: generateRandomID(),
      title: 'The Shining',
      category: 'Horror',
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
