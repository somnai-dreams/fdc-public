import React, { Component } from "react";

import NavBar2 from '../NavBar2/NavBar2';
import Footer from '../footer/footer';
import ChevronRight from '../Home/chevron-right.svg';
import PopularShape from '../Home/PopularShape.png';
import leftShape from './leftShape.svg';

class Resources extends Component {
  render() {
    return (
      <div className="resources">
          <NavBar2/>
            <div className="container flex-row">
            <div className="inner flex-row" style={{marginTop: 10, justifyContent: 'space-between', alignItems: 'flex-start'}}>
              <div className="flex-row" style={{width: '100%', flexWrap: 'wrap'}}>
                <h1 style={{color: '#f7626e', width: '100%'}}> Resources </h1>
                <p style={{color: '#1F2D76', fontSize: 20}}> 
                  Download printable resources to help you talk about your compliance obligations with educators and families.
                </p>
              </div>
            </div>
          </div>
          <img alt="" style={{left: -600, top: 100}} src={leftShape} className="shapes-2 mobile-hidden-1700"/>
          <div className="container flex-row">
            <div className="inner flex-row" style={{marginTop: 10, justifyContent: 'space-between', alignItems: 'flex-start'}}>
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


                  <a href="https://fdc-prototype.s3.us-east-2.amazonaws.com/pdfs/6+Caring+for+a+relative+.pdf"  className="flex-row border">
                    <div className="search-results" style={{width: '90%', paddingBottom: 0}}>
                      <div className="flex-row tags" >
                        <div className="tag"> Fact sheet </div> 
                        <div className="tag"> Relatives </div> 
                        <div className="tag"> For Providers </div> 
                        <div className="tag"> For Educators</div> 
                      </div>
                      <div className="search-result" style={{width: '90%'}}>
                        <a href="/">  Caring for a relative </a>
                        <p style={{maxHeight: 150, overflow: 'hidden', lineHeight: 1.5}} >
                          A fact sheet on the rules around caring for relatives as an FDC educator
                        </p>
                      </div>
                    </div>

                        <img alt="view" src={ChevronRight} />
                   </a>

                  <a href="https://fdc-prototype.s3.us-east-2.amazonaws.com/pdfs/7+Going+away.pdf"  className="flex-row border">
                    <div className="search-results" style={{width: '90%', paddingBottom: 0}}>

                      <div className="flex-row tags" >
                        <div className="tag"> Overseas</div> 
                        <div className="tag"> Relatives </div> 
                        <div className="tag"> For Providers </div> 
                        <div className="tag"> For Educators</div> 
                      </div>
                      <div className="search-result" style={{width: '90%'}}>
                        <a href="/">  Going away</a>
                        <p style={{maxHeight: 150, overflow: 'hidden', lineHeight: 1.5}} >
                          A fact sheet on what to do if you're taking a break as an FDC educator
                        </p>
                      </div>
                    </div>

                    <img alt="view" src={ChevronRight} />
                   </a>

                  <a href="https://fdc-prototype.s3.us-east-2.amazonaws.com/pdfs/8+Having+visitors+over.pdf"  className="flex-row border">
                    <div className="search-results" style={{width: '90%', paddingBottom: 0}}>
                      <div className="flex-row tags" >
                        <div className="tag"> Fact sheet </div> 
                        <div className="tag"> Visitors </div> 
                        <div className="tag"> For Providers </div> 
                        <div className="tag"> For Educators</div> 
                      </div>
                      <div className="search-result" style={{width: '90%'}}>
                        <a href="/">  Having visitors over</a>
                        <p style={{maxHeight: 150, overflow: 'hidden', lineHeight: 1.5}} >
                          A fact sheet on what to do if you have visitors over to your FDC home
                        </p>
                      </div>
                    </div>

                    <img alt="view" src={ChevronRight} />
                   </a>

                  <a href="https://fdc-prototype.s3.us-east-2.amazonaws.com/pdfs/9+When+a+child+is+absent.pdf"  className="flex-row border">
                    <div className="search-results" style={{width: '90%', paddingBottom: 0}}>
                      <div className="flex-row tags" >
                        <div className="tag"> Fact sheet </div> 
                        <div className="tag"> Absences </div> 
                        <div className="tag"> For Providers </div> 
                        <div className="tag"> For Educators</div> 
                      </div>
                      <div className="search-result" style={{width: '90%'}}>
                        <a href="/">  When a child is absent</a>
                        <p style={{maxHeight: 150, overflow: 'hidden', lineHeight: 1.5}} >
                          A fact sheet on what to do when a child is absent from your FDC service
                        </p>
                      </div>
                    </div>
                    <img alt="view" src={ChevronRight} />
                  </a>



              </div>
            </div>
          </div>

          <div className="container flex-row popular-section" style={{zIndex: -2, backgroundColor: '#1F2D76', flexWrap: 'wrap', paddingTop: 50, paddingBottom: 70}}>
            <div className="inner" style={{width: '100%', maxWidth: 'none'}}>
              <div className="flex-row" style={{justifyContent: 'space-between', width: '100%', maxWidth: 1020}}>
                <img alt="" src={PopularShape} style={{position: 'absolute', marginLeft: -81, marginTop: -53}}/>
                <h1 style={{color: '#FFF', zIndex: 2}}> Popular Topics </h1>
                <h2 style={{cursor: 'pointer', color: '#FFF'}}> View All</h2>
              </div>
            </div>
            <div className="inner flex-row" style={{flexWrap: 'wrap'}}>
                  <a href="/content?=0" className="fdc-box3">
                    Become An Approved Provider
                    <img alt="view" src={ChevronRight} style={{width: 8}}/>
                  </a>
                  <a href="/content?=1" className="fdc-box3">
                    Set Up A Service
                    <img alt="view" src={ChevronRight} style={{width: 8}}/>
                  </a>
                  <a href="/content?=2" className="fdc-box3">
                    Enrol Children 
                    <img alt="view" src={ChevronRight} style={{width: 8}}/>
                  </a>
                  <a href="/content?=3" className="fdc-box3">
                    Report Sessions Of Care
                    <img alt="view"  src={ChevronRight} style={{width: 8}}/>
                  </a>
            </div>
          </div>

          <Footer/>
      </div> 
  )
  }
}

export default Resources;
