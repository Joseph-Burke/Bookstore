import React, { Component } from "react";
import { createBook } from "../actions/index";
import { connect } from "react-redux";
import generateRandomID from '../helpers/generateRandomID';

const CATEGORIES = [
  { name: "Action", id: 1 },
  { name: "Biography", id: 2 },
  { name: "History", id: 3 },
  { name: "Horror", id: 4 },
  { name: "Kids", id: 5 },
  { name: "Learning", id: 6 },
  { name: "Sci-Fi", id: 7 }
];

class BooksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      category: 'Action',
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput( event ) {
    const { target } = event;
    const { id } = target;
    this.setState({
      title: (id === 'title' ? target.value : this.state.title ),
      category: (id === 'category' ? target.value : this.state.category )
    });
  };

  handleSubmit() {
    const { addNewBook } = this.props;
    const { title, category } = this.state;
    addNewBook({
      id: generateRandomID(),
      title: title,
      category: category
    });
    this.setState({title: "", category: 'Action'});
  };

  render() {
    return (
      <form>
        <label htmlFor="title">
          Book Title:
          <input
            id="title"
            name="title"
            onChange={this.handleInput.bind(this)}
            value={this.state.title}
          />
        </label>

        <select 
          id="category"
          onChange={this.handleInput.bind(this)}
          value={this.state.category}
          >
          {CATEGORIES.map(category => {
            const { name, id } = category;
            return <option key={id}>{name}</option>;
          })}
          ;
        </select>

        <button type="button" onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addNewBook: book => {
      dispatch(createBook(book));
    },
  }
};

const ConnectedBooksForm = connect(
  null,
  mapDispatchToProps  
)(BooksForm);

export default ConnectedBooksForm;