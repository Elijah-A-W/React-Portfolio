import React from 'react';
import './Experience.css';
import { BsFillPatchCheckFill } from 'react-icons/bs';

function experience() {
  return (
    <section id="experience">
        <h5>What skills i have</h5>
        <h2>My skills</h2> 


        <div className="container experience__container">
                <div className="experience__frontend">
                      <h3>Frontend Development</h3>

                      <div className="experience__content">
                              <articles className="experience__details">
                                  <BsFillPatchCheckFill className="experience__details-icon"/>
                              <div>
                                  <h4>HTML</h4>
                                  <small className="text-light">Experienced</small> 
                              </div>    
                              </articles>
                              <articles className="experience__details">
                                  <BsFillPatchCheckFill className="experience__details-icon"/>
                                  <div>
                                    <h4>CSS</h4>
                                    <small className="text-light">Intermediate</small>
                                  </div>
                              </articles>
                              <articles className="experience__details">
                                  <BsFillPatchCheckFill className="experience__details-icon"/>
                                <div>  
                                  <h4>JavaScript</h4>
                                  <small className="text-light">Experienced</small>
                                </div>
                              </articles>
                              <articles className="experience__details">
                                  <BsFillPatchCheckFill className="experience__details-icon"/>
                                <div>  
                                  <h4>React</h4>
                                  <small className="text-light">Beginner</small>
                                </div>  
                              </articles>
                              <articles className="experience__details">
                                  <BsFillPatchCheckFill className="experience__details-icon"/>
                                <div>  
                                  <h4>Bootstrap</h4>
                                  <small className="text-light">Intermediate</small>
                                </div>  
                              </articles>
                      </div>
                </div>

                <div className="experience__backend">
                        <h3>Backend Development</h3> 

                        <div className="experience__content">
                                    <articles className="experience__details">
                                        <BsFillPatchCheckFill className="experience__details-icon"/>
                                    <div>    
                                        <h4>MySQl</h4>
                                        <small className="text-light">Intermediate</small>
                                    </div>
                                    </articles>
                                    <articles className="experience__details">
                                        <BsFillPatchCheckFill className="experience__details-icon"/>
                                      <div>
                                        <h4>Flask</h4>
                                        <small className="text-light">Intermediate</small>
                                      </div>
                                    </articles>
                                    <articles className="experience__details">
                                        <BsFillPatchCheckFill className="experience__details-icon"/>
                                      <div>  
                                        <h4>Github</h4>
                                        <small className="text-light">Experienced</small>
                                      </div>
                                    </articles>
                                    <articles className="experience__details">
                                        <BsFillPatchCheckFill className="experience__details-icon"/>
                                      <div>  
                                        <h4>Machine Learning</h4>
                                        <small className="text-light">Beginner</small>
                                      </div>
                                    </articles>
                                    <articles className="experience__details">
                                        <BsFillPatchCheckFill className="experience__details-icon"/>
                                      <div>
                                        <h4>Javascript</h4>
                                        <small className="text-light">Intermediate</small>
                                      </div>
                                    </articles>
                        </div>  
                </div>
        </div>


    </section>
  )
}

export default experience
