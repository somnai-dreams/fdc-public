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
        //console.log('value', e.target.value);
        this.props.history.push('/search/'+e.target.value);
     }
  }

  //Handling Input Change
  handleChange = (e) => {
    this.setState({[e.target.name] : e.target.value});
  }

  goSearch = () => {
    this.props.history.push('/search/'+this.state.searchVal);
  }


  render() {
    return (
      <div>
          <div className="banner">
              <NavBar/>
              <div className="container">
                <div className="inner">
                  <div style={{textAlign: 'center', width: '100%', maxWidth: 1020}}>
                    <h1> Lorem ipsum setina sapa </h1>
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
          <div className="container" style={{paddingBottom: 150, flexWrap: 'wrap', alignItems: 'center'}}>
            <div className="inner" style={{width: '100%', maxWidth: 1020}}>
              <div style={{textAlign: 'left', width: '100%', maxWidth: 1020}}>
                <h1> Find your way </h1>
                <h2> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam. </h2>
              </div>
            </div>
            <div className="inner collapsible" style={{marginTop: 53}}>
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
                <h1>News & Updates</h1>
              </div>
            </div>
            <div className="inner flex-row" style={{marginTop: -105}}>
              <div className="fdc-box2">
                <div className="btm-3">
                </div>
              </div>
              <div className="fdc-box2 mobile-hidden">
                <div className="btm-3">
                </div>
              </div>
              <div className="fdc-box2 mobile-hidden">
                <div className="btm-3">
                </div>
              </div>
            </div>
          </div>
          <div className="container flex-row" style={{flexWrap: 'wrap', marginTop: 100, marginBottom: 144}}>
            <div className="inner" style={{width: '100%', maxWidth: 'none'}}>
              <div style={{textAlign: 'left', width: '100%', maxWidth: 1020}}>
                <h1> Popular Topics </h1>
              </div>
            </div>
            <div className="inner flex-row" style={{flexWrap: 'wrap'}}>
              {tags.map((item, i) => {
                return (
                  <a href="/" className="fdc-box3">
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
