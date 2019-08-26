import React, { Component } from "react";

import NavBar2 from '../NavBar2/NavBar2';
import Footer from '../footer/footer';
import ChevronRight from '../Home/chevron-right.svg';
import PopularShape from '../Home/PopularShape.png';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav_offset : Infinity
    }
  }

  //---- Start window resize trigger ----
  componentDidMount = () => {
    if (window.pageYOffset < 100) {
      this.setState({nav_offset: document.getElementById("sticky-nav").getBoundingClientRect().top})
    }
    window.addEventListener('scroll', this.didScroll);
  }

  componentWillUnmount = () => {
    window.addEventListener('scroll', this.didScroll);
  }

  //---- End window resize trigger -----
  didScroll = () => {
    let nav = document.getElementById("sticky-nav");
    console.log(window.pageYOffset, nav.getBoundingClientRect());
    if(window.pageYOffset > this.state.nav_offset) {
      nav.classList.add("sticky-nav")
    } else {
      nav.classList.remove("sticky-nav")
    }
  }


  render() {
    return (
      <div>
          <NavBar2/>

          <div className="container flex-row">
            <div className="inner flex-row" style={{minHeight: 'calc(100vh - 200px)', marginTop: 80, justifyContent: 'space-between', alignItems: 'flex-start'}}>
              <div className="search-results">
                <h1 style={{color: '#FF6B77'}}> Becoming an approved provider</h1>
                <h2  style={{color: '#1F2D76', fontStyle: 'italic', fontSize: 20}}> This chapter provides information about the responsibilities of a child care provider and the key business requirements that are part of being a provider.</h2>

                <div className="fdc-box4" style={{justifyContent: 'space-between'}}> 
                  <div className="flex-row" >
                    <h3>Do educators need a working with children check and a national police check or does the working with children check cover the police check?
                    </h3>
                    <img src={ChevronRight} style={{width: 10, transform: 'rotate(90deg)', marginRight: -25}}/>
                  </div>
                </div>


                <div className="fdc-box4"> 
                  <div className="flex-row" style={{justifyContent: 'space-between'}}>
                    <h3>
                      What are the requirements for people working in child care?
                    </h3>
                    <img src={ChevronRight} style={{width: 10, transform: 'rotate(90deg)', marginRight: -25}}/>
                  </div>
                </div>

                <div className="flex-row" style={{flexWrap: 'wrap'}}>
                  <div className="fdc-box3" style={{backgroundColor: '#b9c7f6', color: '#1F2D76'}}> 
                      What is an approved provider?
                      <img src={ChevronRight} style={{width: 8}}/>
                  </div>


                  <div className="fdc-box3" style={{backgroundColor: '#b9c7f6', color: '#1F2D76'}}> 
                      What approvals or licences are required?
                      <img src={ChevronRight} style={{width: 8}}/>
                  </div>


                  <div className="fdc-box3" style={{backgroundColor: '#b9c7f6', color: '#1F2D76'}}> 
                      Provider approval
                      <img src={ChevronRight} style={{width: 8}}/>
                  </div>


                  <div className="fdc-box3" style={{backgroundColor: '#b9c7f6', color: '#1F2D76'}}> 
                      Service approval
                      <img src={ChevronRight} style={{width: 8}}/>
                  </div>
                </div>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo consequat sapien, et volutpat lectus porttitor at. Proin egestas elementum orci. Cras finibus sed dolor at malesuada. Cras nec sapien a ligula posuere convallis. Cras velit neque, tincidunt vitae nisl ac, dignissim condimentum urna. Etiam ornare pharetra ante molestie suscipit. Integer orci tortor, porta ut enim sit amet, feugiat ullamcorper nisi.
                </p>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo consequat sapien, et volutpat lectus porttitor at. Proin egestas elementum orci. Cras finibus sed dolor at malesuada. Cras nec sapien a ligula posuere convallis. Cras velit neque, tincidunt vitae nisl ac, dignissim condimentum urna. Etiam ornare pharetra ante molestie suscipit. Integer orci tortor, porta ut enim sit amet, feugiat ullamcorper nisi.
                </p>

              </div>

              <div style={{width: '25%'}} className="also-asked mobile-hidden">
                <div style={{paddingBottom: 20}}>
                  <h1 >Relevant Material</h1>

                  <div className="fdc-box3" style={{width: '100%', margin: 0, marginBottom: 15}}>
                    <a> Lorem ipsum dolor sit amet</a>
                    <img src={ChevronRight} style={{width: 8}}/>
                  </div>


                  <div className="fdc-box3" style={{width: '100%', margin: 0, marginBottom: 15}}>
                    <a> Lorem ipsum dolor sit amet</a>
                    <img src={ChevronRight} style={{width: 8}}/>
                  </div>


                  <div className="fdc-box3" style={{width: '100%', margin: 0, marginBottom: 15}}>
                    <a> Lorem ipsum dolor sit amet</a>
                    <img src={ChevronRight} style={{width: 8}}/>
                  </div>
                </div>

                <div id="sticky-nav" >
                  <div className="title"> Table of Contents </div>
                  <a href="/content" className="heading"> What is an approved provider? </a>
                  <a href="/content" className="sub-heading"> Family Assistance Law approval </a>
                  <a href="/content" className="sub-heading"> Family Assistance Law approval </a>

                  <a href="/content" className="heading"> What is an approved provider? </a>
                  <a href="/content" className="sub-heading"> Family Assistance Law approval </a>
                  <a href="/content" className="sub-heading"> Family Assistance Law approval </a>
                  <a href="/content" className="sub-heading"> Family Assistance Law approval </a>

                  <a href="/content" className="heading"> What is an approved provider? </a>
                  <a href="/content" className="sub-heading"> Family Assistance Law approval </a>
                  <a href="/content" className="sub-heading"> Family Assistance Law approval </a>
                  <a href="/content" className="sub-heading"> Family Assistance Law approval </a>

                </div>

              </div>
            </div>
          </div>
          <div className="container flex-row popular-section" style={{backgroundColor: '#1F2D76', flexWrap: 'wrap', paddingTop: 50, paddingBottom: 70}}>
            <div className="inner" style={{width: '100%', maxWidth: 'none'}}>
              <div className="flex-row" style={{justifyContent: 'space-between', width: '100%', maxWidth: 1020}}>
                <img src={PopularShape} style={{position: 'absolute', marginLeft: -81, marginTop: -53}}/>
                <h1 style={{color: '#FFF', zIndex: 2}}> Popular Topics </h1>
                <h2 style={{cursor: 'pointer', color: '#FFF'}}> View All</h2>
              </div>
            </div>
            <div className="inner flex-row" style={{flexWrap: 'wrap'}}>
                  <a href="/content" className="fdc-box3">
                    Become An Approved Provider
                    <img src={ChevronRight} style={{width: 8}}/>
                  </a>
                  <a href="/content" className="fdc-box3">
                    Set Up A Service
                    <img src={ChevronRight} style={{width: 8}}/>
                  </a>
                  <a href="/content" className="fdc-box3">
                    Enrol Children 
                    <img src={ChevronRight} style={{width: 8}}/>
                  </a>
                  <a href="/content" className="fdc-box3">
                    Report Sessions Of Care
                    <img src={ChevronRight} style={{width: 8}}/>
                  </a>
            </div>
          </div>


          <Footer/>
      </div> 

    )
  }
}

export default Content;
