import React, { Component } from "react";

import NavBar from '../NavBar/NavBar';
import Footer from '../footer/footer';
import Triangle from './speech-triangle.svg';

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
              </div>
            </div>
          </div>
          <div className="container flex-row">
            <div className="inner" style={{width: '100%', marginTop: 80, flexWrap: 'wrap', justifyContent: 'flex-start'}}>
            <h1 style={{color: '#2889AA'}}> Not what you were after? Try these: </h1>
            </div>
          </div>
          <Footer/>
      </div> 
    );
  }
}

export default Search;
