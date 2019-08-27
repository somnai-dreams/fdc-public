import React, { Component } from "react";

import NavBar2 from '../NavBar2/NavBar2';
import Footer from '../footer/footer';
import ChevronRight from '../Home/chevron-right.svg';
import PopularShape from '../Home/PopularShape.png';
import ScrollableAnchor from 'react-scrollable-anchor';

var test_html = require('./template.html');
let html_array = test_html.split("\n");
let table_headings = [];
let current_h1 = "";
let multiline_type = null;
let multiline = [];

//Gather h1 and h2 and make them scrollable
for (let i = 0; i < html_array.length; i++) {
  let el = html_array[i];
  let id = "";
  //If we are in a header which spans accross multiple indexes of the array
  if (multiline.length > 0 ) {
    if (multiline_type === "H1") {
      if (el.indexOf("</H1>") != -1) {
        multiline.push(el);
        el = multiline.join(" ");
        current_h1 = current_h1.replace(/<[^>]+>/g, '');
        id = current_h1;
        table_headings[current_h1] = [];
        html_array[i] = "<ScrollableAnchor id='"+id.split(" ").join("_")+"'>"+el+"</ScrollableAnchor>";
        multiline = [];
      } else {
        multiline.push(el);
        html_array[i] = "";
      }
    } else {
      if (el.indexOf("</H2>") != -1) {
        multiline.push(el);
        el = multiline.join(" ");
        id = el.replace(/<[^>]+>/g, '');
        table_headings[current_h1].push(id) ;
        html_array[i] = "<ScrollableAnchor id='"+id.split(" ").join("_")+"'>"+el+"</ScrollableAnchor>";
        multiline = [];
      } else {
        multiline.push(el);
        html_array[i] = "";
      }
    }
  }

  if (el.startsWith("<H1")) {
    if (el.indexOf("</H1>") != -1) {
      current_h1 = el.replace(/<[^>]+>/g, '');
      id = current_h1;
      table_headings[current_h1] = [];
      html_array[i] = "<ScrollableAnchor id='"+id.split(" ").join("_")+"'>"+el+"</ScrollableAnchor>";
    } else {
      multiline.push(el);
      multiline_type = "H1";
      html_array[i] = "";
    }
  } else if (el.startsWith("<H2") ) {
    if (el.indexOf("/H2>") != -1) {
      id = el.replace(/<[^>]+>/g, '');
      table_headings[current_h1].push(id);
      html_array[i] = "<ScrollableAnchor id='"+id.split(" ").join("_")+"'>"+el+"</ScrollableAnchor>";
    } else {
      multiline.push(el);
      multiline_type = "H2";
      html_array[i] = "";
    }
  }
}
test_html = html_array.join("\n");

class Content extends Component {
  //---- Start window resize trigger ----
  componentDidMount = () => {
    window.addEventListener('scroll', this.didScroll);
  }

  componentWillUnmount = () => {
    window.addEventListener('scroll', this.didScroll);
  }

  //---- End window resize trigger -----
  didScroll = () => {
    let nav = document.getElementById("sticky-nav");
    if (nav) {
      if(window.pageYOffset > window.innerHeight) {
        nav.classList.add("sticky-nav");
      } else {
        nav.classList.remove("sticky-nav");
      }
    }
  }


  render() {
    return (
      <div className="content">
          <NavBar2/>

          <div className="container flex-row">
            <div className="inner flex-row" style={{minHeight: 'calc(100vh - 200px)', marginTop: 80, justifyContent: 'space-between', alignItems: 'flex-start'}}>
              <div className="search-results">
                {/*
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
                */}
                <div dangerouslySetInnerHTML={{__html: test_html}}/>

              </div>

              <div style={{width: '25%'}} className="also-asked mobile-hidden">
                <div style={{paddingBottom: 20}}>
                  <h1 style={{fontSize: 25}}>Relevant Material</h1>

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
                  {Object.keys(table_headings).map((item, i) => {
                    return (
                      <div style={{display: 'flex', flexWrap: 'wrap'}}>
                        <a href={"/content/#"+item.split(" ").join("_")} className="heading">{item}</a>
                        {table_headings[item].map((sub, i) => {
                          return(
                            <a href={"/content/#"+sub.split(" ").join("_")} className="sub-heading">{sub}</a>
                          )
                        })}
                      </div>
                    )
                  })}
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
