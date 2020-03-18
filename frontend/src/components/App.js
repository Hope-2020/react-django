import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from '../history';
import TodoDelete from './todos/TodoDelete';

import Header from './layout/Header';
import Dashboard from './todos/Dashboard'; // added

import { Provider } from 'react-redux'; // added
import store from '../store'; // added

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Header />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path='/delete/:id' component={TodoDelete} />
          </Switch>
        </Router>
        <Header />
      </Provider>
    );
  }
}

export default App;