import React, { Component } from "react";
import NavBar2 from '../NavBar2/NavBar2';
import Footer from '../footer/footer';
import ChevronRight from '../Home/chevron-right.svg';
import PopularShape from '../Home/PopularShape.png';


class Topics extends Component {
  render() {
  return (
      <div className="resources topics">
          <NavBar2/>
          <div className="container flex-row">
            <div className="inner flex-row" style={{marginTop: 10, justifyContent: 'space-between', alignItems: 'flex-start'}}>
              <div className="flex-row" style={{width: '100%', flexWrap: 'wrap'}}>
                <h1 style={{color: '#FF6B77', width: '100%'}}> Topics </h1>
                <p style={{color: '#1F2D76', fontSize: 20}}> 
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam.
                </p>
              </div>
            </div>
          </div>
          <div className="container flex-row">
            <div className="inner flex-row" style={{marginTop: 10, justifyContent: 'space-between', alignItems: 'flex-start'}}>
              <h2> I am a new provider </h2>
            </div>
          </div>
          <div className="container flex-row">
            <div className="inner flex-row" style={{flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start'}}>

                  <a href="/content/?=0" className="flex-row border" style={{justifyContent: 'space-between'}}>
                    <div className="search-results" style={{width: '85%', paddingBottom: 0}}>
                      <div className="search-result" style={{width: '100%'}}>
                        <a > Becoming an approved provider</a>
                        <p >
                          The responsibilities of a child care provider and the key business requirements that are part of being a provider
                        </p>
                      </div>
                    </div>
                    <img style={{cursor: 'pointer'}} src={ChevronRight} alt="more"/>
                   </a>


                  <a href="/content/?=1" className="flex-row border" style={{justifyContent: 'space-between'}}>
                    <div className="search-results" style={{width: '85%', paddingBottom: 0}}>
                      <div className="search-result" style={{width: '100%'}}>
                        <a > Applying to be an approved provider</a>
                        <p >
                          Applying for approval for the first time, seeking to add or remove a service from the provider approval, and registration of personnel.
                        </p>
                      </div>
                    </div>
                    <img style={{cursor: 'pointer'}} src={ChevronRight} alt="more"/>
                   </a>


                  <a href="/content/?=2" className="flex-row border" style={{justifyContent: 'space-between'}}>
                    <div className="search-results" style={{width: '85%', paddingBottom: 0}}>
                      <div className="search-result" style={{width: '100%'}}>
                        <a > Provider and service eligibility</a>
                        <p >
                          Eligibility requirements that providers and services must meet to be eligible for approval under Family Assistance Law.
                        </p>
                      </div>
                    </div>
                    <img style={{cursor: 'pointer'}} src={ChevronRight} alt="more"/>
                   </a>


                  <a href="/content/?=3" className="flex-row border" style={{justifyContent: 'space-between'}}>
                    <div className="search-results" style={{width: '85%', paddingBottom: 0}}>
                      <div className="search-result" style={{width: '100%'}}>
                        <a> Exempt services</a>
                        <p >
                          Types of services that are not covered by the National Law and provides information on the requirements exempt services must meet.
                        </p>
                      </div>
                    </div>
                    <img style={{cursor: 'pointer'}} src={ChevronRight} alt="more"/>
                   </a>


                  <a href="/content/?=10" className="flex-row border" style={{justifyContent: 'space-between'}}>
                    <div className="search-results" style={{width: '85%', paddingBottom: 0}}>
                      <div className="search-result" style={{width: '100%'}}>
                        <a > Support for providers</a>
                        <p >
                          The Inclusion Support Program and the Community Child Care Fund (including Connected Beginnings) and how each program is delivered
                        </p>
                      </div>
                    </div>
                    <img style={{cursor: 'pointer'}} src={ChevronRight} alt="more"/>
                   </a>

             </div>
           </div>

          <div className="container flex-row">
            <div className="inner flex-row" style={{marginTop: 30, justifyContent: 'space-between', alignItems: 'flex-start'}}>
              <h2> I am operating a family day care service</h2>
            </div>
          </div>

          <div className="container flex-row">
            <div className="inner flex-row" style={{flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start'}}>

                  <a href="/content/?=4" className="flex-row border" style={{justifyContent: 'space-between'}}>
                    <div className="search-results" style={{width: '85%', paddingBottom: 0}}>
                      <div className="search-result" style={{width: '100%'}}>
                        <a >How child care subsidy is paid</a>
                        <p >
                          How Child Care Subsidy payment amounts are determined, how and when payments are made to providers, circumstances where payments are made to families, managing gap fees, reconciliation, overpayments and debt
                        </p>
                      </div>
                    </div>
                    <img style={{cursor: 'pointer'}} src={ChevronRight} alt="more"/>
                   </a>


                  <a href="/content/?=5" className="flex-row border" style={{justifyContent: 'space-between'}}>
                    <div className="search-results" style={{width: '85%', paddingBottom: 0}}>
                      <div className="search-result" style={{width: '100%'}}>
                        <a > Child care subsidy</a>
                        <p >
                          Child Care Subsidy policy, including your responsibilities under the program and the roles of the Department of Education and Centrelink.
                        </p>
                      </div>
                    </div>
                    <img style={{cursor: 'pointer'}} src={ChevronRight} alt="more"/>
                   </a>


                  <a href="/content/?=6" className="flex-row border" style={{justifyContent: 'space-between'}}>
                    <div className="search-results" style={{width: '85%', paddingBottom: 0}}>
                      <div className="search-result" style={{width: '100%'}}>
                        <a > Additional child care subsidy</a>
                        <p >
                          The different types of Additional Child Care Subsidy, when this subsidy is payable and the different rates.
                        </p>
                      </div>
                    </div>
                    <img style={{cursor: 'pointer'}} src={ChevronRight} alt="more"/>
                   </a>


                  <a href="/content/?=7" className="flex-row border" style={{justifyContent: 'space-between'}}>
                    <div className="search-results" style={{width: '85%', paddingBottom: 0}}>
                      <div className="search-result" style={{width: '100%'}}>
                        <a > Enrolling children</a>
                        <p >
                          Tge steps that need to be taken to put in place an arrangement with the individual responsible for the child - usually a parent - and the process for enrolling that child.
                        </p>
                      </div>
                    </div>
                    <img style={{cursor: 'pointer'}} src={ChevronRight} alt="more"/>
                   </a>


                  <a href="/content/?=8" className="flex-row border" style={{justifyContent: 'space-between'}}>
                    <div className="search-results" style={{width: '85%', paddingBottom: 0}}>
                      <div className="search-result" style={{width: '100%'}}>
                        <a > Managing and reporting sessions of care</a>
                        <p >
                          What a session of care is and what you need to do to ensure the sessions of care you provide are managed and reported correctly, and how to handle absences and business continuity payments.
                        </p>
                      </div>
                    </div>
                    <img style={{cursor: 'pointer'}} src={ChevronRight} alt="more"/>
                  </a>

                  <a href="/content/?=9" className="flex-row border" style={{justifyContent: 'space-between'}}>
                    <div className="search-results" style={{width: '85%', paddingBottom: 0}}>
                      <div className="search-result" style={{width: '100%'}}>
                        <a > Record keeping and notifications</a>
                        <p >
                          Your record-keeping responsibilities, including specific Family Day Care record-keeping requirements, and notifications that need to be made to comply with provider obligations.
                        </p>
                      </div>
                    </div>
                    <img style={{cursor: 'pointer'}} src={ChevronRight} alt="more"/>
                  </a>


             </div>
           </div>


          <div className="container flex-row">
            <div className="inner flex-row" style={{marginTop: 30, justifyContent: 'space-between', alignItems: 'flex-start'}}>
              <h2> I need help with compliance</h2>
            </div>
          </div>
          <div className="container flex-row">
            <div className="inner flex-row" style={{flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start'}}>

                  <a href="/content/?=9" className="flex-row border" style={{justifyContent: 'space-between'}}>
                    <div className="search-results" style={{width: '85%', paddingBottom: 0}}>
                      <div className="search-result" style={{width: '100%'}}>
                        <a > Record keeping and notifications</a>
                        <p >
                          Your record-keeping responsibilities, including specific Family Day Care record-keeping requirements, and notifications that need to be made to comply with provider obligations.
                        </p>
                      </div>
                    </div>
                    <img style={{cursor: 'pointer'}} src={ChevronRight} alt="more"/>
                  </a>


                  <a href="/content/?=11" className="flex-row border" style={{justifyContent: 'space-between'}}>
                    <div className="search-results" style={{width: '85%', paddingBottom: 0}}>
                      <div className="search-result" style={{width: '100%'}}>
                        <a > Compliance</a>
                        <p >
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

export default Topics;
