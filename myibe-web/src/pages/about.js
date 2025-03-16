import React from 'react';
import AnimatedText from '../components/AnimatedText';

const About = () => {
  return (
    <>
      <div className="container mt-5 mb-5">
        <h1><AnimatedText>Our Story</AnimatedText></h1>
        <div className="row">
          <div className="col-md-6 offset-md-3">
             <div class="timeline">
        <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <div class="timeline-text mr-3">
                <h5><AnimatedText>Summer 2023</AnimatedText></h5>
                <h4><AnimatedText>The idea is born in Singapore</AnimatedText></h4>
                </div>
                <div class="timeline-image">
                <AnimatedText><img src="images/Picture1.jpg" alt="Event 1" /></AnimatedText>
                </div>
            </div>
        </div>
        <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <div class="timeline-text mr-3">
                <h5><AnimatedText>September 2023 - May 2024</AnimatedText></h5>
                    <h4><AnimatedText>My Vibe’s founders are still in school, design the project, reach out to venues</AnimatedText></h4>
                 
                </div>
                <div class="timeline-image">
                <AnimatedText><img src="images/Picture2.jpg" alt="Event 2" /></AnimatedText>
                </div>
            </div>
        </div>
        <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <div class="timeline-text mr-3">
                <h5><AnimatedText>July 2024 - September 2024</AnimatedText></h5>
                    <h4><AnimatedText>The website is built by a team of experienced developers</AnimatedText></h4>
                 
                </div>
                <div class="timeline-image">
                <AnimatedText><img src="images/Picture3.jpg" alt="Event 2" /></AnimatedText>
                </div>
            </div>
        </div>
         <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <div class="timeline-text mr-3">
                <h5><AnimatedText>September 2024</AnimatedText></h5>
                    <h4><AnimatedText>My Vibe is launched in several restaurants in Paris</AnimatedText></h4>
                 
                </div>
                <div class="timeline-image">
                <AnimatedText><img src="images/Picture4.jpg" alt="Event 2" /></AnimatedText>
                </div>
            </div>
        </div>
    </div>

            <h5 className="mt-5 text-center"><AnimatedText>The adventure is just beginning, the best is yet to come!</AnimatedText></h5>
          </div>
        </div>
      </div>

      <section className="about_section layout_padding">
        <div className="container">
          <h1><AnimatedText>About Us</AnimatedText></h1>
          <div className="row">
            <div className="col-md-6">
              <div className="img-box bo mb-5">
              <AnimatedText><img src="images/about1.png" className="img-fluid" alt="About Us 1" /></AnimatedText>
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <div className="custom_heading-container">
                  <h2><AnimatedText>Our mindset</AnimatedText></h2>
                </div>
                <p className="para">
                <AnimatedText>My Vibe was born to solve a problem. We reasonably assume that music is an essential ingredient to have a good time in bars and clubs and that EVERYBODY listens to music and enjoys sharing it with friends.
                  The thing is, people can be frustrated by music when clubbing, have trouble interacting with DJs, and even when the music is good, would love to play their own. We think that DJs in bars and nightclubs should interact more with the public and break the monopoly of music. Eventually, we want to offer people personalized experiences. We imagined an innovative marketing process and business model to satisfy both clubs, bars, restaurants, and their clients’ wants. Check out our solution and feel free to contact us!
                  </AnimatedText>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              <div className="detail-box">
                <div className="custom_heading-container mt-5">
                  <h2><AnimatedText>Our ambitions</AnimatedText></h2>
                </div>
                <p className="para">
                <AnimatedText>My Vibe’s team has big ambitions for the company’s future. Beginning our journey in Europe, we envision our concept embraced worldwide in no time! The global hotspots renowned for their nightlife and restaurants are countless and eagerly await our presence. From Ibiza and the French Riviera to vibrant cities like Bangkok, Saigon, and Singapore, not to mention Tel Aviv and Dubai in the Middle East, or the bustling nightlife hubs of Miami, New York, Mexico, and Rio in the Americas.
                </AnimatedText>
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-box bo">
              <AnimatedText><img src="images/about2.png" className="img-fluid" alt="About Us 2" /></AnimatedText>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;


