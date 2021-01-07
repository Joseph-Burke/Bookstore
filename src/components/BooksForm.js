import React, { Component } from "react";

const CATEGORIES = [
  { name: "Action", id: 1 },
  { name: "Biography", id: 2 },
  { name: "History", id: 3 },
  { name: "Horror", id: 4 },
  { name: "Kids", id: 5 },
  { name: "Learning", id: 6 },
  { name: "Sci-Fi", id: 7 }
];

export default class BooksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      category: '',
    };
  }

  handleInput(event) {
    const { target } = event;
    const { id } = target;
    this.setState({
      title: (id === 'title' ? target.value : this.state.title ),
      category: (id === 'category' ? target.value : this.state.category )
    });
  }

  render() {
    return (
      <form onChange={this.handleInput.bind(this)}>
        <label htmlFor="title">
          Book Title:
          <input
            id="title"
            name="title"
            placeholder="Tom Sawyer"
          />
        </label>

        <select id="category">
          {CATEGORIES.map(category => {
            const { name, id } = category;
            return <option key={id}>{name}</option>;
          })}
          ;
        </select>

        <button type="button">Submit</button>
      </form>
    );
  }
}
