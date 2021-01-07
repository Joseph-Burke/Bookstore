import React from 'react';

const CATEGORIES = [
  { name: 'Action', id: 1 },
  { name: 'Biography', id: 2 },
  { name: 'History', id: 3 },
  { name: 'Horror', id: 4 },
  { name: 'Kids', id: 5 },
  { name: 'Learning', id: 6 },
  { name: 'Sci-Fi', id: 7 },
];

const BooksForm = () => (
  <form>
    <label htmlFor="title">
      Book Title:
      <input name="title" placeholder="Tom Sawyer" />
    </label>

    <select>
      {CATEGORIES.map(category => {
        const { name, id } = category;
        return <option key={id}>{name}</option>;
      })}
      ;
    </select>

    <button type="submit">Submit</button>
  </form>
);

export default BooksForm;
