export const [CREATE_BOOK, REMOVE_BOOK, CHANGE_FILTER] = ['CREATE_BOOK', 'REMOVE_BOOK', 'CHANGE_FILTER'];

export const changeFilter = filter => ({
  type: CHANGE_FILTER,
  filter,
});

export const createBook = book => ({
  type: CREATE_BOOK,
  book,
});

export const removeBook = book => ({
  type: REMOVE_BOOK,
  book,
});
