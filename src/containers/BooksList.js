import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import { removeBook, changeFilter } from '../actions/index';

const BooksList = props => {
  const {
    books, filter, handleRemoveBook, handleFilterChange,
  } = props;
  let filteredBooks = books;
  if (filter !== 'All') {
    filteredBooks = books.filter(book => book.category === filter);
  }

  const bookComponents = filteredBooks.map(book => (
    <Book key={book.id} book={book} removeBook={handleRemoveBook} />
  ));

  return (
    <>
      <CategoryFilter
        handleChange={event => {
          handleFilterChange(event);
        }}
      />
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>{bookComponents}</tbody>
      </table>
    </>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  handleRemoveBook: book => {
    dispatch(removeBook(book));
  },
  handleFilterChange: event => {
    const { value } = event.target;
    dispatch(changeFilter(value));
  },
});

const ConnectedBooksList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BooksList);

export default ConnectedBooksList;
