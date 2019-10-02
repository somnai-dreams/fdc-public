import React, { Component } from "react";

import NavBar2 from '../NavBar2/NavBar2';
import Footer from '../footer/footer';
import ChevronRight from '../Home/chevron-right.svg';
import PopularShape from '../Home/PopularShape.png';
import leftShape from './leftShape.svg';
import News1 from './News1.png';
import News2 from './News2.png';
import News3 from './News3.png';
import ChevronLeft from './chevron-left.svg';
import NewsShapes from './NewsShapes.png';


class NewsPage extends Component {
  render() {
    return (
      <div className="resources newsPage">
          <NavBar2/>
            <div className="container flex-row">
            <div className="inner flex-row" style={{marginTop: 10, justifyContent: 'space-between', alignItems: 'flex-start'}}>
              <div className="flex-row" style={{width: '100%', flexWrap: 'wrap'}}>
                <h1 style={{color: '#f7626e', width: '100%'}}> News </h1>
                
              </div>
            </div>
          </div>
          <img alt="" style={{left: -600, top: 100}} src={leftShape} className="shapes-2 mobile-hidden-1700"/>

        
         <div className="container flex-row news-section" style={{paddingTop: 20}}>
           
            <div className="inner flex-row news" style={{marginTop: 0, paddingBottom: 40}}>
            
              <div className="fdc-box2">
                <div className="btm-3" style={{backgroundImage: `url(${News3})`}}>
                </div>
                <h1> Additional Balancing</h1>
                <h2> Frequently asked questions from our recent webinar </h2>
                <div className="flex-row">
                  <span> 15 AUG 2019</span>
                    <div className="tag">POLICY UPDATE</div>
                </div>
              </div>
             
              <div className="fdc-box2 mobile-hidden-600">
                <div className="btm-3" style={{backgroundImage: `url(${News2})`}}>
                </div>
                <h1> Update your details</h1>
                <h2> Reminder to update your details on the Child Care Finder</h2>
                <div className="flex-row">
                  <span> 09 AUG 2019</span>
                                    <div className="tag">NEWS ITEM</div>
                </div>
              </div>

           
              <div className="fdc-box2 mobile-hidden-800">
                <div className="btm-3" style={{backgroundImage: `url(${News1})`}}>
                </div>
                <h1> Latest Webinar</h1>
                <h2> Understanding CCS balancing webcast for providers and services</h2>
                <div className="flex-row">
                  <span> 16 JULY 2019 </span>
                                    <div className="tag">WEBINAR</div>
                </div>
              </div>
                 <div className="fdc-box2">
                <div className="btm-3" style={{backgroundImage: `url(${News3})`}}>
                </div>
                <h1> Additional Balancing</h1>
                <h2> Frequently asked questions from our recent webinar </h2>
                <div className="flex-row">
                  <span> 15 AUG 2019</span>
                    <div className="tag">POLICY UPDATE</div>
                </div>
              </div>
                
             </div>

             <div className="inner flex-row news" style={{marginTop: 0}}>
            
              <div className="fdc-box2">
                <div className="btm-3" style={{backgroundImage: `url(${News3})`}}>
                </div>
                <h1> Additional Balancing</h1>
                <h2> Frequently asked questions from our recent webinar </h2>
                <div className="flex-row">
                  <span> 15 AUG 2019</span>
                    <div className="tag">POLICY UPDATE</div>
                </div>
              </div>
             
              <div className="fdc-box2 mobile-hidden-600">
                <div className="btm-3" style={{backgroundImage: `url(${News2})`}}>
                </div>
                <h1> Update your details</h1>
                <h2> Reminder to update your details on the Child Care Finder</h2>
                <div className="flex-row">
                  <span> 09 AUG 2019</span>
                                    <div className="tag">NEWS ITEM</div>
                </div>
              </div>

           
              <div className="fdc-box2 mobile-hidden-800">
                <div className="btm-3" style={{backgroundImage: `url(${News1})`}}>
                </div>
                <h1> Latest Webinar</h1>
                <h2> Understanding CCS balancing webcast for providers and services</h2>
                <div className="flex-row">
                  <span> 16 JULY 2019 </span>
                                    <div className="tag">WEBINAR</div>
                </div>
              </div>
                  <div className="fdc-box2">
                <div className="btm-3" style={{backgroundImage: `url(${News3})`}}>
                </div>
                <h1> Additional Balancing</h1>
                <h2> Frequently asked questions from our recent webinar </h2>
                <div className="flex-row">
                  <span> 15 AUG 2019</span>
                    <div className="tag">POLICY UPDATE</div>
                </div>
              </div>
            </div>
          </div>

          <div className="container flex-row popular-section" style={{zIndex: -2, backgroundColor: '#1F2D76', flexWrap: 'wrap', paddingTop: 50, paddingBottom: 70}}>
            <div className="inner" style={{width: '100%', maxWidth: 'none'}}>
              <div className="flex-row" style={{justifyContent: 'space-between', width: '100%', maxWidth: 1020}}>
                <img alt="" src={PopularShape} style={{position: 'absolute', marginLeft: -81, marginTop: -53}}/>
                <h1 style={{color: '#FFF', zIndex: 2}}> Popular Topics </h1>
                <h2 style={{cursor: 'pointer', color: '#FFF'}}> View All</h2>
              </div>
            </div>
            <div className="inner flex-row" style={{flexWrap: 'wrap'}}>
                  <a href="/content?=0" className="fdc-box3">
                    Become An Approved Provider
                    <img alt="view" src={ChevronRight} style={{width: 8}}/>
                  </a>
                  <a href="/content?=1" className="fdc-box3">
                    Set Up A Service
                    <img alt="view" src={ChevronRight} style={{width: 8}}/>
                  </a>
                  <a href="/content?=2" className="fdc-box3">
                    Enrol Children 
                    <img alt="view" src={ChevronRight} style={{width: 8}}/>
                  </a>
                  <a href="/content?=3" className="fdc-box3">
                    Report Sessions Of Care
                    <img alt="view"  src={ChevronRight} style={{width: 8}}/>
                  </a>
            </div>
          </div>

          <Footer/>
      </div> 
  )
  }
}

export default NewsPage;
