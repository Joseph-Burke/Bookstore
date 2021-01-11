import React from "react";
import PropTypes from "prop-types";

const Book = props => {
  const { book, removeBook } = props;
  const { id, title, category } = book;
  return (
    <div className="book-card">
      <div className="left-side">
        <div className="book-details">
          <h6 className="category-sub-title">{category}</h6>
          <h6 className="title">{title}</h6>
          <ul className="options">
            <li>Comments</li>
            <li>
              <button type="button" onClick={removeBook.bind(this, book)}>
                Remove
              </button>
            </li>
            <li>Edit</li>
          </ul>
        </div>
        <div className="completion-display"></div>
      </div>
      <div className="right-side">
        <div className="chapter-details">
          <h6>Current Chapter</h6>
          <p>Chapter 17</p>
          <button>Update Progress</button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired
  }).isRequired,
  removeBook: PropTypes.func.isRequired
};

export default Book;
