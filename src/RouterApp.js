import React, { Component } from 'react';
import Home from './components/Home/Home';
import Search from './components/Search/Search';
import Content from './components/Content/Content';
import NewProvider from './components/NewProvider/NewProvider';
import Resources from './components/Resources/Resources';
import MobileNav from './components/MobileNav/MobileNav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class RouterApp extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home}/>
          <Route exact path={`${process.env.PUBLIC_URL}/Home`} component={Home}/>
          <Route exact path={`${process.env.PUBLIC_URL}/NewProvider`} component={NewProvider}/>
          <Route exact path={`${process.env.PUBLIC_URL}/Resources`} component={Resources}/>
          <Route path={`${process.env.PUBLIC_URL}/Search`} component={Search}/>
          <Route path={`${process.env.PUBLIC_URL}/Content`} component={Content}/>
          <Route path={`${process.env.PUBLIC_URL}/Mobile_Nav`} component={MobileNav}/>
        </Switch>
      </Router>
    );
  }

}

export default RouterApp;
