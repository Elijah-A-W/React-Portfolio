import React from 'react';
import './Testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';



function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container"> 
            <article className="testimonial">
              <div className="client__avatar">
                <img src={AVTR1} alt="Avatar one"/>
              </div>

              <h5 className="client__name">Erick Tenhag</h5>
                <small className="client__review">
                  lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
                  lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
                </small>
            </article>

            <article className="testimonial">
              <div className="client__avatar">
                <img src={AVTR2} alt="Avatar one"/>
              </div>

              <h5 className="client__name">Erick Tenhag</h5>
                <small className="client__review">
                  lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
                  lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
              </small>
            </article>

            <article className="testimonial">
              <div className="client__avatar">
                <img src={AVTR3} alt="Avatar one"/>
              </div>

              <h5 className="client__name">Erick Tenhag</h5>
                <small className="client__review">
                  lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
                  lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
              </small>
            </article>

            <article className="testimonial">
              <div className="client__avatar">
                <img src={AVTR4} alt="Avatar one"/>
              </div>

              <h5 className="client__name">Erick Tenhag</h5>
                <small className="client__review">
                  lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
                  lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
              </small>
            </article>
      </div>
    </section>
  )
}

export default Testimonials
