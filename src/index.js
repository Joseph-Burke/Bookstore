import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import combinedReducer from './reducers/index';

const generateRandomID = () => Math.floor(Math.random() * 10000);

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
