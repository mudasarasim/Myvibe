// src/NewPage.js
import AnimatedText from '../components/AnimatedText';
import React from "react";

const home = () => {
  return (
    <body>
      <div className="hero_area">
        <section className=" slider_section position-relative">
          <div className="slider_bg-container"></div>
          <div className="slider-container">
            <div className="detail-box">
             
              <h1 className="text-left">
              <AnimatedText>My Vibe allows your customers to choose the music</AnimatedText>
              </h1>
              <p>
              <AnimatedText>Whether you are a restaurant, a bar, a café or a club, My Vibe enables your customers to choose, suggest and like the music via a QR code  </AnimatedText> </p>
             
            </div>
            <div className="img-box">
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                  <AnimatedText><img src="images/main.jpg" alt="mn" /></AnimatedText>
                  </div>
                  <div className="carousel-item">
                    <img src="images/3.jpg" alt="io" />
                  </div>
                  <div className="carousel-item">
                    <img src="images/2.jpg" alt="www" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
     <section className="about_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-6">
              <div className="detail-box">
                <div className="custom_heading-container">
                  <h2 className="ml-4">
                    <AnimatedText>HOW DOES IT WORK</AnimatedText>
                  </h2>
                </div>
                <ol className="work">
                  <AnimatedText>
                    <li>Create your professional account in less than 30 seconds for FREE</li>
                    <li>
                      Synchronize your playlists from the music platform that you use.
                      {/* <span>
                        <i className="fa fa-spotify text-success iii"></i>
                        <img className="tube" src='images/tube.png' height={100} width={130} alt='yu' />
                        <img className="tube" src='images/deezer.png' height={100} width={100} alt='yu' />
                        <img className="tube" src='images/napster.png' height={40} width={110} alt='yu' />
                      </span> */}
                    </li>
                    <li>Generate customized QR Codes, print them and set them at your venue</li>
                    <li>All set! Watch your clients enjoy</li>
                  </AnimatedText>
                </ol>
              </div>
            </div>
            <div className="col-md-4">
              <div className="img-box bo">
              <AnimatedText><img src="images/asdf.png" height={400} className="mt-5" alt="pp" /></AnimatedText>
              </div>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
      </section>
      <section className="about_section back layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-1 mb-4"></div>
            <div className="col-md-4 mb-4">
              <div className="img-box bo">
              <AnimatedText><img src="images/beer.png" height='300' alt="pp" /></AnimatedText>
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <div className="custom_heading-container">
                  <h2>
                    <AnimatedText>We Create Value For Your Business By</AnimatedText>
                  </h2>
                </div>
                <ol>
                  <AnimatedText>
                    <li>Introducing a new interactive customer experience</li>
                    <li>Differentiating your venue from competitors</li>
                    <li>Increasing customer loyalty</li>
                    <li>Creating new revenue streams</li>
                  </AnimatedText>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container-lg mt-5">
  <div className="row mb-5 tttt">
    <div className="col-sm-12">
      <div id="myCarousel" className="carousel tttt slide" data-ride="carousel">
        <h1>
          <AnimatedText>Reviews From Clients</AnimatedText>
        </h1>
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-sm-6">
                <div className="testimonial">
                  <p>
                    <AnimatedText>My Vibe has completely transformed the way we approach music in our restaurant. Our guests love the ability to choose their own tunes via QR codes, and it’s made our atmosphere more dynamic and engaging. We've noticed a significant increase in positive feedback about the ambiance. Plus, the system is incredibly easy to set up and use. Highly recommend for any venue looking to elevate their customer experience!</AnimatedText>
                  </p>
                </div>
                <div className="media">
                  <div className="media-body">
                    <div className="overview">
                      <div className="name">
                        <AnimatedText><b>Sarah W.</b></AnimatedText>
                      </div>
                      <div className="details">
                        <AnimatedText>Restaurant Manager, Paris</AnimatedText>
                      </div>
                      <div className="star-rating">
                        <ul className="list-inline">
                          <li className="list-inline-item"><i className="fa fa-star"></i></li>
                          <li className="list-inline-item"><i className="fa fa-star"></i></li>
                          <li className="list-inline-item"><i className="fa fa-star"></i></li>
                          <li className="list-inline-item"><i className="fa fa-star"></i></li>
                          <li className="list-inline-item"><i className="fa fa-star"></i></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="testimonial">
                  <p>
                    <AnimatedText>My Vibe has been an instant hit with our guests. They love having control over the music, and it’s been a fantastic way to engage them more deeply with their dining experience. The ease of use and reliability of the system have been impressive, and we’ve seen a notable increase in positive reviews mentioning the ambiance. It’s a must-have for any modern restaurant!</AnimatedText>
                  </p>
                </div>
                <div className="media">
                  <div className="media-body">
                    <div className="overview">
                      <div className="name">
                        <AnimatedText><b>Lisa M.</b></AnimatedText>
                      </div>
                      <div className="details">
                        <AnimatedText>Café Manager, Paris</AnimatedText>
                      </div>
                      <div className="star-rating">
                        <ul className="list-inline">
                          <li className="list-inline-item"><i className="fa fa-star"></i></li>
                          <li className="list-inline-item"><i className="fa fa-star"></i></li>
                          <li className="list-inline-item"><i className="fa fa-star"></i></li>
                          <li className="list-inline-item"><i className="fa fa-star"></i></li>
                          <li className="list-inline-item"><i className="fa fa-star"></i></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-sm-6">
                <div className="testimonial">
                  <p>
                    <AnimatedText>My Vibe is an innovative solution that has brought a lot of fun into our bar. Guests love the interactive aspect of choosing their music, and it's given our staff a break from constantly changing playlists. The feedback from customers has been overwhelmingly positive, and we’ve even seen an uptick in repeat business. It’s a win-win for everyone involved!</AnimatedText>
                  </p>
                </div>
                <div className="media">
                  <div className="media-body">
                    <div className="overview">
                      <div className="name">
                        <AnimatedText><b>Emily R.</b></AnimatedText>
                      </div>
                      <div className="details">
                        <AnimatedText>Bar Manager, Paris</AnimatedText>
                      </div>
                      <div className="star-rating">
                        <ul className="list-inline">
                          <li className="list-inline-item"><i className="fa fa-star"></i></li>
                          <li className="list-inline-item"><i className="fa fa-star"></i></li>
                          <li className="list-inline-item"><i className="fa fa-star"></i></li>
                          <li className="list-inline-item"><i className="fa fa-star"></i></li>
                          <li className="list-inline-item"><i className="fa fa-star"></i></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="testimonial">
                  <p>
                    <AnimatedText>We were looking for a way to make our restaurant experience more engaging, and My Vibe delivered this perfectly. The system is simple to implement and even easier for our clients to use. It’s refreshing to see how such a small change can have such a big impact on our guest satisfaction. We've had numerous positive comments about the ability to choose the music, and it's been a great conversation starter!</AnimatedText>
                  </p>
                </div>
                <div className="media">
                  <div className="media-body">
                    <div className="overview">
                      <div className="name">
                        <AnimatedText><b>John D.</b></AnimatedText>
                      </div>
                      <div className="details">
                        <AnimatedText>Restaurant Manager, Paris</AnimatedText>
                      </div>
                      <div className="star-rating">
                        <ul className="list-inline">
                          <li className="list-inline-item"><i className="fa fa-star"></i></li>
                          <li className="list-inline-item"><i className="fa fa-star"></i></li>
                          <li className="list-inline-item"><i className="fa fa-star"></i></li>
                          <li className="list-inline-item"><i className="fa fa-star"></i></li>
                          <li className="list-inline-item"><i className="fa fa-star"></i></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-sm-6">
                <div className="testimonial">
                  <p>
                    <AnimatedText>Since we started using My Vibe, our place is way more crowded. Surprisingly, the willingness to pay for music is even higher than for drinks. We have a great work relationship with My Vibe’s people, who are very flexible. We try to constantly innovate, as an example we are thinking of bundling the service with the entrance fee, drinks or table reservation.</AnimatedText>
                  </p>
                </div>
                <div className="media">
                  <div className="media-body">
                    <div className="overview">
                      <div className="name">
                        <AnimatedText><b>Alex M.</b></AnimatedText>
                      </div>
                      <div className="details">
                        <AnimatedText>Club Manager, Paris</AnimatedText>
                      </div>
                      <div className="star-rating">
                        <ul className="list-inline">
                          <li className="list-inline-item"><i className="fa fa-star"></i></li>
                          <li className="list-inline-item"><i className="fa fa-star"></i></li>
                          <li className="list-inline-item"><i className="fa fa-star"></i></li>
                          <li className="list-inline-item"><i className="fa fa-star"></i></li>
                          <li className="list-inline-item"><i className="fa fa-star"></i></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev arr" href="#myCarousel" data-slide="prev">
          <i className="fa fa-chevron-left"></i>
        </a>
        <a className="carousel-control-next arr" href="#myCarousel" data-slide="next">
          <i className="fa fa-chevron-right"></i>
        </a>
      </div>
    </div>
  </div>
</div>

<div className="container-lg mt-5">
    <div className="row mb-5 tttt">
      <div className="col-sm-12">
        <div id="mySlider" className="carousel tttt slide" data-ride="carousel">
          <h1>
            <AnimatedText>Reviews From End Users</AnimatedText>
          </h1>
          <ol className="carousel-indicators">
            <li data-target="#mySlider" data-slide-to="0" className="active"></li>
            <li data-target="#mySlider" data-slide-to="1"></li>
            <li data-target="#mySlider" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-sm-6">
                  <div className="testimonial">
                    <p>
                      <AnimatedText>I had an amazing time thanks to My Vibe. Being able to choose the music through a simple QR code made the evening even more enjoyable. It was like having my own personal DJ! The process was so easy, and it really added a personal touch to the dining experience. Highly recommend it if you enjoy a bit of control over your surroundings!</AnimatedText>
                    </p>
                  </div>
                  <div className="media">
                    <div className="media-body">
                      <div className="overview">
                        <div className="name">
                          <AnimatedText><b>"A fun and personalized experience!"</b></AnimatedText>
                        </div>
                        <div className="star-rating">
                          <ul className="list-inline">
                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="testimonial">
                    <p>
                      <AnimatedText>My Vibe is a great conversation opener tool, people discuss their musical tastes, break the ice, being able to choose the music sort of makes you feel at home. My Vibe is also a great conversation opener with strangers, people discuss their musical tastes, break the ice, being able to choose the music sort of makes you feel at home.</AnimatedText>
                    </p>
                  </div>
                  <div className="media">
                    <div className="media-body">
                      <div className="overview">
                        <div className="name">
                          <AnimatedText><b>“An awesome social tool”</b></AnimatedText>
                        </div>
                        <div className="star-rating">
                          <ul className="list-inline">
                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-sm-6">
                  <div className="testimonial">
                    <p>
                      <AnimatedText>My Vibe is a brilliant idea! I loved being able to pick the songs that suited my mood while dining out. It made the evening feel much more tailored to our group. The QR code system was straightforward and user-friendly. Definitely a unique touch that sets this restaurant apart from others. Can’t wait to try it again!</AnimatedText>
                    </p>
                  </div>
                  <div className="media">
                    <div className="media-body">
                      <div className="overview">
                        <div className="name">
                          <AnimatedText><b>"Perfect for setting the mood"</b></AnimatedText>
                        </div>
                        <div className="star-rating">
                          <ul className="list-inline">
                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="testimonial">
                    <p>
                      <AnimatedText>The My Vibe system made our dinner experience much more interactive and enjoyable. It was fun to scan the QR code and browse through different music options. The whole process was smooth, and the staff seemed to appreciate the change too. It’s a great way to make dining out a bit more personal and fun!</AnimatedText>
                    </p>
                  </div>
                  <div className="media">
                    <div className="media-body">
                      <div className="overview">
                        <div className="name">
                          <AnimatedText><b>"Interactive and enjoyable"</b></AnimatedText>
                        </div>
                        <div className="star-rating">
                          <ul className="list-inline">
                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-sm-6">
                  <div className="testimonial">
                    <p>
                      <AnimatedText>I had a wonderful time and My Vibe was a great addition. It was so cool to choose the music we wanted to listen to while eating. It really enhanced the atmosphere and made the meal more memorable. The QR code system was quick and easy to use. I hope more restaurants adopt this feature!</AnimatedText>
                    </p>
                  </div>
                  <div className="media">
                    <div className="media-body">
                      <div className="overview">
                        <div className="name">
                          <AnimatedText><b>"Great addition to a great meal"</b></AnimatedText>
                        </div>
                        <div className="star-rating">
                          <ul className="list-inline">
                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="testimonial">
                    <p>
                      <AnimatedText>I was impressed by how easy it was to use My Vibe. Just scan the QR code, pick your songs, and you're all set. The user-friendly interface made it a smooth process, and it added a fun element to our meal. I love that such a simple system can enhance the dining experience so much!</AnimatedText>
                    </p>
                  </div>
                  <div className="media">
                    <div className="media-body">
                      <div className="overview">
                        <div className="name">
                          <AnimatedText><b>"Effortless and entertaining"</b></AnimatedText>
                        </div>
                        <div className="star-rating">
                          <ul className="list-inline">
                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev arr" href="#mySlider" data-slide="prev">
            <i className="fa fa-chevron-left"></i>
          </a>
          <a className="carousel-control-next arr" href="#mySlider" data-slide="next">
            <i className="fa fa-chevron-right"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
      <section className="about_section black layout_padding">
                            <div className="container">
                                <div className="row ml-4">

                                    <div className="col-md-3">
                                        <div class="circle">
                                            <p class="text"><span className='bold'>+40</span><br/> Of QR codes scannings<br/> Per Day <br/> Per Venue</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div class="circle">
                                        <p class="text"><span className='bold'>0€</span><br/> Price <br/> of My Vibe</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div class="circle">
                                        <p class="text"><span className='bold'>+90%</span><br/> Of customers <br/> who scan our QR Code</p>
                                        
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div class="circle">
                                        <p class="text"><span className='bold'>100%</span><br/> Of client satisfaction regarding our software</p>
                                        
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </section>
      <section class="bsb-faq-3 py-3 py-md-5 py-xl-8">
        <div class="container">
          <div class="row justify-content-md-center custom_heading-container">
            <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
              <h2 class="mb-4 display-5 text-center">FAQ</h2>

            </div>
          </div>
        </div>
        <div class="mb-8">
          <div class="container">
            <div class="row justify-content-center">

              <div class="col-11 col-xl-10">
                <div class="accordion accordion-flush" id="faqOrder">
                  <div class="accordion-item bg-transparent border-top border-bottom py-3">
                    <h2 class="accordion-header" id="faqOrderHeading1">
                      <button class="accordion-button collapsed bg-transparent fw-bold shadow-none link-danger" type="button" data-bs-toggle="collapse" data-bs-target="#faqOrderCollapse1" aria-expanded="false" aria-controls="faqOrderCollapse1">
                      <AnimatedText>Is My Vibe free?</AnimatedText>
                      </button>
                    </h2>
                    <div id="faqOrderCollapse1" class="accordion-collapse collapse" aria-labelledby="faqOrderHeading1">
                      <div class="accordion-body">
                        <p>Yes, My Vibe is completely free for both businesses and end-users. In some clubs, songs can be sponsored and monetized, creating new revenue streams.</p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item bg-transparent border-bottom py-3">
                    <h2 class="accordion-header" id="faqOrderHeading2">
                      <button class="accordion-button collapsed bg-transparent fw-bold shadow-none link-danger" type="button" data-bs-toggle="collapse" data-bs-target="#faqOrderCollapse2" aria-expanded="false" aria-controls="faqOrderCollapse2">
                      <AnimatedText>Does My Vibe suggest music?</AnimatedText>
                      </button>
                    </h2>
                    <div id="faqOrderCollapse2" class="accordion-collapse collapse" aria-labelledby="faqOrderHeading2">
                      <div class="accordion-body">
                        <p>Yes, according to the characteristics of your venue, My Vibe will suggest you a playlist (typically short, from 50 to 200 tracks) thanks our data and machine learning algorithms</p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item bg-transparent border-bottom py-3">
                    <h2 class="accordion-header" id="faqOrderHeading3">
                      <button class="accordion-button collapsed bg-transparent fw-bold shadow-none link-danger" type="button" data-bs-toggle="collapse" data-bs-target="#faqOrderCollapse3" aria-expanded="false" aria-controls="faqOrderCollapse3">
                      <AnimatedText>How do I synchronize any music platform?</AnimatedText>
                      </button>
                    </h2>
                    <div id="faqOrderCollapse3" class="accordion-collapse collapse" aria-labelledby="faqOrderHeading3">
                      <div class="accordion-body">
                        <p>We provide you with a tutorial explaining how to get your key and use the API, it is very easy and takes only a few seconds. Our team is here to help you and answer any inquiries</p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item bg-transparent border-bottom py-3">
                    <h2 class="accordion-header" id="faqOrderHeading4">
                      <button class="accordion-button collapsed bg-transparent fw-bold shadow-none link-danger" type="button" data-bs-toggle="collapse" data-bs-target="#faqOrderCollapse4" aria-expanded="false" aria-controls="faqOrderCollapse4">
                      <AnimatedText>Is music stocked on My Vibe?</AnimatedText>
                      </button>
                    </h2>
                    <div id="faqOrderCollapse4" class="accordion-collapse collapse" aria-labelledby="faqOrderHeading4">
                      <div class="accordion-body">
                        <p>No music is stocked in our system. We are just the bridge between the music platform and the venue. Hence, we do not have to pay music rights and licenses</p>
                      </div>
                    </div>
                  </div>
                  {/* <div class="accordion-item bg-transparent border-bottom py-3">
                    <h2 class="accordion-header" id="faqOrderHeading5">
                      <button class="accordion-button collapsed bg-transparent fw-bold shadow-none link-danger" type="button" data-bs-toggle="collapse" data-bs-target="#faqOrderCollapse5" aria-expanded="false" aria-controls="faqOrderCollapse4">
                      <AnimatedText>Do the users have access to my Spotify account?</AnimatedText>
                      </button>
                    </h2>
                    <div id="faqOrderCollapse5" class="accordion-collapse collapse" aria-labelledby="faqOrderHeading5">
                      <div class="accordion-body">
                        <p>No, end-users do not have access to your Spotify and My Vibe accounts.</p>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>



      </section>
    </body>
  );
};

export default home;
