import { CHANGE_FILTER } from '../actions/index';

const filterReducer = (filter = 'All', action) => {
  if (action.type === CHANGE_FILTER) {
    return action.filter;
  }
  return filter;
};

export default filterReducer;
