import React from "react";
import Navicon from './navicon-round.svg'
import { NavLink } from 'react-router-dom';

import Logo from './DOE.png';

import Language from './language_icon.svg';
import SearchIcon from '../Home/Search.svg';



const NavBar = (props) => {
  return (<div>
    {/*}
    <div className="top-bar">
      <div className="inner flex-row">
        {props.search &&
          <div className="flex-row mobile-hidden">
            <input className="nav-search" placeholder="What are you looking for today?" type="text"/>
            <div>
            <img src={SearchIcon} alt="search" className="search-icon" 
              style={{marginLeft: -55}}/>
            </div>
          </div>
        }
      </div>
    </div>
    */}
    <div className="nav-bar teal-light">
      <div className="inner" style={{alignItems: 'center'}}>
        <a href="/">
          <img src={Logo} alt="Department of Education" className="logo"/>
        </a>
        <a href='/Mobile_Nav' style={{marginLeft: 'auto', marginRight: 20}}>
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
};

export default NavBar;
