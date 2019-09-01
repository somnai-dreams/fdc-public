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
class Compliance extends Component {
  render() {
    return (
      <div className="new-provider">
        <NavBar2/> 
          <div className="banner container" style={{alignItems: 'center'}}>
            <div className="inner" style={{flexWrap: 'wrap', justifyContent: 'flex-start'}}>
              <h1 style={{color: '#FFF'}}> I need help with compliance</h1>
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

          <div className="container flex-row">
            <div className="inner flex-row" style={{marginTop: 80, justifyContent: 'space-between', alignItems: 'flex-start'}}>
              <h2> Related Topics</h2>
            </div>
          </div>
          <div className="resources topics container flex-row">
            <div className="inner flex-row" style={{flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start'}}>

                  <a href="/content/?=9" className="flex-row border" style={{justifyContent: 'space-between'}}>
                    <div className="search-results" style={{width: '85%', paddingBottom: 0}}>
                      <div className="search-result" style={{width: '85%'}}>
                        <a > Record keeping and notifications</a>
                        <p style={{maxHeight: 150, overflow: 'hidden', lineHeight: 1.5}} >
                          Your record-keeping responsibilities, including specific Family Day Care record-keeping requirements, and notificatoins taht need to be made to comply with provider obligations.
                        </p>
                      </div>
                    </div>
                    <img style={{cursor: 'pointer'}} src={ChevronRight} alt="more"/>
                   </a>


                  <a href="/content/?=11" className="flex-row border" style={{justifyContent: 'space-between'}}>
                    <div className="search-results" style={{width: '85%', paddingBottom: 0}}>
                      <div className="search-result" style={{width: '85%'}}>
                        <a > Compliance</a>
                        <p style={{maxHeight: 150, overflow: 'hidden', lineHeight: 1.5}} >
                          What you need to do to maintain ongoing approval under Family Assistance Law and the action that can be taken by the Department of Education if you fail to meet those obligations
                        </p>
                      </div>
                    </div>
                    <img style={{cursor: 'pointer'}} src={ChevronRight} alt="more"/>
                   </a>

             </div>
           </div>


        <Footer/>
      </div>
    )
  }
}

export default Compliance;
