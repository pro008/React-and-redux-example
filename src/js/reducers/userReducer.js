export default function reducer(state={
    books: [],
    fetching: false,
    fetched: false,
    error: null,

    book: {
      name: null,
      description: null,
      price: null,
    }
  }, action) {

    switch (action.type) {
      
      case "FETCH_BOOKS_PENDING": {
        return {...state, fetching: true}
      }
      case "FETCH_BOOKS_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_BOOKS_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          books: action.payload.data,
        }
      }

      case "FETCH_ADD_BOOK_PENDING": {
        return {...state, fetching: true}
      }
      case "FETCH_ADD_BOOK_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_ADD_BOOK_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
        }
      }

      case "FETCH_GET_BOOK": {
        return {...state, fetching: true}
      }
      case "FETCH_GET_BOOK_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_GET_BOOK_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          book: action.payload.data,
        }
      }

      case "FETCH_DELETE_BOOK": {
        return {...state, fetching: true}
      }
      case "FETCH_DELETE_BOOK_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_DELETE_BOOK_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
        }
      }
    }

    return state
}
