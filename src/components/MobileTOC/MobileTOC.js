import React, { Component } from "react";
import Navicon from '../NavBar/navicon.svg'
import RightArrow from '../Home/arrow-right-icon.svg'
import { NavLink } from 'react-router-dom';
import CloseIcon from './close-button.svg';

class MobileTOC extends Component {

  render() {
    return (<div>
          <div className="mobile-nav teal-light">
            
            <img src={CloseIcon} className="close-icon" onClick={this.props.closeMethod} />
            <div className="menu" style={{height: "auto"}}>
              {Object.keys(this.props.titles).map((title, i) => {
                return (
                  <div key={i} style={{display: 'flex', flexWrap: 'wrap'}}>
                    <a onClick={ e => {this.props.closeMethod(title.split(" ").join("_")) }} id={"toc-"+title.split(" ").join("_")} className="item">
                      <h1>{title}</h1>
                    </a>
                    {this.props.titles[title].map((sub, i) => {
                      return(
                        <a key={i} onClick={ e => {this.props.closeMethod(sub.split(" ").join("_")) }} id={"toc-"+sub.split(" ").join("_")} className="item">
                          <h3>{sub}</h3>
                        </a>
                      )
                    })}
                  </div>
                )
              })}
            </div>

          </div>

    </div>)
  }
}

export default MobileTOC;
