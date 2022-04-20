import React from 'react';
import './Contact.css';
import { MdOutlineMarkEmailUnread } from 'react-icons/md';
import { FaTwitter } from 'react-icons/fa';
import { FaDev } from 'react-icons/fa';


function Contact() {
  return (
    <section id="contact">
        <h5>Fet In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact__container">
              <div className="contact__options">

                  <article className="contact__option">
                    <MdOutlineMarkEmailUnread className="contact__option-icon"/>
                    <h4>Email</h4>
                    <h5>elijah@gmail.com</h5>
                    <a href="mailto:elijah@gmail.com">Email me</a>
                  </article>

                  <article className="contact__option">
                    <FaTwitter className="contact__option-icon"/>
                    <h4>twitter</h4>
                    <h5>wandulu elijah</h5>
                    <a href="https://twitter.com/ElijahWandulu">Let's Tweet</a>
                  </article>

                  <article className="contact__option">
                    <FaDev className="contact__option-icon"/>
                    <h4>DevCommunity</h4>
                    <h5>Elijah-A-W</h5>
                    <a href="https://dev.to/elijahaw">Contribute To My Blog</a>
                  </article>
              </div>

              <form action="">
                <input type='text' name='name' placeholder='Your Full Name' required/>
                <input type='email' name='email' placeholder='Your Email' required/>
                <textarea name='message' rows="7" placeholder="Your Message"> </textarea>
                <button type='submit' className='btn btn-primary'>Send Message</button>             
              </form>
        </div>
    </section>
  )
}

export default Contact