import React, { Component } from "react";

import NavBar2 from '../NavBar2/NavBar2';
import Footer from '../footer/footer';
import ChevronRight from '../Home/chevron-right.svg';
import PopularShape from '../Home/PopularShape.png';

class Resources extends Component {
  render() {
    return (
      <div className="resources">
          <NavBar2/>
          <div className="container flex-row">
            <div className="inner flex-row" style={{marginTop: 80, justifyContent: 'space-between', alignItems: 'flex-start'}}>
              <div className="search-results flex-row" style={{width: '100%', flexWrap: 'wrap'}}>
                  <h1 style={{color: '#FF6B77', width: '100%'}}> Resources </h1>
                  <div className="flex-row border">
                    <div className="search-results" style={{width: '85%', paddingBottom: 0}}>
                      <div className="search-result" style={{width: '85%'}}>
                        <a href="/">  Approach to compliance</a>
                        <p style={{maxHeight: 150, overflow: 'hidden', lineHeight: 1.5}} >
                          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
                        </p>
                        <div className="flex-row" >
                          <div className="tag"> Poster </div> 
                          <div className="tag"> Compliance </div> 
                          <div className="tag"> For Providers </div> 
                        </div>
                      </div>
                    </div>

                    <div style={{width: '15%'}} className="also-asked">
                      <a href="https://fdc-prototype.s3.us-east-2.amazonaws.com/pdfs/1+Approach+to+compliance.pdf" className="fdc-box3" style={{width: '100%', margin: 0, marginBottom: 15}}>
                        View
                        <img src={ChevronRight} style={{width: 8}}/>
                      </a>
                      <a href="/https://fdc-prototype.s3.us-east-2.amazonaws.com/pdfs/1+Approach+to+compliance.pdf" download className="fdc-box3" style={{width: '100%', margin: 0, marginBottom: 15}}>
                        Download
                        <img src={ChevronRight} style={{width: 8}}/>
                      </a>
                    </div>
                  </div>


                  <div className="flex-row border">
                    <div className="search-results" style={{width: '85%', paddingBottom: 0}}>
                      <div className="search-result" style={{width: '85%'}}>
                        <a href="/"> Response to non-compliance</a>
                        <p style={{maxHeight: 150, overflow: 'hidden', lineHeight: 1.5}} >
                          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
                        </p>
                        <div className="flex-row" >
                          <div className="tag"> Poster </div> 
                          <div className="tag"> Compliance </div> 
                          <div className="tag"> For Providers </div> 
                        </div>
                      </div>
                    </div>

                    <div style={{width: '15%'}} className="also-asked">
                      <a href="https://fdc-prototype.s3.us-east-2.amazonaws.com/pdfs/2+Response+to+non-compliance.pdf" className="fdc-box3" style={{width: '100%', margin: 0, marginBottom: 15}}>
                        View
                        <img src={ChevronRight} style={{width: 8}}/>
                      </a>
                      <a href="https://fdc-prototype.s3.us-east-2.amazonaws.com/pdfs/2+Response+to+non-compliance.pdf" download className="fdc-box3" style={{width: '100%', margin: 0, marginBottom: 15}}>
                        Download
                        <img src={ChevronRight} style={{width: 8}}/>
                      </a>
                    </div>
                   </div>

                  <div className="flex-row border">
                    <div className="search-results" style={{width: '85%', paddingBottom: 0}}>
                      <div className="search-result" style={{width: '85%'}}>
                        <a href="/">  What does good compliance look like for an FDC provider</a>
                        <p style={{maxHeight: 150, overflow: 'hidden', lineHeight: 1.5}} >
                          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
                        </p>
                        <div className="flex-row" >
                          <div className="tag"> Checklist </div> 
                          <div className="tag"> Compliance </div> 
                          <div className="tag"> For Providers </div> 
                        </div>
                      </div>
                    </div>

                    <div style={{width: '15%'}} className="also-asked">
                      <a href="https://fdc-prototype.s3.us-east-2.amazonaws.com/pdfs/3+What+does+good+compliance+look+like+for+an+FDC+provider.pdf" className="fdc-box3" style={{width: '100%', margin: 0, marginBottom: 15}}>
                        View
                        <img src={ChevronRight} style={{width: 8}}/>
                      </a>
                      <a href="https://fdc-prototype.s3.us-east-2.amazonaws.com/pdfs/3+What+does+good+compliance+look+like+for+an+FDC+provider.pdf" download className="fdc-box3" style={{width: '100%', margin: 0, marginBottom: 15}}>
                        Download
                        <img src={ChevronRight} style={{width: 8}}/>
                      </a>
                    </div>
                  </div>

                  <div className="flex-row border">
                    <div className="search-results" style={{width: '85%', paddingBottom: 0}}>
                      <div className="search-result" style={{width: '85%'}}>
                        <a href="/">  What does good compliance look like for an FDC educator</a>
                        <p style={{maxHeight: 150, overflow: 'hidden', lineHeight: 1.5}} >
                          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
                        </p>
                        <div className="flex-row" >
                          <div className="tag"> Checklist </div> 
                          <div className="tag"> Compliance </div> 
                          <div className="tag"> For educactors </div> 
                        </div>
                      </div>
                    </div>

                    <div style={{width: '15%'}} className="also-asked">
                      <a href="https://fdc-prototype.s3.us-east-2.amazonaws.com/pdfs/4+What+does+good+compliance+look+like+for+an+FDC+educator.pdf" className="fdc-box3" style={{width: '100%', margin: 0, marginBottom: 15}}>
                        View
                        <img src={ChevronRight} style={{width: 8}}/>
                      </a>
                      <a href="https://fdc-prototype.s3.us-east-2.amazonaws.com/pdfs/4+What+does+good+compliance+look+like+for+an+FDC+educator.pdf" download className="fdc-box3" style={{width: '100%', margin: 0, marginBottom: 15}}>
                        Download
                        <img src={ChevronRight} style={{width: 8}}/>
                      </a>
                    </div>
                  </div>

                  <div className="flex-row border">
                    <div className="search-results" style={{width: '85%', paddingBottom: 0}}>
                      <div className="search-result" style={{width: '85%'}}>
                        <a href="/">  What does good compliance look like for a family</a>
                        <p style={{maxHeight: 150, overflow: 'hidden', lineHeight: 1.5}} >
                          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
                        </p>
                        <div className="flex-row" >
                          <div className="tag"> Checklist </div> 
                          <div className="tag"> Compliance </div> 
                          <div className="tag"> For educactors </div> 
                        </div>
                      </div>
                    </div>

                    <div style={{width: '15%'}} className="also-asked">
                      <a href="https://fdc-prototype.s3.us-east-2.amazonaws.com/pdfs/5+What+does+good+compliance+look+like+for+a+family.pdf" className="fdc-box3" style={{width: '100%', margin: 0, marginBottom: 15}}>
                        View
                        <img src={ChevronRight} style={{width: 8}}/>
                      </a>
                      <a href="https://fdc-prototype.s3.us-east-2.amazonaws.com/pdfs/5+What+does+good+compliance+look+like+for+a+family.pdf" download className="fdc-box3" style={{width: '100%', margin: 0, marginBottom: 15}}>
                        Download
                        <img src={ChevronRight} style={{width: 8}}/>
                      </a>
                    </div>
                  </div>


                  <div className="flex-row border">
                    <div className="search-results" style={{width: '85%', paddingBottom: 0}}>
                      <div className="search-result" style={{width: '85%'}}>
                        <a href="/">  Caring for a relative </a>
                        <p style={{maxHeight: 150, overflow: 'hidden', lineHeight: 1.5}} >
                          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
                        </p>
                        <div className="flex-row" >
                          <div className="tag"> Fact sheet </div> 
                          <div className="tag"> Relatives </div> 
                          <div className="tag"> For Providers </div> 
                          <div className="tag"> For Educators</div> 
                        </div>
                      </div>
                    </div>

                    <div style={{width: '15%'}} className="also-asked">
                      <a href="https://fdc-prototype.s3.us-east-2.amazonaws.com/pdfs/6+Caring+for+a+relative+.pdf" className="fdc-box3" style={{width: '100%', margin: 0, marginBottom: 15}}>
                        View
                        <img src={ChevronRight} style={{width: 8}}/>
                      </a>
                      <a href="https://fdc-prototype.s3.us-east-2.amazonaws.com/pdfs/6+Caring+for+a+relative+.pdf" download className="fdc-box3" style={{width: '100%', margin: 0, marginBottom: 15}}>
                        Download
                        <img src={ChevronRight} style={{width: 8}}/>
                      </a>
                    </div>
                   </div>

                  <div className="flex-row border">
                    <div className="search-results" style={{width: '85%', paddingBottom: 0}}>
                      <div className="search-result" style={{width: '85%'}}>
                        <a href="/">  Going away</a>
                        <p style={{maxHeight: 150, overflow: 'hidden', lineHeight: 1.5}} >
                          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
                        </p>
                        <div className="flex-row" >
                          <div className="tag"> Overseas</div> 
                          <div className="tag"> Relatives </div> 
                          <div className="tag"> For Providers </div> 
                          <div className="tag"> For Educators</div> 
                        </div>
                      </div>
                    </div>

                    <div style={{width: '15%'}} className="also-asked">
                      <a href="https://fdc-prototype.s3.us-east-2.amazonaws.com/pdfs/7+Going+away.pdf" className="fdc-box3" style={{width: '100%', margin: 0, marginBottom: 15}}>
                        View
                        <img src={ChevronRight} style={{width: 8}}/>
                      </a>
                      <a href="https://fdc-prototype.s3.us-east-2.amazonaws.com/pdfs/7+Going+away.pdf" download className="fdc-box3" style={{width: '100%', margin: 0, marginBottom: 15}}>
                        Download
                        <img src={ChevronRight} style={{width: 8}}/>
                      </a>
                    </div>
                   </div>

                  <div className="flex-row border">
                    <div className="search-results" style={{width: '85%', paddingBottom: 0}}>
                      <div className="search-result" style={{width: '85%'}}>
                        <a href="/">  Having visitors over</a>
                        <p style={{maxHeight: 150, overflow: 'hidden', lineHeight: 1.5}} >
                          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
                        </p>
                        <div className="flex-row" >
                          <div className="tag"> Fact sheet </div> 
                          <div className="tag"> Visitors </div> 
                          <div className="tag"> For Providers </div> 
                          <div className="tag"> For Educators</div> 
                        </div>
                      </div>
                    </div>

                    <div style={{width: '15%'}} className="also-asked">
                      <a href="https://fdc-prototype.s3.us-east-2.amazonaws.com/pdfs/8+Having+visitors+over.pdf" className="fdc-box3" style={{width: '100%', margin: 0, marginBottom: 15}}>
                        View
                        <img src={ChevronRight} style={{width: 8}}/>
                      </a>
                      <a href="https://fdc-prototype.s3.us-east-2.amazonaws.com/pdfs/8+Having+visitors+over.pdf" download className="fdc-box3" style={{width: '100%', margin: 0, marginBottom: 15}}>
                        Download
                        <img src={ChevronRight} style={{width: 8}}/>
                      </a>
                    </div>
                   </div>

                  <div className="flex-row border">
                    <div className="search-results" style={{width: '85%', paddingBottom: 0}}>
                      <div className="search-result" style={{width: '85%'}}>
                        <a href="/">  When a child is absent</a>
                        <p style={{maxHeight: 150, overflow: 'hidden', lineHeight: 1.5}} >
                          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
                        </p>
                        <div className="flex-row" >
                          <div className="tag"> Fact sheet </div> 
                          <div className="tag"> Absences </div> 
                          <div className="tag"> For Providers </div> 
                          <div className="tag"> For Educators</div> 
                        </div>
                      </div>
                    </div>

                    <div style={{width: '15%'}} className="also-asked">
                      <a href="https://fdc-prototype.s3.us-east-2.amazonaws.com/pdfs/9+When+a+child+is+absent.pdf" className="fdc-box3" style={{width: '100%', margin: 0, marginBottom: 15}}>
                        View
                        <img src={ChevronRight} style={{width: 8}}/>
                      </a>
                      <a href="https://fdc-prototype.s3.us-east-2.amazonaws.com/pdfs/9+When+a+child+is+absent.pdf" download className="fdc-box3" style={{width: '100%', margin: 0, marginBottom: 15}}>
                        Download
                        <img src={ChevronRight} style={{width: 8}}/>
                      </a>
                    </div>
                  </div>



              </div>
            </div>
          </div>

          <div className="container flex-row popular-section" style={{backgroundColor: '#1F2D76', flexWrap: 'wrap', paddingTop: 50, paddingBottom: 70}}>
            <div className="inner" style={{width: '100%', maxWidth: 'none'}}>
              <div className="flex-row" style={{justifyContent: 'space-between', width: '100%', maxWidth: 1020}}>
                <img src={PopularShape} style={{position: 'absolute', marginLeft: -81, marginTop: -53}}/>
                <h1 style={{color: '#FFF', zIndex: 2}}> Popular Topics </h1>
                <h2 style={{cursor: 'pointer', color: '#FFF'}}> View All</h2>
              </div>
            </div>
            <div className="inner flex-row" style={{flexWrap: 'wrap'}}>
                  <a href="/content" className="fdc-box3">
                    Become An Approved Provider
                    <img src={ChevronRight} style={{width: 8}}/>
                  </a>
                  <a href="/content" className="fdc-box3">
                    Set Up A Service
                    <img src={ChevronRight} style={{width: 8}}/>
                  </a>
                  <a href="/content" className="fdc-box3">
                    Enrol Children 
                    <img src={ChevronRight} style={{width: 8}}/>
                  </a>
                  <a href="/content" className="fdc-box3">
                    Report Sessions Of Care
                    <img src={ChevronRight} style={{width: 8}}/>
                  </a>
            </div>
          </div>

          <Footer/>
      </div> 
  )
  }
}

export default Resources;
