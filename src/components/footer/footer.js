import React, { Component } from "react";
import Logo from '../NavBar/DOE.png';

class footer extends Component {
  render() {
    return (<div>
      <div className="subfooter">
        <div className="container" style={{alignItems: 'center'}}>
          <div className="inner" style={{justifyContent: 'space-between', maxWidth: 1200}}>
            <img src={Logo} alt="Department of Education" className="logo"
              style={{marginTop: -80, height: 166}}/>
            <div className="flex-row" style={{justifyContent: 'space-between', width: '100%', height: '100%', padding: '90px 150px 90px 100px'}}>

              <div className="list">
                <a href="/" style={{fontSize: 18, fontWeight: 600, marginBottom: 5}}> Child Care </a>
                <a href="/" style={{fontSize: 14}}> Lorem ipsum </a>
                <a href="/" style={{fontSize: 14}}> Lorem ipsum </a>
              </div>


              <div className="list">
                <a href="/" style={{fontSize: 18, fontWeight: 600, marginBottom: 5}}> Compliance </a>
                <a href="/" style={{fontSize: 14}}> Lorem ipsum </a>
                <a href="/" style={{fontSize: 14}}> Lorem ipsum </a>
              </div>


              <div className="list">
                <a href="/" style={{fontSize: 18, fontWeight: 600, marginBottom: 5}}> Resources </a>
                <a href="/" style={{fontSize: 14}}> Lorem ipsum </a>
                <a href="/" style={{fontSize: 14}}> Lorem ipsum </a>
              </div>


              <div className="list">
                <a href="/" style={{fontSize: 18, fontWeight: 600, marginBottom: 5}}> News </a>
                <a href="/" style={{fontSize: 14}}> Lorem ipsum </a>
                <a href="/" style={{fontSize: 14}}> Lorem ipsum </a>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="footer flex-row"  style={{justifyContent: 'center'}}>
        <div className="flex-row"  style={{justifyContent: 'center', flexWrap:'wrap', paddingTop: 33, paddingBottom: 33}}>
          <a href="/">
            About us
          </a>
          <a href="/">
            Accessibility
          </a>
          <a href="/">
            Privacy policy
          </a>
          <a href="/">
            Terms of use
          </a>
          <a href="/">
            Website feedback
          </a>
          <a href="/">
            Resources in your language
          </a>
          <a href="/">
            Request publications
          </a>

          <p style={{width: '100%', textAlign: 'center', color: '#FFF'}}>Site maintained by the Department of Education </p>
        </div>
        
      </div>
    </div>)
  }
}

export default footer;
