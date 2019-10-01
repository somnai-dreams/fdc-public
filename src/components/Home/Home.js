import React, { Component } from "react";
import '../style.css';
import '../max.css';
import '../style_mobile.css';
import NavBar from '../NavBar/NavBar';
import Footer from '../footer/footer';
import News1 from './News1.png';
import News2 from './News2.png';
import News3 from './News3.png';
import Clock from './clock.svg';
import SearchIcon from './Search.svg';
import ChevronRight from './chevron-right.svg';
import ChevronLeft from './chevron-left.svg';
import { withRouter } from "react-router-dom";

import Journey1 from './Journeys1.png';
import Journey2 from './Journeys2.png';
import Journey3 from './Journeys3.png';

import AboutShapes from './AboutShapes.png';
import NewsShapes from './NewsShapes.png';
import PopularShape from './PopularShape.png';
import bannerShapeLeft from './bannerShapeLeft.png';
import bannerShapeCentre from './bannerShapeCentre.png';
import bannerShapeRight from './bannerShapeRight.png';

let headerState = 1;
let tags = [
  {text: "Becoming an approved provider"},
  {text: "Applying to become an approved provider"},
  {text: "Provider and service eligibility"},
  {text: "Exempt services"},
  {text: "How child care subsidy is paid"},
  {text: "Child Care Subsidy"},
  {text: "Additional Child Care Subsidy"},
  {text: "Enrolling children"},
  {text: "Managing and reporting sessions of care"},
  {text: "Record keeping and notifications"},
  {text: "Support for Providers"},
  {text: "Compliance"},
]

class Home extends Component {
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
    return (
      <div>
          <div className="banner"  style={{position: 'relative', zIndex: 0}}>
              <NavBar/>
              <div className="container">
                <div className="inner">
                  <div style={{width: '100%', maxWidth: 1020}}>
                    <h1> Family Day Care <br/> <span style={{fontWeight:'400'}}> for providers </span></h1>
                  </div>
                </div>
                <div className="inner" style={{position: 'relative'}}>
                  <input aria-label="Search" onKeyDown={this.keyPress} value={this.state.searchVal} onChange={this.handleChange} className="home-search" name="searchVal" type="text" placeholder="What are you looking for today?"/>
                  <div>
                  <img alt="earch" onClick={this.goSearch} src={SearchIcon} alt="search" className="search-icon"/>
                  </div>
                <img alt="" className="mobile-hidden" src={bannerShapeCentre} style={{position: 'absolute', right: 120, bottom: -60, height: 300}}/>
                </div>
              </div>
              <img alt="" className="mobile-hidden" src={bannerShapeLeft} style={{position: 'absolute',  left: 0, bottom: 0,maxWidth: 280, width: '15vw'}}/>
              
              <img alt="" className="mobile-hidden" src={bannerShapeRight} style={{position: 'absolute', right: 0, bottom: 0, maxWidth: 400, width: '25vw'}}/>

          </div>
          <div className="container" style={{paddingBottom: 30, flexWrap: 'wrap', alignItems: 'center'}}>
            <div className="inner collapsible" style={{marginTop: -70}}>
              <a href="/NewProvider" className="fdc-box" style={{backgroundImage: `url(${Journey1})`, backgroundColor: '#B9C7F6'}}>
                <h2> I am a new provider</h2>
              </a>
              <a href="/NeedInformation" className="fdc-box" style={{backgroundImage: `url(${Journey3})`, backgroundColor: '#719FFF'}}>
                <h2> I need information</h2>
              </a>
              <a href="/Compliance" className="fdc-box" style={{backgroundColor: '#4864C8', backgroundImage: `url(${Journey2})`}}>
                <h2 style={{color: '#FFF'}}> Help with compliance </h2>
              </a>
            </div>
          </div>

          <div className="container about-section" style={{paddingBottom: 100, flexWrap: 'wrap', alignItems: 'center'}}>
            <div className="inner collapsible" style={{flexWrap:'wrap'}}>
              <h2 style={{width: '100%', color: '#f7626e', marginBottom: 0}}> About </h2>
              <div className="flex-row" style={{justifyContent: 'space-between', position: 'relative'}}>
                <div style={{width: '60%', color: '#1F2D76', fontSize: 20}}>
                  This website is for Family Day Care providers. It has information to help you understand your compliance obligations. 
                    <br/>
                    <br/>
              This website is part of the Department of Education's <a href="https://www.education.gov.au/early-childhood-and-child-care-0"> child care programme.</a>
                </div>
                <img alt="" style={{position: 'absolute', right: 0}} src={AboutShapes} />
              </div>
            </div>
          </div>

          <div className="container flex-row news-section" >
            <div className="inner" style={{width: '100%', maxWidth: 'none'}}>
              <div style={{textAlign: 'left', width: '100%', maxWidth: 1020}}>
                <h2 style={{marginTop: "0", marginBottom: 30}}>News & Updates</h2>
                <img alt="" src={NewsShapes} className="shape mobile-hidden"/>
              </div>
            </div>
            <div className="inner flex-row" style={{marginTop: 0}}>
            
              <img alt="Button scroll news items left" style={{cursor: 'pointer'}} src={ChevronLeft} alt="more"/>
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
              <img alt="Button scroll news items right" style={{cursor: 'pointer'}} src={ChevronRight} alt="more"/>
            </div>
          </div>
          <div className="container flex-row popular-section" style={{backgroundColor: '#1F2D76', flexWrap: 'wrap', paddingTop: '100px', paddingBottom: '100px'}}>
            <div className="inner" style={{width: '100%', maxWidth: 'none'}}>
              <div className="flex-row" style={{justifyContent: 'space-between', width: '100%', maxWidth: 1020}}>
                <img alt="" src={PopularShape} style={{position: 'absolute', marginLeft: -81, marginTop: 15}}/>
                <h2 style={{color: '#FFF', zIndex: 2, marginTop: 0}}> Popular Topics </h2>
                <h3 style={{cursor: 'pointer', color: '#FFF'}}> View All</h3>
              </div>
            </div>
            <div className="inner flex-row" style={{flexWrap: 'wrap', zIndex: '1'}}>
              {tags.map((item, i) => {
                return (
                  <a key={i} href={"/content"+"?="+(i)} className="fdc-box3" style={{width: 200}}>
                    {item.text}
                    <img alt="View topic" src={ChevronRight} style={{width: 8}}/>
                  </a>
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
