import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook } from '../actions/index';

class Book extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { remove, book } = this.props;
    const { id, title, category } = book;
    return (
      <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>{category}</td>
        <td>
          <button onClick={remove.bind(book, this)}>Remove Book</button>
        </td>
      </tr>
    );
  };
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

const mapDispatchToProps = dispatch => {
  return {
    remove: (book, event) => {
      const bookObj = book.props.book;
      dispatch(removeBook(bookObj));
    }
  }
}

const connectedBook = connect(
  null,
  mapDispatchToProps
)(Book);

export default connectedBook;
