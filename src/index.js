import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import combinedReducer from "./reducers/index";

const initialState = {
  books: [
    {
      id: 1,
      title: "Long Walk to Freedom",
      category: "Biography"
    },
    {
      id: 2,
      title: "Harry Potter and the Chamber of Secrets",
      category: "Kids"
    },
    {
      id: 3,
      title: "The Shining",
      category: "Horror"
    }
  ]
};

const store = createStore(combinedReducer, initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
