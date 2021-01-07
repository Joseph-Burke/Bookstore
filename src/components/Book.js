import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook } from '../actions/index';

const Book = props => {
  const { remove, book } = props;
  const { id, title, category } = book;
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td>
        <button
          type="button"
          onClick={() => {
            remove(book);
          }}
        >
          Remove Book
        </button>
      </td>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  remove: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  remove: book => {
    dispatch(removeBook(book));
  },
});

const connectedBook = connect(null, mapDispatchToProps)(Book);

export default connectedBook;
