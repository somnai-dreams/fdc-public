import React, { Component } from "react";
import Logo from './DOE2.png';
import Shape from './Shape.png';

class footer extends Component {

  scrollTop = () => {
    window.scrollTo({
      top: 100,
      left: 100,
      behavior: 'smooth'
    });
  }


  render() {
    return (<div>
      <div className="subfooter mobile-only">
        <div onClick={this.scrollTop} className="container" style={{alignItems: 'center', cursor: 'pointer'}}>
          <div className="inner" style={{justifyContent: 'center', maxWidth: 1200}}>
            <h1 style={{fontSize: 22}}> Back to Top </h1>
          </div>
        </div>
      </div>
      <div style={{background: 'white'}} className="subfooter mobile-hidden">
        <div className="container" style={{alignItems: 'center'}}>
          <div className="inner" style={{justifyContent: 'space-between', maxWidth: 1200}}>
            <img src={Logo} alt="Department of Education" className="logo" />
            <div className="flex-row" style={{width: '100%', height: '100%', padding: '90px 150px 90px 100px'}}>

              <div className="list" style={{marginRight: 50}}>
                <a href="/topics" style={{fontSize: 18, fontWeight: 600, marginBottom: 5}}> Topics </a>
                <a href="/" style={{fontSize: 14}}> Lorem ipsum </a>
                <a href="/" style={{fontSize: 14}}> Lorem ipsum </a>
              </div>


              <div className="list" style={{marginRight: 50}}>
                <a href="/resources" style={{fontSize: 18, fontWeight: 600, marginBottom: 5}}> Resources </a>
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
        <img alt="" src={Shape} style={{position: 'absolute', marginTop: -135, right: 0}}/>
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

          <p style={{width: '100%', textAlign: 'center', color: '#1F2D76'}}>Site maintained by the Department of Education </p>
        </div>
        
      </div>
    </div>)
  }
}

export default footer;
