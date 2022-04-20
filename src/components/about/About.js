import React from 'react';
import './About.css';
import ME from '../../assets/me-about.jpg';
import {GiGiftOfKnowledge} from 'react-icons/gi';
import {FiUsers} from 'react-icons/fi';
import {BiCodeBlock} from 'react-icons/bi';


function About() {
  return (
    <section id="about">
       
       <h5>Get to know</h5>
       <h2>About Me</h2>


       <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="me"/>
                    </div>
                </div>
                

                <div className="about__content">
                    <div className="about__cards">

                        <article className="about__card">
                            <GiGiftOfKnowledge className="about__icon"/>
                                <h5>Experiences</h5>
                            <small> 3+ Years Working</small>
                        </article>

                        <article className="about__card">
                            <FiUsers className="about__icon"/>
                                <h5>Clients</h5>
                            <small>200+ Worldwide</small>
                        </article>

                        <article className="about__card">
                            <BiCodeBlock className="about__icon"/>
                                <h5>Projects</h5>
                            <small> 80+ Completed</small>
                        </article>
                    </div>

                    <p>
                      lorem jkasbdjkfajkjdajksfjkdas asdjk kf asjkdb ksjfkas 
                      djksjkuifrie fwuief iweuiw cic sicadi iusdiisdi sduisui 
                      disudui suidfyuerfuis biwi dfuie uir
                    </p>

                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
       </div>
    </section>
  )
}

export default About
