import React from "react";
import Navicon from './navicon-round.svg'
import SearchIcon from './search-round.svg'
import { NavLink } from 'react-router-dom';

import Logo from './DOE.png';

import Listen from './listen-icon.svg';
import Language from './language_icon.svg';



const NavBar = () => {
  return (<div>

    <div className="top-bar">
      <div className="inner flex-row">
        <a href="/">
          <img src={Logo} alt="Department of Education" className="logo"/>
        </a>
        <div>
          <img src={Listen} alt="Listen" className="language-icon"/>
          <img src={Language} alt="Language" className="language-icon"/>
        </div>
      </div>
    </div>
    <div className="nav-bar teal-light">
      <div className="inner">
        <a href='/Mobile_Nav'>
          <img src={Navicon} alt="menu" className="nav-icon only-ipad" /> 
        </a>

        <NavLink exact to="/" href="/" activeClassName="selected" className="nav-item no-ipad">
          <div className="text">Home</div>
        </NavLink>

        <NavLink to="/help" href="/help" activeClassName="selected" className="nav-item no-ipad">
          <div className="text">Item 1</div>
        </NavLink>

        <NavLink to="/connect" href="/connect" activeClassName="selected" className="nav-item no-ipad">
          <div className="text">Item 2</div>
        </NavLink>

        <NavLink to="/respite" href="/respite" activeClassName="selected" className="nav-item no-ipad">
          <div className="text">Item 3</div>
        </NavLink>
      </div>
    </div>
  </div>);
};

export default NavBar;
