import React, { Component } from "react";
import '../style.css';
import '../style_mobile.css';
import NavBar from '../NavBar/NavBar';
import Footer from '../footer/footer';
import SearchIcon from './Search.svg';
import ChevronRight from './chevron-right.svg';
import { withRouter } from "react-router-dom";


let headerState = 1;
let tags = [
{text: "lorem ipsum"},
{text: "lorem ipsum"},
{text: "lorem ipsum"},
{text: "lorem ipsum"},
{text: "lorem ipsum"},
{text: "lorem ipsum"},
{text: "lorem ipsum"},
{text: "lorem ipsum"},
{text: "lorem ipsum"},
{text: "lorem ipsum"},
{text: "lorem ipsum"},
{text: "lorem ipsum"}
]

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <div>
          <div className="banner">
              <NavBar/>
              <div className="container">
                <div className="inner" style={{width: '100%', maxWidth: 1020}}>
                  <div style={{textAlign: 'center', width: '100%', maxWidth: 1020}}>
                    <h1> Lorem ipsum setina sapa </h1>
                  </div>
                </div>
                <div className="inner">
                  <input className="home-search" type="text" placeholder="What you are looking for?"/>
                  <img src={SearchIcon} alt="search" className="search-icon"/>
                </div>
              </div>
          </div>
          <div className="container" style={{paddingBottom: 150, flexWrap: 'wrap', alignItems: 'center'}}>
            <div className="inner" style={{width: '100%', maxWidth: 1020}}>
              <div style={{textAlign: 'left', width: '100%', maxWidth: 1020}}>
                <h1> Lorem ipsum setina sapa </h1>
                <h2> description text header 2 format</h2>
              </div>
            </div>
            <div className="inner" style={{marginTop: 87}}>
              <div className="fdc-box">
              </div>
              <div className="fdc-box">
              </div>
              <div className="fdc-box">
              </div>
            </div>
          </div>
          <div className="container flex-row" style={{background: '#f4f9fb', height: 517, flexWrap: 'wrap'}}>
            <div className="inner" style={{width: '100%', maxWidth: 'none'}}>
              <div style={{textAlign: 'left', width: '100%', maxWidth: 1020}}>
                <h1> Lorem ipsum setina sapa </h1>
              </div>
            </div>
            <div className="inner flex-row" style={{marginTop: -105}}>
              <div className="fdc-box2">
                <div className="btm-3">
                </div>
              </div>
              <div className="fdc-box2">
                <div className="btm-3">
                </div>
              </div>
              <div className="fdc-box2">
                <div className="btm-3">
                </div>
              </div>
            </div>
          </div>
          <div className="container flex-row" style={{flexWrap: 'wrap', marginTop: 124, marginBottom: 144}}>
            <div className="inner" style={{width: '100%', maxWidth: 'none'}}>
              <div style={{textAlign: 'left', width: '100%', maxWidth: 1020}}>
                <h1> Lorem ipsum setina sapa </h1>
              </div>
            </div>
            <div className="inner flex-row" style={{flexWrap: 'wrap'}}>
              {tags.map((item, i) => {
                return (
                  <div className="fdc-box3">
                    <a> {item.text} </a>
                    <img src={ChevronRight} style={{width: 8}}/>
                  </div>
                )
              })}
            </div>
          </div>
          <Footer/>
      </div> 
    );
  }
}

export default withRouter(Home);
