import React, { Component } from "react";

import NavBar2 from '../NavBar2/NavBar2';
import Footer from '../footer/footer';
import Triangle from './qtriangle.svg';
import QTriangle from './qtriangle2.svg';
import Triangle2 from './atriangle.svg';
import ChevronRight from '../Home/chevron-right.svg';
import PopularShape from '../Home/PopularShape.png';
import Spinner from './spinner.svg';
import StopWords from './stop_words.json';

import Human from './human.svg';
import Bot from './bot.svg';

let ApplyingToBecomeProvider = require('../Content/template.html');

var html1  = require('../Content/1.html');
var html2  = require('../Content/2.html');
var html3  = require('../Content/3.html');
var html4  = require('../Content/4.html');
var html5  = require('../Content/5.html');
var html6  = require('../Content/6.html');
var html7  = require('../Content/7.html');
var html8  = require('../Content/8.html');
var html9  = require('../Content/9.html');
var html10 = require('../Content/10.html');
var html11 = require('../Content/11.html');
var html12 = require('../Content/12.html');


var documents = [{
  "title": "Becoming an approved provider",
  "text": html1,
  "num": 0
}, {
  "title": "Applying to become an approved provider",
  "text": html2,
  "num": 1
}, {
  "title": "Provider and service eligibility",
  "text": html3,
  "num": 2
}, {
  "title": "Exempt services",
  "text": html4,
  "num": 3
}, {
  "title": "How child care subsidy is paid",
  "text": html5,
  "num": 4
}, {
  "title": "Child Care Subsidy",
  "text": html6,
  "num": 5
}, {
  "title": "Additional Child Care Subsidy",
  "text": html7,
  "num": 6
}, {
  "title": "Enrolling children",
  "text": html8,
  "num": 7
}, {
  "title": "Managing and reporting sessions of care",
  "text": html9,
  "num": 8
}, {
  "title": "Record keeping and notifications",
  "text": html10,
  "num": 9
}, {
  "title": "Support for Providers",
  "text": html11,
  "num": 10
}, {
  "title": "Compliance",
  "text": html12,
  "num": 11
}]

let loading = true;

var idx = window.lunr(function () {
  this.ref('title');
  this.field('text');
  this.field('title');
  this.metadataWhitelist = ['position'];

  documents.forEach(function (doc) {
    this.add(doc)
  }, this)
})



class Search extends Component {

  constructor(props) {

    super(props);

    this.state = {
      query: "",
      results: [],
      all_answers: [],
      oneshot: null
    }
  }

  componentDidMount() {
    this.runSearch();
  }

  componentDidUpdate() {
    this.runSearch();
  }

  preSearch() {
    this.runSearch();
  }

  runSearch() {
    loading = true;
    let query = this.props.location.search;
    query = decodeURI(query.substring(query.indexOf("=") + 1, query.length));
    query = query.substring(1, query.length - 1);
    //console.log(query.toLowerCase(), this.state.query, query.toLowerCase() != this.state.query);
    if (query.toLowerCase() != this.state.query.toLowerCase()) {
      let dialogflow_answers = [];
      let oneshot_answer = null;
      //Get one shot answer
      fetch('http://3.19.71.124:3000/dialogflow', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
          query: query
        })
      }).then(response => {
        return response.json();
      }).then(data => {
        console.log(data);
        dialogflow_answers = data;
        for (let i = 0; i < data.length; i++) {
          if (data[i] && data[i].matchConfidence >= 0.95) {
            oneshot_answer = data[i];
            data.shift();
            console.log(data);
            break;
          }
        }

        let index = idx.search(query+"~1");
        let results = [];
        let queryWords = query.toLowerCase().split(" ");
        index.forEach(i => {
          for (let doc of documents) {
            if (i.ref == doc.title) {
              doc.snippet = "";
              Object.keys(i.matchData.metadata).forEach(el => {
                if (i.matchData.metadata[el].text) {
                  i.matchData.metadata[el].text.position.forEach(pos => {
                    let end_position = doc.text.indexOf("\n", pos[0]);
                    end_position = doc.text.indexOf("\n", end_position+1);
                    let start_position = doc.text.indexOf("\n", pos[0] - (end_position - pos[0]));
                    let snippet = doc.text.substring(start_position, end_position).replace(/<[^>]+>/g, '');
                    snippet = snippet.toLowerCase();
                    for (let word of queryWords) {
                      if (StopWords.indexOf(word) === -1) {
                        snippet = snippet.replace(word, "<span class='highlight'>"+word+"</span>");
                      }
                    }
                    doc.snippet =  doc.snippet + snippet + " ... <br/>";
                  })
                }
              })
              results.push(doc);
            }
          }
        })
        //console.log(query, results, oneshot_answer);
        loading = false;
        console.log(dialogflow_answers);
        this.setState({query: query, results: results, oneshot: oneshot_answer, all_answers: dialogflow_answers});
      });
    }
  }

  render() {
    return (
      <div>
          <NavBar2/>
          {loading && 
            <div className="container flex-row">
              <div className="inner" style={{width: '100%', marginTop: 80, flexWrap: 'wrap', marginBottom: 80}}>
                <img height="150" alt="Answering Query" src={Spinner } />
              </div>
            </div>
          }
          {!loading &&
            <div className="container flex-row" style={{backgroundColor: '#f8f9fe', paddingBottom: 80}}>
              <div className="inner" style={{width: '100%', marginTop: 80, flexWrap: 'wrap'}}>
                <div className="question-block">
                  <h4 style={{margin: '1rem 0'}}>{this.state.query}</h4>
                  <img className="speech-triangle" src={Triangle} />
                  <img className="avatar" src={Human} />
                </div>
                {this.state.oneshot &&
                <div className="answer-block">
                  <h4 style={{margin: '1rem 0'}}>{this.state.oneshot.faqQuestion}</h4>
                  <p dangerouslySetInnerHTML={{__html: this.state.oneshot.answer}}/> 
                  <div style={{height: 2, display: 'flex', justifyContent: 'flex-end'}}>
                    <img className="speech-triangle answer" src={Triangle2} />
                    <img className="avatar" src={Bot} />
                  </div>
                </div>
                }
              </div>
            </div>
          }
          <div className="container flex-row">
            <div className="inner flex-row" style={{ justifyContent: 'space-between', alignItems: 'flex-start'}}>


              {!loading && 
                <div className="search-results">
                  {this.state.oneshot ?
                    <h4> Not what you were after? Try these: </h4>
                  :
                    <h4> Results: </h4>
                  }
                  {this.state.results.length == 0 && 
                    "No results..."
                  }
                  {this.state.results.map((item, i) => {
                    return (
                      <a href={"/Content?="+item.num} key={i} className="search-result">
                        <div>
                          <a> {item.title}</a>
                          <p style={{marginTop: 5, maxHeight: 150, overflow: 'hidden', lineHeight: 1.5, marginBottom: 40}} dangerouslySetInnerHTML={{__html: item.snippet}}/>
                        </div>
                      </a>
                    )
                  })}
                </div>
              }
              {(!loading && this.state.all_answers.length) > 0 &&
                <div style={{width: '25%'}} className="also-asked mobile-hidden">
                  <h4> People also ask:</h4>

                  {this.state.all_answers.map((answer, i) => {
                    console.log(answer);
                    if (answer) {
                      if (this.state.oneshot && answer.faqQuestion.trim() == this.state.oneshot.faqQuestion.trim()) {
                      } else {
                        return (
                          <a key={i} href={'/search?query="'+answer.faqQuestion.replace("%", "%25")+'"'} style={{marginBottom: 20}}> 
                            <div className="fdc-box3" style={{padding: 15, width: '100%', margin: 0, marginBottom: 20}}>
                              {answer.faqQuestion}
                                <img className="speech-triangle" src={QTriangle} />
                            </div>
                          </a>
                        )
                      }
                    }
                  })}
                </div>
              }
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
                  <a href="/content?=0" className="fdc-box3">
                    Become An Approved Provider
                    <img src={ChevronRight} style={{width: 8}}/>
                  </a>
                  <a href="/content?=1" className="fdc-box3">
                    Set Up A Service
                    <img src={ChevronRight} style={{width: 8}}/>
                  </a>
                  <a href="/content?=2" className="fdc-box3">
                    Enrol Children 
                    <img src={ChevronRight} style={{width: 8}}/>
                  </a>
                  <a href="/content?=3" className="fdc-box3">
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
