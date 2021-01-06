const [CREATE_BOOK, REMOVE_BOOK] = ['CREATE_BOOK', 'REMOVE_BOOK'];

const createBook = bookObj => {
  return {
    type: CREATE_BOOK,
    data: bookObj
  }
};

const removeBook = bookObj => {
  return {
    type: REMOVE_BOOK,
    data: bookObj
  }
};

export { CREATE_BOOK, REMOVE_BOOK, createBook, removeBook };