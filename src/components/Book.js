import React from 'react';
import PropTypes from 'prop-types';

const Book = props => {
  const { book, removeBook } = props;
  const { title, category, author } = book;
  const authorDisplay = Object.prototype.hasOwnProperty.call(book, 'author') ? (
    <h6 className="author">{author}</h6>
  ) : null;

  return (
    <div className="book-card">
      <div className="left-side">
        <div className="book-details">
          <h6 className="category-sub-title">{category}</h6>
          <h6 className="title">{title}</h6>
          {authorDisplay}
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
        <div className="completion-display">
          <div className="circle" />
          <div>
            <p className="percentage">0%</p>
            <p className="completed">Completed</p>
          </div>
        </div>
      </div>
      <div className="right-side">
        <div className="chapter-details">
          <h6 className="chapter-title">CURRENT CHAPTER</h6>
          <p className="chapter-text">Chapter 1</p>
          <button type="button" className="progress-button">Update Progress</button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    author: PropTypes.string,
  }).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
