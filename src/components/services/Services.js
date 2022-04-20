import React from 'react';
import './Services.css';
import {BiCheck} from 'react-icons/bi';

function Services() {
  return (
    <section id="services">
        <h5>What I offer</h5>
        <h2>Services</h2>

        <div className="container service__container">

            <article className="service">
                    <div className="service__head">
                      <h3>UI/UX Design</h3>
                    </div>

                    <ul className='service__list'>
                      <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Lorem are the most common random texts</p>
                      </li>
                      <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Lorem are the most common random texts</p>
                      </li>
                      <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Lorem are the most common random texts</p>
                      </li>
                      <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Lorem are the most common random text</p>
                      </li>
                      <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Lorem are the most common random texts</p>
                      </li>
                      <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Lorem are the most common random texts</p>
                      </li>
                    </ul>
            </article>

            <article className="service">
                    <div className="service__head">
                      <h3>Machine Learning</h3>
                    </div>

                    <ul className='service__list'>
                      <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Lorem are the most common random texts</p>
                      </li>
                      <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Lorem are the most common random texts</p>
                      </li>
                      <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Lorem are the most common random texts</p>
                      </li>
                      <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Lorem are the most common random text</p>
                      </li>
                      <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Lorem are the most common random texts</p>
                      </li>
                      <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Lorem are the most common random texts</p>
                      </li>
                      <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Lorem are the most common random texts</p>
                      </li>
                    </ul>
            </article>

            <article className="service">
                    <div className="service__head">
                      <h3>Content Creation</h3>
                    </div>

                    <ul className='service__list'>
                      <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Lorem are the most common random texts</p>
                      </li>
                      <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Lorem are the most common random texts</p>
                      </li>
                      <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Lorem are the most common random texts</p>
                      </li>
                      <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Lorem are the most common random text</p>
                      </li>
                      <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Lorem are the most common random texts</p>
                      </li>
                      <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Lorem are the most common random texts</p>
                      </li>
                    </ul>
            </article>
        </div>
    </section>
  )
}

export default Services
