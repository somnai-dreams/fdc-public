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
      <div className="new-provider">
        <NavBar2/> 
          <div className="banner container" style={{alignItems: 'center'}}>
            <div className="inner" style={{flexWrap: 'wrap', justifyContent: 'flex-start'}}>
              <h1 style={{color: '#FFF'}}> I need to become a provider </h1>
              <p style={{width: 400}}> 
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam.
              </p>
            </div>
          </div>

          <div className="container" style={{paddingBottom: 50, alignItems: 'center', flexWrap: 'wrap', marginTop: 40}}>
            <div className="inner collapsible" style={{marginTop: -70, flexWrap: 'wrap'}}>

              <div className="fdc-box" style={{textAlign: 'left',display: 'flex', alignItems: 'flex-start', backgroundImage: `url(${Journey1})`, backgroundRepeat: 'no-repeat', backgroundPositionY: 'bottom', backgroundSize: 220, flexWrap: 'wrap', backgroundColor: '#B9C7F6'}} >
                <h2 > What is family day care?</h2>
                <div style={{color: '#4864C8', marginLeft: 36, marginTop: -128}}> Read More </div>
              </div>


              <div className="fdc-box" style={{textAlign: 'left',display: 'flex', alignItems: 'flex-start', backgroundImage: `url(${Journey1})`, backgroundRepeat: 'no-repeat', backgroundPositionY: 'bottom', backgroundSize: 220, flexWrap: 'wrap', backgroundColor: '#B9C7F6'}} >
                <h2 > What does a good family day care provider look like?</h2>
                <div style={{color: '#4864C8', marginLeft: 36, marginTop: -93}}> Read More </div>
              </div>


              <div className="fdc-box" style={{textAlign: 'left',display: 'flex', alignItems: 'flex-start', backgroundImage: `url(${Journey1})`, backgroundRepeat: 'no-repeat', backgroundPositionY: 'bottom', backgroundSize: 220, flexWrap: 'wrap', backgroundColor: '#B9C7F6'}} >
                <h2 > Key contacts</h2>
                <div style={{color: '#4864C8', marginLeft: 36, marginTop: -128}}> Read More </div>
              </div>

            </div>
          </div>

          <div className="container" style={{alignItems: 'center'}}>
            <div className="inner" style={{flexWrap: 'wrap', justifyContent: 'flex-start'}}>
              <h2 style={{zIndex: 2, width: '100%'}}> Related Topics</h2>
              <div className="flex-row" style={{width: '50%', flexWrap: 'wrap'}}>

                <div className="fdc-box3" style={{backgroundColor: '#4864C8', color: '#FFF', width: 237}}>
                  Become An Approved Provider  
                  <img src={ChevronRight} style={{width: 8}}/>
                </div>


                <div className="fdc-box3" style={{backgroundColor: '#4864C8', color: '#FFF', width: 237}}>
                  Set Up A Service
                  <img src={ChevronRight} style={{width: 8}}/>
                </div>


                <div className="fdc-box3" style={{backgroundColor: '#4864C8', color: '#FFF', width: 237}}>
                  Subsidy Payments
                  <img src={ChevronRight} style={{width: 8}}/>
                </div>


                <div className="fdc-box3" style={{backgroundColor: '#4864C8', color: '#FFF', width: 237}}>
                  Report Sessions Of Care
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

export default NewProvider;
