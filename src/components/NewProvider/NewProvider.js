import React, { Component } from "react";
import NavBar2 from '../NavBar2/NavBar2';
import Footer from '../footer/footer';
import Journey1 from '../Home/Journeys1.png';
import PopularShape from '../Home/PopularShape.png';
import ChevronRight from '../Home/chevron-right.svg';
let tags = [
  {text: "Becoming an approved provider"},
  {text: "Applying to become an approved provider"},
  {text: "Provider and service eligibility"},
  {text: "Exempt services"},
]
class NewProvider extends Component {
  render() {
    return (
      <div>
        <NavBar2/> 
        
          <div className="container" style={{paddingBottom: 100, flexWrap: 'wrap', alignItems: 'center'}}>
            <div className="inner collapsible" style={{flexWrap:'wrap', paddingLeft: 33}}>
              <h2 style={{width: '100%', color: '#FF6B77', marginBottom: 15}} > I am a new provider </h2>
              <div className="flex-row" style={{justifyContent: 'space-between', position: 'relative', alignItems:'flex-start'}}>
                <div style={{width: '60%', color: '#1F2D76', fontSize: 20}}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam.
                </div>
                <div className="fdc-box5" style={{backgroundImage: `url(${Journey1})`}}></div>
              </div>
            </div>
          </div>
          <div className="container" style={{paddingBottom: 50, alignItems: 'center', flexWrap: 'wrap', marginTop: 40}}>
            <div className="inner collapsible" style={{marginTop: -70, flexWrap: 'wrap'}}>

              <div className="fdc-box" style={{textAlign: 'left',display: 'flex', alignItems: 'flex-start', backgroundImage: `url(${Journey1})`, backgroundRepeat: 'no-repeat', backgroundPositionY: 'bottom', backgroundSize: 220, flexWrap: 'wrap'}} >
                <h2 > What is family day care?</h2>
                <div style={{color: '#4864C8', marginLeft: 36, marginTop: -128}}> Read More </div>
              </div>


              <div className="fdc-box" style={{textAlign: 'left',display: 'flex', alignItems: 'flex-start', backgroundImage: `url(${Journey1})`, backgroundRepeat: 'no-repeat', backgroundPositionY: 'bottom', backgroundSize: 220, flexWrap: 'wrap'}} >
                <h2 > What does a good family day care provider look like?</h2>
                <div style={{color: '#4864C8', marginLeft: 36, marginTop: -93}}> Read More </div>
              </div>


              <div className="fdc-box" style={{textAlign: 'left',display: 'flex', alignItems: 'flex-start', backgroundImage: `url(${Journey1})`, backgroundRepeat: 'no-repeat', backgroundPositionY: 'bottom', backgroundSize: 220, flexWrap: 'wrap'}} >
                <h2 > Key contacts</h2>
                <div style={{color: '#4864C8', marginLeft: 36, marginTop: -128}}> Read More </div>
              </div>

            </div>
          </div>
          <div className="container flex-row popular-section" style={{backgroundColor: '#1F2D76', flexWrap: 'wrap', paddingTop: 100, paddingBottom: 144}}>
            <div className="inner" style={{width: '100%', maxWidth: 'none'}}>
              <div className="flex-row" style={{justifyContent: 'space-between', width: '100%', maxWidth: 1020}}>
                <img src={PopularShape} style={{position: 'absolute', marginLeft: -81, marginTop: -53}}/>
                <h2 style={{color: '#FFF', zIndex: 2}}> Related Handbook Pages</h2>
                <h3 style={{cursor: 'pointer', color: '#FFF'}}> View All</h3>
              </div>
            </div>
            <div className="inner flex-row" style={{flexWrap: 'wrap'}}>
              {tags.map((item, i) => {
                return (
                  <a key={i} href={"/content"+"?="+(i)} className="fdc-box3">
                    {item.text}
                    <img src={ChevronRight} style={{width: 8}}/>
                  </a>
                )
              })}
            </div>
          </div>



        <Footer/>
      </div>
    )
  }
}

export default NewProvider;
