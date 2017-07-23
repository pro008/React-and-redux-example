import axios from "axios"

export function fetchBook(page, search){
  return function(dispatch){
    dispatch({
      type: "FETCH_BOOKS",
      payload: axios.get(`http://210.211.117.57/books`, {
        params: {
          page: page +1,
          search: search
        }
      })
    });
  }
}

export function fetchAdd(name, description, price) {
  return function(dispatch) {
    dispatch({
      type: "FETCH_BOOKS",
      payload:  axios.post(`http://210.211.117.57/books`,
      {name: name, description: description, price: price})
    });
  }
}

export function fetchGetID(id) {
  return function(dispatch) {
    dispatch({type: "FETCH_GET_BOOK"});
      axios.get(`http://210.211.117.57/books/`+ id)
      .then((response) => {
        if(response.status === 200)
        dispatch({type: "FETCH_GET_BOOK_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_GET_BOOK_REJECTED", payload: err})
      })
  }
}


export function fetchEdit(name, description, price) {
  return function(dispatch) {
    dispatch({type: "FETCH_ADD_BOOK"});
      axios.post(`http://210.211.117.57/books`,
      {name: name, description: description, price: price})
      .then((response) => {
        if(response.status === 200)
        dispatch({type: "FETCH_ADD_BOOK_FULFILLED", payload: response.status})
      })
      .catch((err) => {
        dispatch({type: "FETCH_ADD_BOOK_REJECTED", payload: err})
      })
  }
}

export function fetchDelete(id) {
  return function(dispatch) {
    dispatch({type: "FETCH_DELETE_BOOK"});
      axios.delete(`http://210.211.117.57/books/`+id)
      .then((response) => {
        if(response.status === 200)
        dispatch({type: "FETCH_DELETE_BOOK_FULFILLED"})
      })
      .catch((err) => {
        dispatch({type: "FETCH_DELETE_BOOK_REJECTED", payload: err})
      })
  }
}
