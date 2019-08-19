import React, { Component } from 'react';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class MainRouter extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home}/>
        </Switch>
      </Router>
    );
  }
}

export default MainRouter;

