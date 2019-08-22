import React from "react";
import Navicon from './navicon-round.svg'
import { NavLink } from 'react-router-dom';

import Logo from './DOE2.png';

import Language from './language_icon.svg';
import SearchIcon from '../Home/Search.svg';



const NavBar2 = (props) => {
  return (<div>
    <div className="top-bar">
      <div className="inner flex-row">
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
              <input className="nav-search" placeholder="What are you looking for today?" type="text"/>
              <img src={SearchIcon} alt="search" className="search-icon" 
                style={{marginLeft: -55, marginTop: 13}}/>
            </div>
          </div>
      </div>
    </div>
    <div className="nav-bar teal-light" style={{backgroundColor: '#202E77'}}>
      <div className="inner">
        <a href='/Mobile_Nav'>
          <img src={Navicon} alt="menu" className="nav-icon only-ipad" /> 
        </a>

        <NavLink exact to="/" href="/" activeClassName="selected" className="nav-item no-ipad">
          <div className="text">Home</div>
        </NavLink>

        <NavLink to="/childcare" href="/childcare" activeClassName="selected" className="nav-item no-ipad">
          <div className="text">Child Care</div>
        </NavLink>

        <NavLink to="/compliance" href="/compliance" activeClassName="selected" className="nav-item no-ipad">
          <div className="text">Compliance</div>
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
};

export default NavBar2;
