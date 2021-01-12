import React from 'react';
import PropTypes from 'prop-types';

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

const CategoryFilter = props => {
  const { handleChange } = props;
  const optionElements = OPTIONS.map(({ name, id }) => (
    <option key={id}>{name}</option>
  ));
  return <select onChange={handleChange.bind(this)}>{[
    <option selected disabled hidden>CATEGORIES</option>,
    ...optionElements
  ]}</select>;
};

CategoryFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
