import React, { Component } from "react";
import Navicon from './navicon-round.svg'
import { NavLink } from 'react-router-dom';
import Shape from './headerSmall.png';

import Logo from './DOE2.png';

import Language from './language_icon.svg';
import SearchIcon from '../Home/Search.svg';
import { withRouter } from "react-router-dom";



class NavBar2 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchVal: ""
    }
  }

  //Handling keypress keyCode 13 = enter
  keyPress = (e) => {
     if(e.keyCode == 13){
        this.goSearch();
     }
  }

  //Handling Input Change
  handleChange = (e) => {
    this.setState({[e.target.name] : e.target.value});
  }

  goSearch = () => {
    this.props.history.push("/search?query='"+this.state.searchVal.replace("%", "%25")+"'");
  }

  render() {
  return (<div>
    <div className="top-bar">
      <div className="inner flex-row">
          <img src={Shape} className="shapes-2 mobile-hidden-1700"/>
          <div className="flex-row mobile-hidden" style={{justifyContent: 'space-between', width: '100%'}}>
            <div className="flex-row">
              <a href="/" style={{marginRight: 25}}>
                <img src={Logo} alt="Department of Education" className="logo"/>
              </a>
              <div className="flex-column">
                <h1>
                  Family Day Care
                </h1>
                <h2>
                  for providers
                </h2>
              </div>
            </div>
            <div>
              <input onKeyDown={this.keyPress} value={this.state.searchVal} onChange={this.handleChange} className="nav-search" name="searchVal" placeholder="What are you looking for today?" type="text"/>
              <img onClick={this.goSearch} src={SearchIcon} alt="search" className="search-icon" 
                style={{marginLeft: -55, marginTop: 13}}/>
            </div>
          </div>
      </div>
    </div>
    <div className="nav-bar teal-light" style={{backgroundColor: '#202E77', height: 75, paddingTop: 0}}>
      <div className="inner">
        <a href='/Mobile_Nav'>
          <img src={Navicon} alt="menu" className="nav-icon only-ipad" /> 
        </a>

        <NavLink exact to="/" href="/" activeClassName="selected" className="nav-item no-ipad">
          <div className="text">Home</div>
        </NavLink>

        <NavLink to="/topics" href="/topics" activeClassName="selected" className="nav-item no-ipad">
          <div className="text">Topics</div>
        </NavLink>


        <NavLink to="/resources" href="/resources" activeClassName="selected" className="nav-item no-ipad">
          <div className="text">Resources</div>
        </NavLink>

        <NavLink to="/news" href="/news" activeClassName="selected" className="nav-item no-ipad">
          <div className="text">News</div>
        </NavLink>


      </div>
    </div>
  </div>);
  }
};

export default withRouter(NavBar2);

