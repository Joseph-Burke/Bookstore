import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { changeFilter } from '../actions/index';

const OPTIONS = [
  { name: 'All', id: 1 },
  { name: 'Action', id: 2 },
  { name: 'Biography', id: 3 },
  { name: 'History', id: 4 },
  { name: 'Horror', id: 5 },
  { name: 'Kids', id: 6 },
  { name: 'Learning', id: 7 },
  { name: 'Sci-Fi', id: 8 },
];

class CategoryFilter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { props } = this;
    const { handleChange } = props;
    const optionElements = OPTIONS.map(({ name, id }) => <option key={id}>{name}</option>);
    return (
      <select onChange={handleChange.bind(this)}>
        {optionElements}
      </select>
    );
  }
}

CategoryFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
