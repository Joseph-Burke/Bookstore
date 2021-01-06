import React, { Component } from 'react';

const CATEGORIES = [
  "Action",
  "Biography",
  "History",
  "Horror",
  "Kids",
  "Learning",
  "Sci-Fi"
];

export default class BooksForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <label>
          Book Title:
          <input placeholder="Tom Sawyer"/>
        </label>

        <select>
          {
            CATEGORIES.map(category => {
              return <option>{category}</option>
            })
          }
        </select>

        <button type="submit">Submit</button>
      </form>
    )
  }
}