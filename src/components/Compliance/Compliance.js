import React, { Component } from "react";
import NavBar2 from '../NavBar2/NavBar2';
import Footer from '../footer/footer';
import Journey2 from '../Home/Journeys2.png';
import PopularShape from '../Home/PopularShape.png';
import ChevronRight from '../Home/chevron-right.svg';
import Img1 from './1.png';
import Img2 from './2.png';
import Img3 from './3.png';
import leftShape from './leftShape.svg';


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
                  <img alt="" style={{left: -600, top: 400}} src={leftShape} className="shapes-2 mobile-hidden-1700"/>

          <div className="banner container" style={{alignItems: 'center',  backgroundImage: `url(${Journey2})`, backgroundColor: '#4864c8'}}>
            <div className="inner" style={{flexWrap: 'wrap', justifyContent: 'flex-start'}}>
              <div style={{width: '100%'}}>
                <h1 style={{color: '#FFF', margin: 0}}> I need help with compliance</h1>
              </div>
              <p style={{width: 400, color: '#FFF'}}> 
                Stay on top of your compliance obligations and learn how to set up your service to be a model of compliance
              </p>
            </div>
          </div>

          <div className="container" style={{paddingBottom: 10, alignItems: 'center', flexWrap: 'wrap', marginTop: 20}}>
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
            <div className="inner flex-row" style={{marginTop: 0, justifyContent: 'space-between', alignItems: 'flex-start'}}>
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

            <div id="popular-section" className="resources container flex-row popular-section" style={{backgroundColor: '#1F2D76', flexWrap: 'wrap', paddingTop: 50, paddingBottom: 70, marginTop: 100}}>
                <div className="inner" style={{width: '100%', maxWidth: 'none'}}>
                      <div className="flex-row" style={{justifyContent: 'space-between', width: '100%', maxWidth: 1020}}>
                        <img src={PopularShape} style={{position: 'absolute', marginLeft: -81, marginTop: -53}}/>
                        <h1 style={{color: '#FFF', zIndex: 2}}>Relevant Resources</h1>
                        <h3 style={{cursor: 'pointer', color: '#FFF'}}> View All</h3>
                      </div>
                </div>
                
         
            <div className="container flex-row">
            <div className="inner flex-row" style={{marginTop: 0, justifyContent: 'space-between', alignItems: 'flex-start'}}>
              <div className="search-results flex-row" style={{width: '100%', flexWrap: 'wrap'}}>
                  <a href="https://fdc-prototype.s3.us-east-2.amazonaws.com/pdfs/1+Approach+to+compliance.pdf" className="flex-row border">
                    <div className="flex-row tags" >
                                    <div className="tag"> Poster </div> 
                                    <div className="tag"> Compliance </div> 
                                    <div className="tag"> For Providers </div> 
                      </div>
                    <div className="search-results" style={{width: '90%', paddingBottom: 0}}>
                      
                      <div className="search-result" style={{width: '90%'}}>
                        <a href="/">  Approach to compliance</a>
                        <p style={{maxHeight: 150, overflow: 'hidden', lineHeight: 1.5}} >
                          A poster on how the department actively monitors compliance
                        </p>
                      </div>
                    </div>

                    <img alt="view" src={ChevronRight} />
                  </a>


                  <a href="https://fdc-prototype.s3.us-east-2.amazonaws.com/pdfs/2+Response+to+non-compliance.pdf"  className="flex-row border">
                    <div className="search-results" style={{width: '90%', paddingBottom: 0}}>

                      <div className="flex-row tags" >
                        <div className="tag"> Poster </div> 
                        <div className="tag"> Compliance </div> 
                        <div className="tag"> For Providers </div> 
                      </div>
                      <div className="search-result" style={{width: '90%'}}>
                        <a href="/"> Response to non-compliance</a>
                        <p style={{maxHeight: 150, overflow: 'hidden', lineHeight: 1.5}} >
                          A poster on how the Department responds to non-compliance
                        </p>
                      </div>
                    </div>

                        <img alt="view" src={ChevronRight} />
                   </a>

                  <a href="https://fdc-prototype.s3.us-east-2.amazonaws.com/pdfs/3+What+does+good+compliance+look+like+for+an+FDC+provider.pdf" className="flex-row border">
                    <div className="search-results" style={{width: '90%', paddingBottom: 0}}>

                      <div className="flex-row tags" >
                        <div className="tag"> Checklist </div> 
                        <div className="tag"> Compliance </div> 
                        <div className="tag"> For Providers </div> 
                      </div>
                      <div className="search-result" style={{width: '90%'}}>
                        <a href="/">  What does good compliance look like for an FDC provider</a>
                        <p style={{maxHeight: 150, overflow: 'hidden', lineHeight: 1.5}} >
                          A self-assessment checklist for FDC providers on good compliance practices
                        </p>
                      </div>
                    </div>

                        <img alt="view" src={ChevronRight} />
                  </a>

                  <a href="https://fdc-prototype.s3.us-east-2.amazonaws.com/pdfs/4+What+does+good+compliance+look+like+for+an+FDC+educator.pdf" className="flex-row border">
                    <div className="search-results" style={{width: '90%', paddingBottom: 0}}>

                      <div className="flex-row tags" >
                        <div className="tag"> Checklist </div> 
                        <div className="tag"> Compliance </div> 
                        <div className="tag"> For educactors </div> 
                      </div>
                      <div className="search-result" style={{width: '90%'}}>
                        <a href="/">  What does good compliance look like for an FDC educator</a>
                        <p style={{maxHeight: 150, overflow: 'hidden', lineHeight: 1.5}} >
                          A self-assessment checklist for FDC educators on good compliance practices
                        </p>
                      </div>
                    </div>

                    <img alt="view" src={ChevronRight} />
                  </a>

                  <a href="https://fdc-prototype.s3.us-east-2.amazonaws.com/pdfs/5+What+does+good+compliance+look+like+for+a+family.pdf"  className="flex-row border">
                    <div className="search-results" style={{width: '90%', paddingBottom: 0}}>
                      <div className="flex-row tags" >
                        <div className="tag"> Checklist </div> 
                        <div className="tag"> Compliance </div> 
                        <div className="tag"> For educactors </div> 
                      </div>
                      <div className="search-result" style={{width: '90%'}}>
                        <a href="/">  What does good compliance look like for a family</a>
                        <p style={{maxHeight: 150, overflow: 'hidden', lineHeight: 1.5}} >
                          A self-assessment checklist for families on good compliance practices to look for in a provider
                        </p>
                      </div>
                    </div>

                        <img alt="view" src={ChevronRight} />
                  </a>


                



              </div>
            </div>
          </div>

          
          </div>

        <Footer/>
      </div>
    )
  }
}

export default Compliance;
