import React, { Component } from "react";

import NavBar2 from '../NavBar2/NavBar2';
import Footer from '../footer/footer';
import Triangle from './speech-triangle.svg';
import Triangle2 from './speech-triangle2.svg';
import ChevronRight from '../Home/chevron-right.svg';
import PopularShape from '../Home/PopularShape.png';

var documents = [{
  "title": "Lunr",
  "text": "Like Solr, but much smaller, and not as bright."
}, {
  "title": "React",
  "text": "A JavaScript library for building user interfaces."
}, {
  "title": "Lodash",
  "text": "A modern JavaScript utility library delivering modularity, performance & extras."
}]

var idx = window.lunr(function () {
  this.ref('title');
  this.field('text');
  this.field('title');

  documents.forEach(function (doc) {
    this.add(doc)
  }, this)
})



class Search extends Component {

  constructor(props) {
    super(props);
    let query = props.location.search;
    query = decodeURI(query.substring(query.indexOf("=") + 1, query.length));
    query = query.substring(1, query.length - 1);
    console.log(query);
    let index = idx.search(query);
    let results = [];
    index.forEach(i => {
      for (let doc of documents) {
        if (i.ref == doc.title) {
          results.push(doc);
        }
      }
    })
    this.state = {
      query: query,
      results: results
    }
  }

  render() {
    return (
      <div>
          <NavBar2/>

          <div className="container flex-row">
            <div className="inner" style={{width: '100%', marginTop: 80, flexWrap: 'wrap'}}>
              <div className="question-block">
                <h1>"{this.state.query}"</h1>
                <img className="speech-triangle" src={Triangle} />
              </div>
              <div className="answer-block">
                <h1>Lorem ipsum telang sarasa?</h1>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo consequat sapien, et volutpat lectus porttitor at. Proin egestas elementum orci. Cras finibus sed dolor at malesuada. Cras nec sapien a ligula posuere convallis. Cras velit neque, tincidunt vitae nisl ac, dignissim condimentum urna. Etiam ornare pharetra ante molestie suscipit. Integer orci tortor, porta ut enim sit amet, feugiat ullamcorper nisi.
                </p>
                <div style={{height: 2, display: 'flex', justifyContent: 'flex-end'}}>
                  <img className="speech-triangle answer" src={Triangle2} />
                </div>
              </div>
            </div>
          </div>
          <div className="container flex-row">
            <div className="inner flex-row" style={{marginTop: 80, justifyContent: 'space-between', alignItems: 'flex-start'}}>
              <div className="search-results">
                <h1> Not what you were after? Try these: </h1>
                {this.state.results.map((item, i) => {
                  return (
                    <div className="search-result">
                      <a href={"/Content/"+item.title}> {item.title}</a>
                      <p> 
                        {item.text}
                      </p>
                      <div className="flex-row">
                        <div className="tag"> General Information </div> 
                        <div className="date"> 19 Aug 2019 </div> 
                      </div>
                    </div>
                  )
                })}
              </div>

              <div style={{width: '25%'}} className="also-asked mobile-hidden">
                <h1> People also ask:</h1>

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
    );
  }
}

export default Search;
