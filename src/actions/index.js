const [CREATE_BOOK, REMOVE_BOOK] = ['CREATE_BOOK', 'REMOVE_BOOK'];

const createBook = book => {
  return {
    type: CREATE_BOOK,
    book
  }
};

const removeBook = book => {
  return {
    type: REMOVE_BOOK,
    book
  }
};

export { CREATE_BOOK, REMOVE_BOOK, createBook, removeBook };