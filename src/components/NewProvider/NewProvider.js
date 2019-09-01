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

          <div className="container flex-row">
            <div className="inner flex-row" style={{marginTop: 80, justifyContent: 'space-between', alignItems: 'flex-start'}}>
              <h2> Related Topics</h2>
            </div>
          </div>
          <div className="resources topics container flex-row">
            <div className="inner flex-row" style={{flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start'}}>

                  <a href="/content/?=0" className="flex-row border" style={{justifyContent: 'space-between'}}>
                    <div className="search-results" style={{width: '85%', paddingBottom: 0}}>
                      <div className="search-result" style={{width: '85%'}}>
                        <a > Becoming an approved provider</a>
                        <p style={{maxHeight: 150, overflow: 'hidden', lineHeight: 1.5}} >
                          The responsibilities of a child care provider and the key business requirements that are part of being a provider
                        </p>
                      </div>
                    </div>
                    <img style={{cursor: 'pointer'}} src={ChevronRight} alt="more"/>
                   </a>


                  <a href="/content/?=1" className="flex-row border" style={{justifyContent: 'space-between'}}>
                    <div className="search-results" style={{width: '85%', paddingBottom: 0}}>
                      <div className="search-result" style={{width: '85%'}}>
                        <a > Applying to be an approved provider</a>
                        <p style={{maxHeight: 150, overflow: 'hidden', lineHeight: 1.5}} >
                          Applying for approval for the first time, seeking to add or remove a service from the provider approval, and registration of personnel.
                        </p>
                      </div>
                    </div>
                    <img style={{cursor: 'pointer'}} src={ChevronRight} alt="more"/>
                   </a>


                  <a href="/content/?=2" className="flex-row border" style={{justifyContent: 'space-between'}}>
                    <div className="search-results" style={{width: '85%', paddingBottom: 0}}>
                      <div className="search-result" style={{width: '85%'}}>
                        <a > Provider and service eligibility</a>
                        <p style={{maxHeight: 150, overflow: 'hidden', lineHeight: 1.5}} >
                          Eligibility requirements that providers and services must meet to be eligible for approval under Family Assistance Law.
                        </p>
                      </div>
                    </div>
                    <img style={{cursor: 'pointer'}} src={ChevronRight} alt="more"/>
                   </a>


                  <a href="/content/?=3" className="flex-row border" style={{justifyContent: 'space-between'}}>
                    <div className="search-results" style={{width: '85%', paddingBottom: 0}}>
                      <div className="search-result" style={{width: '85%'}}>
                        <a> Exempt services</a>
                        <p style={{maxHeight: 150, overflow: 'hidden', lineHeight: 1.5}} >
                          Types of services that are not covered by the National Law and provides information on the requirements exempt services must meet.
                        </p>
                      </div>
                    </div>
                    <img style={{cursor: 'pointer'}} src={ChevronRight} alt="more"/>
                   </a>


                  <a href="/content/?=10" className="flex-row border" style={{justifyContent: 'space-between'}}>
                    <div className="search-results" style={{width: '85%', paddingBottom: 0}}>
                      <div className="search-result" style={{width: '85%'}}>
                        <a > Support for providers</a>
                        <p style={{maxHeight: 150, overflow: 'hidden', lineHeight: 1.5}} >
                          The Inclusion Support Program and the Community Child Care Fund (including Connected Beginnings) and how each program is delivered
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

export default NewProvider;
