import React, { Component } from "react";
import Navicon from '../NavBar/navicon.svg'
import Logo from '../NavBar/DOE.png';
import RightArrow from '../Home/arrow-right-icon.svg'
import { NavLink } from 'react-router-dom';
import CloseIcon from './close-button.svg';

class MobileNav extends Component {

  render() {
    return (<div>
          <div className="flex-row top-bar-phone">
            <img src={Logo} alt="Carer-gateway" className="logo"/>
          </div>
          <div className="mobile-nav teal-light">
            
            <img src={CloseIcon} className="close-icon" onClick={this.props.history.goBack} />
            <div className="menu">

              <a href="/" className="item">
                <h1> Home </h1>
              </a>

              <a href="/help" className="item">
                <h1> Help & Advice </h1>
              </a>

              <a href="/connect" className="item">
                <h1> Connect with others </h1>
              </a>

              <a href="/respite" className="item">
                <h1> Respite </h1>
              </a>

              <a href="/payments" className="item">
                <h1> Payments </h1>
              </a>
            </div>

          </div>

    </div>)
  }
}

export default MobileNav;
