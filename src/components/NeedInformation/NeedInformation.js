import React, { Component } from "react";
import NavBar2 from '../NavBar2/NavBar2';
import Footer from '../footer/footer';
import Journey1 from '../Home/Journeys1.png';
import Journey3 from '../Home/Journeys3.png';
import Img1 from './1.png';
import Img2 from './2.png';
import Img3 from './3.png';
import PopularShape from '../Home/PopularShape.png';
import ChevronRight from '../Home/chevron-right.svg';
import leftShape from './leftShape.svg';


let tags = [
  {text: "Becoming an approved provider"},
  {text: "Applying to become an approved provider"},
  {text: "Provider and service eligibility"},
  {text: "Exempt services"},
]
class NeedInformation extends Component {
  render() {
    return (
      <div className="new-provider">
        <NavBar2/> 
          <img alt="" style={{left: -600, top: 400}} src={leftShape} className="shapes-2 mobile-hidden-1700"/>

          <div className="banner container" style={{alignItems: 'center', backgroundImage:  `url(${Journey3}`}}>
            <div className="inner" style={{flexWrap: 'wrap', justifyContent: 'flex-start'}}>
              <div style={{width: '100%'}}>
              <h1 style={{color: '#FFF', margin: 0}}> I am operating a family day care service</h1>
              </div>
              <p style={{width: 400}}> 
                Stay on top of your compliance obligations and updates to legislation and rules
              </p>
            </div>
          </div>

          <div className="container" style={{paddingBottom: 10, alignItems: 'center', flexWrap: 'wrap', marginTop: 20}}>
            <div className="inner collapsible" style={{marginTop: -70, flexWrap: 'wrap'}}>

              <div className="fdc-box" style={{backgroundImage: `url(${Img1})`}}>
                <h2 > Stay up to date with the law, regulations and current issues</h2>
              </div>


              <div className="fdc-box" style={{backgroundImage: `url(${Img2})`}}>
                <h2 > Check the rules for my situation</h2>
              </div>


              <div className="fdc-box" style={{backgroundImage: `url(${Img3})`}}>
                <h2 > Resources to explain family day care to Educators and Families</h2>
              </div>

            </div>
          </div>

          <div className="resources topics container flex-row">
            <div className="inner flex-row" style={{flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start'}}>
                  <h2 style={{zIndex: 2, width: '100%'}}> Related Topics</h2>

                  <a href="/content/?=4" className="flex-row border" style={{justifyContent: 'space-between'}}>
                    <div className="search-results" style={{width: '85%', paddingBottom: 0}}>
                      <div className="search-result" style={{width: '85%'}}>
                        <a >How child care subsidy is paid</a>
                        <p style={{maxHeight: 70, overflow: 'hidden', lineHeight: 1.5}} >
                          How Child Care Subsidy payment amounts are determined, how and when payments are made to providers, circumstances where payments are made to families, managing gap fees, reconciliation, overpayments and debt
                        </p>
                      </div>
                    </div>
                    <img style={{cursor: 'pointer'}} src={ChevronRight} alt="more"/>
                   </a>


                  <a href="/content/?=5" className="flex-row border" style={{justifyContent: 'space-between'}}>
                    <div className="search-results" style={{width: '85%', paddingBottom: 0}}>
                      <div className="search-result" style={{width: '85%'}}>
                        <a > Child care subsidy</a>
                        <p style={{maxHeight: 70, overflow: 'hidden', lineHeight: 1.5}} >
                          Child Care Subsidy policy, including your responsibilities under the program and the roles of the Department of Education and Centrelink.
                        </p>
                      </div>
                    </div>
                    <img style={{cursor: 'pointer'}} src={ChevronRight} alt="more"/>
                   </a>


                  <a href="/content/?=6" className="flex-row border" style={{justifyContent: 'space-between'}}>
                    <div className="search-results" style={{width: '85%', paddingBottom: 0}}>
                      <div className="search-result" style={{width: '85%'}}>
                        <a > Additional child care subsidy</a>
                        <p style={{maxHeight: 70, overflow: 'hidden', lineHeight: 1.5}} >
                          The different types of Additional Child Care Subsidy, when this subsidy is payable and the different rates.
                        </p>
                      </div>
                    </div>
                    <img style={{cursor: 'pointer'}} src={ChevronRight} alt="more"/>
                   </a>


                  <a href="/content/?=7" className="flex-row border" style={{justifyContent: 'space-between'}}>
                    <div className="search-results" style={{width: '85%', paddingBottom: 0}}>
                      <div className="search-result" style={{width: '85%'}}>
                        <a > Enrolling children</a>
                        <p style={{maxHeight: 70, overflow: 'hidden', lineHeight: 1.5}} >
                          Tge steps that need to be taken to put in place an arrangement with the individual responsible for the child - usually a parent - and the process for enrolling that child.
                        </p>
                      </div>
                    </div>
                    <img style={{cursor: 'pointer'}} src={ChevronRight} alt="more"/>
                   </a>


                  <a href="/content/?=8" className="flex-row border" style={{justifyContent: 'space-between'}}>
                    <div className="search-results" style={{width: '85%', paddingBottom: 0}}>
                      <div className="search-result" style={{width: '85%'}}>
                        <a > Managing and reporting sessions of care</a>
                        <p style={{maxHeight: 70, overflow: 'hidden', lineHeight: 1.5}} >
                          What a session of care is and what you need to do to ensure the sessions of care you provide are managed and reported correctly, and how to handle absences and business continuity payments.
                        </p>
                      </div>
                    </div>
                    <img style={{cursor: 'pointer'}} src={ChevronRight} alt="more"/>
                  </a>

                  <a href="/content/?=9" className="flex-row border" style={{justifyContent: 'space-between'}}>
                    <div className="search-results" style={{width: '85%', paddingBottom: 0}}>
                      <div className="search-result" style={{width: '85%'}}>
                        <a > Record keeping and notifications</a>
                        <p style={{maxHeight: 70, overflow: 'hidden', lineHeight: 1.5}} >
                          Your record-keeping responsibilities, including specific Family Day Care record-keeping requirements, and notifications that need to be made to comply with provider obligations.
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

          
          </div>


        <Footer/>
      </div>
    )
  }
}

export default NeedInformation;
