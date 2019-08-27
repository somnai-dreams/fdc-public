import React, { Component } from "react";
import Navicon from '../NavBar/navicon.svg'
import Logo from '../NavBar2/DOE2.png';
import RightArrow from '../Home/arrow-right-icon.svg'
import { NavLink } from 'react-router-dom';
import CloseIcon from './close-button.svg';

class MobileNav extends Component {

  render() {
    return (<div>
          <div className="flex-row top-bar-phone">
            <img src={Logo} alt="Carer-gateway" style={{height: 80, margin: 20}}/>
          </div>
          <div className="mobile-nav teal-light">
            
            <img src={CloseIcon} className="close-icon" onClick={this.props.history.goBack} />
            <div className="menu">

              <a href="/" className="item">
                <h1> Home </h1>
              </a>

              <a href="/" className="item">
                <h1> Family Day Care</h1>
              </a>

              <a href="/" className="item">
                <h1> Compliance </h1>
              </a>

              <a href="/" className="item">
                <h1> Resources </h1>
              </a>

              <a href="/" className="item">
                <h1> News </h1>
              </a>
            </div>

          </div>

    </div>)
  }
}

export default MobileNav;
