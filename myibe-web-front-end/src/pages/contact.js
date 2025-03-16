// src/NewPage.js

import React from 'react';
import AnimatedText from '../components/AnimatedText';

const contact = () => {
  return (
    <section className="contact_section layout_padding">
    <div className="container">
      <div className="d-flex flex-column">
        <div className="custom_heading-container">
          
          <h2>
          <AnimatedText> Contact Us</AnimatedText>
          </h2>
        </div>
      </div>
      <div className="layout_padding-top layout_padding2-bottom">
        <div className="row">
          <div className="col-md-7">
            <form action="">
            <AnimatedText>
              <div className="contact_form-container">
                <div>
                  <div>
                    <input type="text" placeholder="Name" />
                  </div>
                  <div>
                    <input type="email" placeholder="Email" />
                  </div>
                  <div>
                    <input type="text" placeholder="Phone Number" />
                  </div>
                  <div className="">
                    <input type="text" placeholder="Message" className="message_input" />
                  </div>
                  <div className="mt-5">
                  <div className="quote_btn-container mr-2 d-flex justify-content-center">
                <div>
                  <span className="nav-btn mb-4">
                    Send
                    <div className="star-1">
                      <svg viewBox="0 0 784.11 815.53" className="star-svg">
                        <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
                      </svg>
                    </div>
                    <div className="star-2">
                      <svg viewBox="0 0 784.11 815.53" className="star-svg">
                        <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
                      </svg>
                    </div>
                    <div className="star-3">
                      <svg viewBox="0 0 784.11 815.53" className="star-svg">
                        <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
                      </svg>
                    </div>
                    <div className="star-4">
                      <svg viewBox="0 0 784.11 815.53" className="star-svg">
                        <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
                      </svg>
                      <div className="star-5">
                      <svg viewBox="0 0 784.11 815.53" className="star-svg">
                        <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
                      </svg>
                      <div className="star-6">
                      <svg viewBox="0 0 784.11 815.53" className="star-svg">
                        <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
                      </svg>
                    </div>
                    </div>
                    </div>
                  </span>
                </div>
              </div>
                  </div>
                </div>

              </div>
              </AnimatedText>
            </form>
          </div>
          <div className="col-md-5 mt-4">
            <div className="map-box">
              <div id="map">
                <div className="map-responsive">
                <iframe title='mmm' 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.0431168680315!2d2.335016815674377!3d48.86061107928767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671d8c1a3ec4d%3A0x6d227a18a8859444!2sLouvre%20Museum!5e0!3m2!1sen!2sus!4v1691045875813!5m2!1sen!2sus"
        width="600"
        height="300"
        allowfullscreen=""
        loading="lazy"
    ></iframe>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact_items">

        <a href="https://myibe-webapp.netlify.app/">
          <div className="item mt-3">
            <div className="">
              <i className='fa fa-phone text-danger phone'></i>
            </div>
            <div className="detail-box">
              <p>
              +33 6 95 55 22 29

              </p>
            </div>
          </div>
        </a>
        <a href="https://myibe-webapp.netlify.app/">
          <div className="item ">
            <div className="">
            <i className='fa fa-envelope phone'></i>
            </div>
            <div className="detail-box">
              <p>
              contact@myvibeconcept.com
              </p>
            </div>
          </div>
        </a>
        <a href="https://myibe-webapp.netlify.app/">
          <div className="item ">
            <div className="">
            <i className='fa fa-map-marker text-danger phone'></i>
            </div>
            <div className="detail-box">
              <p>
              Paris, France 
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
  );
};

export default contact;
