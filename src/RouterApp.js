import React, { Component } from 'react';
import Home from './components/Home/Home';
import Search from './components/Search/Search';
import Topics from './components/Topics/Topics';
import Content from './components/Content/Content';
import News from './components/News/News';
import NewProvider from './components/NewProvider/NewProvider';
import NeedInformation from './components/NeedInformation/NeedInformation';
import Compliance from './components/Compliance/Compliance';
import Resources from './components/Resources/Resources';
import NewsPage from './components/NewsPage/NewsPage';
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
          <Route exact path={`${process.env.PUBLIC_URL}/NeedInformation`} component={NeedInformation}/>
          <Route exact path={`${process.env.PUBLIC_URL}/Compliance`} component={Compliance}/>
          <Route exact path={`${process.env.PUBLIC_URL}/Resources`} component={Resources}/>
          <Route exact path={`${process.env.PUBLIC_URL}/NewsPage`} component={NewsPage}/>
          <Route path={`${process.env.PUBLIC_URL}/Search`} component={Search}/>
          <Route path={`${process.env.PUBLIC_URL}/Topics`} component={Topics}/>
          <Route path={`${process.env.PUBLIC_URL}/Content`} component={Content}/>
          <Route path={`${process.env.PUBLIC_URL}/News`} component={News}/>
          <Route path={`${process.env.PUBLIC_URL}/Mobile_Nav`} component={MobileNav}/>
        </Switch>
      </Router>
    );
  }

}

export default RouterApp;
