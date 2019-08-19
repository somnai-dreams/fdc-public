import React, { Component } from "react";

import NavBar from '../NavBar/NavBar';
import Footer from '../footer/footer';
import Triangle from './speech-triangle.svg';
import Triangle2 from './speech-triangle2.svg';
import ChevronRight from '../Home/chevron-right.svg';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <div>
          <NavBar search={true}/>

          <div className="container flex-row">
            <div className="inner" style={{width: '100%', marginTop: 80, flexWrap: 'wrap'}}>
              <div className="question-block">
                <h1>"Lorem ipsum telang sarasa?"</h1>
                <img className="speech-triangle" src={Triangle} />
              </div>
              <div className="answer-block">
                <h1>Lorem ipsum telang sarasa?</h1>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo consequat sapien, et volutpat lectus porttitor at. Proin egestas elementum orci. Cras finibus sed dolor at malesuada. Cras nec sapien a ligula posuere convallis. Cras velit neque, tincidunt vitae nisl ac, dignissim condimentum urna. Etiam ornare pharetra ante molestie suscipit. Integer orci tortor, porta ut enim sit amet, feugiat ullamcorper nisi.
                </p>
                <img className="speech-triangle answer" src={Triangle2} />
              </div>
            </div>
          </div>
          <div className="container flex-row">
            <div className="inner flex-row" style={{marginTop: 80, justifyContent: 'space-between', alignItems: 'flex-start'}}>
              <div className="search-results">
                <h1 style={{color: '#2889AA'}}> Not what you were after? Try these: </h1>

                <div className="search-result">
                  <a href="/"> Lorem ipsum dolor </a>
                  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo consequat sapien, et volutpat lectus porttitor at. Proin egestas elementum orci. Cras finibus sed dolor at malesuada.
                  </p>
                  <div className="flex-row">
                    <div className="tag"> General Information </div> 
                    <div className="date"> 19 Aug 2019 </div> 
                  </div>
                </div>


                <div className="search-result">
                  <a href="/"> Lorem ipsum dolor </a>
                  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo consequat sapien, et volutpat lectus porttitor at. Proin egestas elementum orci. Cras finibus sed dolor at malesuada.
                  </p>
                  <div className="flex-row">
                    <div className="tag"> General Information </div> 
                    <div className="date"> 19 Aug 2019 </div> 
                  </div>
                </div>


                <div className="search-result">
                  <a href="/"> Lorem ipsum dolor </a>
                  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo consequat sapien, et volutpat lectus porttitor at. Proin egestas elementum orci. Cras finibus sed dolor at malesuada.
                  </p>
                  <div className="flex-row">
                    <div className="tag"> General Information </div> 
                    <div className="date"> 19 Aug 2019 </div> 
                  </div>
                </div>


                <div className="search-result">
                  <a href="/"> Lorem ipsum dolor </a>
                  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo consequat sapien, et volutpat lectus porttitor at. Proin egestas elementum orci. Cras finibus sed dolor at malesuada.
                  </p>
                  <div className="flex-row">
                    <div className="tag"> General Information </div> 
                    <div className="date"> 19 Aug 2019 </div> 
                  </div>
                </div>

              </div>

              <div style={{width: '25%'}}>
                <h1 style={{color: '#2889AA'}}> People also ask:</h1>

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
          <Footer/>
      </div> 
    );
  }
}

export default Search;
