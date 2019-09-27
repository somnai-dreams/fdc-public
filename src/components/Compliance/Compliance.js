import React, { Component } from "react";
import NavBar2 from '../NavBar2/NavBar2';
import Footer from '../footer/footer';
import Journey2 from '../Home/Journeys2.png';
import PopularShape from '../Home/PopularShape.png';
import ChevronRight from '../Home/chevron-right.svg';
import Img1 from './1.png';
import Img2 from './2.png';
import Img3 from './3.png';
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
          <div className="banner container" style={{alignItems: 'center',  backgroundImage: `url(${Journey2})`, backgroundColor: '#4864c8'}}>
            <div className="inner" style={{flexWrap: 'wrap', justifyContent: 'flex-start'}}>
              <h1 style={{color: '#FFF', margin: 0}}> I need help with compliance</h1>
              <p style={{width: 400, color: '#FFF'}}> 
                Stay on top of your compliance obligations and learn how to set up your service to be a model of compliance
              </p>
            </div>
          </div>

          <div className="container" style={{paddingBottom: 50, alignItems: 'center', flexWrap: 'wrap', marginTop: 20}}>
            <div className="inner collapsible" style={{marginTop: -70, flexWrap: 'wrap'}}>

              <div className="fdc-box" style={{backgroundImage: `url(${Img1})`}}>
                <h2 > Stay up to date with the law, regulations and current issues</h2>
              </div>


              <div className="fdc-box" style={{backgroundImage: `url(${Img2})`}}>
                <h2 > Latest compliance advice</h2>
              </div>


              <div className="fdc-box" style={{backgroundImage: `url(${Img3})`}}>
                <h2 > What does a good family day care provider look like?</h2>
              </div>
            </div>
          </div>

          <div className="container flex-row">
            <div className="inner flex-row" style={{marginTop: 50, justifyContent: 'space-between', alignItems: 'flex-start'}}>
              <h2> Related Topics</h2>
            </div>
          </div>
          <div className="resources topics container flex-row">
            <div className="inner flex-row" style={{flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start'}}>

                  <a href="/content/?=9" className="flex-row border" style={{justifyContent: 'space-between'}}>
                    <div className="search-results" style={{width: '85%', paddingBottom: 0}}>
                      <div className="search-result" style={{width: '85%'}}>
                        <a > Record keeping and notifications</a>
                        <p style={{maxHeight: 70, overflow: 'hidden', lineHeight: 1.5}} >
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
                        <p style={{maxHeight: 70, overflow: 'hidden', lineHeight: 1.5}} >
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
