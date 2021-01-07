import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { createBook } from '../actions/index';
import generateRandomID from '../helpers/generateRandomID';

const CATEGORIES = [
  { name: 'Action', id: 1 },
  { name: 'Biography', id: 2 },
  { name: 'History', id: 3 },
  { name: 'Horror', id: 4 },
  { name: 'Kids', id: 5 },
  { name: 'Learning', id: 6 },
  { name: 'Sci-Fi', id: 7 },
];

class BooksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: 'Action',
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    const { target } = event;
    const { id } = target;
    this.setState(previousState => ({
      title: id === 'title' ? target.value : previousState.title,
      category: id === 'category' ? target.value : previousState.category,
    }));
  }

  handleSubmit() {
    const { addNewBook } = this.props;
    const { title, category } = this.state;
    addNewBook({
      id: generateRandomID(),
      title,
      category,
    });
    this.setState({ title: '', category: 'Action' });
  }

  render() {
    const { handleInput, state } = this;
    return (
      <form>
        <label htmlFor="title">
          Book Title:
          <input
            id="title"
            name="title"
            onChange={handleInput.bind(this)}
            value={state.title}
          />
        </label>

        <select
          id="category"
          onChange={handleInput.bind(this)}
          value={state.category}
        >
          {CATEGORIES.map(category => {
            const { name, id } = category;
            return <option key={id}>{name}</option>;
          })}
          ;
        </select>

        <button type="button" onClick={this.handleSubmit}>
          Submit
        </button>
      </form>
    );
  }
}

BooksForm.propTypes = {
  addNewBook: propTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  addNewBook: book => {
    dispatch(createBook(book));
  },
});

const ConnectedBooksForm = connect(null, mapDispatchToProps)(BooksForm);

export default ConnectedBooksForm;
