// src/NewPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedText from '../components/AnimatedText';

const Blogs = () => {
    return (
        <section className="contact_section layout_padding">

            <div className="container mx-auto mt-4">
                <h1><AnimatedText>New Articles</AnimatedText></h1>
                <div className="row">
                  <div className='col-md-1'></div> 
                    <div className="col-md-5">
                        <Link to='/firstblog'>
                        <div className="card">
                            <AnimatedText><img src="images/2.jpg" className="card-img-top" alt="ops" /></AnimatedText>
                            <div className="card-body">
                                <h3 className="card-title"><AnimatedText>Top Music Festivals in Europe: A Guide to the Best Events</AnimatedText></h3>
                                <p className="card-text"><AnimatedText>Europe is home to some of the most iconic music festivals in the world, each offering a unique blend of music, culture, and unforgettable experiences. Here’s a roundup of some of the best private music festivals in Europe that you should consider for your next musical adventure.</AnimatedText></p>
                                <h5><AnimatedText>August 15, 2024</AnimatedText></h5>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className="col-md-5">
                    <Link to='/secondblog'>
                        <div className="card">
                        <AnimatedText><img src="images/about2.png" className="card-img-top" alt="oop" /></AnimatedText>
                            <div className="card-body">
                            <AnimatedText>
                                <h3 className="card-title">Rising Pop-Music Artists in France since 2023</h3>
                                <p className="card-text">The French pop music scene has been flourishing with a plethora of emerging talents who are set to make significant impacts in 2023 and 2024. These artists bring a diverse range of styles and influences, contributing to vibrant French music.</p>
                                <h5>August 25, 2024</h5>
                                </AnimatedText>
                            </div>
                        </div>
                    </Link>    
                    </div>
                    <div className='col-md-1'></div>

                </div>
            </div>
        </section>
    );
};

export default Blogs;
