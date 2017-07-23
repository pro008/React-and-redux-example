import React from "react"
import ReactDOM from "react-dom"

import { Provider } from "react-redux"
import { Router, Route, IndexRoute, hashHistory } from "react-router"
import PropTypes from 'prop-types'

import Layout from "./components/layout/Layout"
import store from "./store"

import BookNew from "./pages/BookNew/"
import BookList from "./pages/BookList/"
import BookInfor from "./pages/BookInfor/"
import Edit from "./pages/BookEdit/"

const app = document.getElementById('app');

ReactDOM.render( <Provider store={store}>
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={BookList}></IndexRoute>
      <Route path="adds" name="add" component={BookNew}></Route>
      <Route path="/book/:id" component={BookInfor} />
      <Route path="/book/:id/edit" component={Edit} />
    </Route>
  </Router>
</Provider> ,app);
