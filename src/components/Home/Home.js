import React, { Component } from "react";
import '../style.css';
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

let headerState = 1;
let tags = [
{text: "Become an approved provider"},
{text: "Set up a service"},
{text: "Enrol children"},
{text: "Report sessions of care"},
{text: "Subsidy payments"},
{text: "Record keeping"},
{text: "Compliance"},
{text: "Child care subsidy (CCS)"},
{text: "Additional child care subsidy (ACCS)"},
{text: "Support for providers"},
{text: "Exempt services"},
{text: "Contacts"}
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
    this.props.history.push("/search?query='"+this.state.searchVal+"'");
  }

  render() {
    return (
      <div>
          <div className="banner">
              <NavBar/>
              <div className="container">
                <div className="inner">
                  <div style={{width: '100%', maxWidth: 1020}}>
                    <h1> Family Day Care</h1>
                    <h2> for providers </h2>
                  </div>
                </div>
                <div className="inner">
                  <input onKeyDown={this.keyPress} value={this.state.searchVal} onChange={this.handleChange} className="home-search" name="searchVal" type="text" placeholder="What you are looking for today?"/>
                  <div>
                  <img onClick={this.goSearch} src={SearchIcon} alt="search" className="search-icon"/>
                  </div>
                </div>
              </div>
          </div>
          <div className="container" style={{paddingBottom: 50, flexWrap: 'wrap', alignItems: 'center'}}>
            <div className="inner collapsible" style={{marginTop: -100}}>
              <div className="fdc-box" style={{backgroundImage: `url(${Journey1})`, backgroundColor: '#FFE0E6'}}>
                <h2> I am a new provider</h2>
              </div>
              <div className="fdc-box" style={{backgroundImage: `url(${Journey3})`, backgroundColor: '#b9c7f6'}}>
                <h2> I need information</h2>
              </div>
              <div className="fdc-box" style={{backgroundImage: `url(${Journey2})`}}>
                <h2 style={{color: '#FFF'}}> Help with compliance </h2>
              </div>
            </div>
          </div>

          <div className="container about-section" style={{paddingBottom: 50, flexWrap: 'wrap', alignItems: 'center'}}>
            <div className="inner collapsible" style={{flexWrap:'wrap', paddingLeft: 33}}>
              <h1 style={{width: '100%', color: '#FF6B77', marginBottom: 0}}> About </h1>
              <div className="flex-row" style={{justifyContent: 'space-between'}}>
                <div style={{width: '60%', color: '#1F2D76', fontSize: 20}}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam.
                </div>
                <img src={AboutShapes} />
              </div>
            </div>
          </div>

          <div className="container flex-row news-section" >
            <div className="inner" style={{width: '100%', maxWidth: 'none'}}>
              <div style={{textAlign: 'left', width: '100%', maxWidth: 1020}}>
                <h1>News & Updates</h1>
                <img src={NewsShapes} className="shape"/>
              </div>
            </div>
            <div className="inner flex-row" style={{marginTop: -105}}>
            
              <img style={{cursor: 'pointer'}} src={ChevronLeft} alt="more"/>
              <div className="fdc-box2">
                <div className="btm-3" style={{backgroundImage: `url(${News3})`}}>
                </div>
                <div className="tag">POLICY UPDATE</div>
                <h1> Policy Update </h1>
                <h2> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod. </h2>
                <div className="flex-row">
                  <img className="clock" src={Clock} />
                  <span> 12 JULY 2018 </span>
                </div>
              </div>
             
              <div className="fdc-box2 mobile-hidden">
                <div className="btm-3" style={{backgroundImage: `url(${News2})`}}>
                </div>
                <div className="tag">NEWS ITEM</div>
                <h1> News Item </h1>
                <h2> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod. </h2>
                <div className="flex-row">
                  <img className="clock" src={Clock} />
                  <span> 12 JULY 2018 </span>
                </div>
              </div>

           
              <div className="fdc-box2 mobile-hidden">
                <div className="btm-3" style={{backgroundImage: `url(${News1})`}}>
                </div>
                <div className="tag">WEBINAR</div>
                <h1> Latest Webinar</h1>
                <h2> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod. </h2>
                <div className="flex-row">
                  <img className="clock" src={Clock} />
                  <span> 12 JULY 2018 </span>
                </div>
              </div>
              <img style={{cursor: 'pointer'}} src={ChevronRight} alt="more"/>
            </div>
          </div>
          <div className="container flex-row popular-section" style={{backgroundColor: '#1F2D76', flexWrap: 'wrap', paddingTop: 100, paddingBottom: 144}}>
            <div className="inner" style={{width: '100%', maxWidth: 'none'}}>
              <div className="flex-row" style={{justifyContent: 'space-between', width: '100%', maxWidth: 1020}}>
                <img src={PopularShape} style={{position: 'absolute', marginLeft: -81, marginTop: -53}}/>
                <h1 style={{color: '#FFF', zIndex: 2}}> Popular Topics </h1>
                <h2 style={{cursor: 'pointer', color: '#FFF'}}> View All</h2>
              </div>
            </div>
            <div className="inner flex-row" style={{flexWrap: 'wrap'}}>
              {tags.map((item, i) => {
                return (
                  <a href="/content" className="fdc-box3">
                    {item.text}
                    <img src={ChevronRight} style={{width: 8}}/>
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
