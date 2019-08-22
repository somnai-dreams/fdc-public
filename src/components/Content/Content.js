import React, { Component } from "react";

import NavBar2 from '../NavBar2/NavBar2';
import Footer from '../footer/footer';
import ChevronRight from '../Home/chevron-right.svg';


class Content extends Component {
  render() {
    return (
      <div>
          <NavBar2/>

          <div className="container flex-row">
            <div className="inner flex-row" style={{minHeight: 'calc(100vh - 200px)', marginTop: 80, justifyContent: 'space-between', alignItems: 'flex-start'}}>
              <div className="search-results">
                <h1 style={{color: '#2889AA'}}> Lorem ipsum dolor</h1>
                <h2 > Lorem ipsum dolor, tincidunt vitae nisl </h2>

                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo consequat sapien, et volutpat lectus porttitor at. Proin egestas elementum orci. Cras finibus sed dolor at malesuada. Cras nec sapien a ligula posuere convallis. Cras velit neque, tincidunt vitae nisl ac, dignissim condimentum urna. Etiam ornare pharetra ante molestie suscipit. Integer orci tortor, porta ut enim sit amet, feugiat ullamcorper nisi.
                </p>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo consequat sapien, et volutpat lectus porttitor at. Proin egestas elementum orci. Cras finibus sed dolor at malesuada. Cras nec sapien a ligula posuere convallis. Cras velit neque, tincidunt vitae nisl ac, dignissim condimentum urna. Etiam ornare pharetra ante molestie suscipit. Integer orci tortor, porta ut enim sit amet, feugiat ullamcorper nisi.
                </p>

              </div>

              <div style={{width: '25%'}} className="mobile-hidden">
                <h1 style={{color: '#2889AA'}}> Other topics:</h1>

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

    )
  }
}

export default Content;
