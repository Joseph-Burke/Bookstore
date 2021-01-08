import { connect } from "react-redux";
import { changeFilter } from "../actions/index";
import React, { Component } from "react";

const OPTIONS = [
  { name: "All", id: 1 },
  { name: "Action", id: 2 },
  { name: "Biography", id: 3 },
  { name: "History", id: 4 },
  { name: "Horror", id: 5 },
  { name: "Kids", id: 6 },
  { name: "Learning", id: 7 },
  { name: "Sci-Fi", id: 8 }
];

class CategoryFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "All"
    };
  }

  handleChange(event) {
    const { value } = event.target;

    this.setState({ filter: value }, () => {
      const [changeFilter, filter] = [
        this.props.changeFilter,
        this.state.filter
      ];
      changeFilter(filter);
    });
  }

  render() {
    const optionElements = OPTIONS.map(({name, id}) => <option key={id}>{name}</option>);
    return (
      <select value={this.state.filter} onChange={this.handleChange.bind(this)}>
        {optionElements}
      </select>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeFilter: filter => {
      dispatch(changeFilter(filter));
    }
  };
};

export default connect(null, mapDispatchToProps)(CategoryFilter);
