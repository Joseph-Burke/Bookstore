import React, { Component } from "react";
import { dispatch } from "redux";
import { connect } from "react-redux";
import Book from "./Book";

const BooksList = props => {
  const { books } = props;
  return (
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>

        {
          books.map(
            book => {
              return <Book book={book} />
            }
          )
        }

      </tbody>
    </table>
  );
};

const mapStateToProps = state => {
  return {
    books: state.books
  };
};

const ConnectedBooksList = connect(
  mapStateToProps
  )(BooksList);

export default ConnectedBooksList;
