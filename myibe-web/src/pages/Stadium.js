// src/NewPage.js
import AnimatedText from '../components/AnimatedText';
import React from 'react';

const Stadium = () => {
    return (
        <section className="about_section layout_padding">
            <div className='container'>
                <h1><AnimatedText>Solution for – Stadiums and festivals</AnimatedText></h1>
                <div className='row'>
                    <div className='col-md-2'></div>
                    <div className='col-md-8 bo'> <h3><AnimatedText>My Vibe is currently developing a solution for choosing music in stadiums and arenas. </AnimatedText></h3>
                        </div>
                    <div className='col-md-2'></div>

                    <div className='col-md-2'></div>
                    
                    <div className='col-md-4 bo'><AnimatedText><img src='images/st3.jpg' className='wide' width={400} alt='wert' /> </AnimatedText></div>
                    <div className='col-md-4 bo'><AnimatedText><img src='images/st2.jpg' alt='wert' className='wide mla' width={400} height={230} /> </AnimatedText></div>
                    <div className='col-md-2'></div>

                    <div className='col-md-2 mt-5'></div>
                    <div className='col-md-4 bo mt-5'><AnimatedText><img src='images/st4.jpg' className='wide' alt='wert' /></AnimatedText> </div>
                    <div className='col-md-4 bo mt-5'><AnimatedText><img src='images/st5.jpg' className='wide mla' alt='wert' /> </AnimatedText></div>
                    <div className='col-md-2'></div>
                    <div className='col-md-2'></div>
                    <div className='col-md-4 bo'><AnimatedText><img src='images/st1.jpg' className='wide' alt='wert' /></AnimatedText></div>
                    <div className='col-md-4 bo'><AnimatedText><img src='images/Etihad_Stadium.jpg' height={210} className='wide mla' alt='wert' /></AnimatedText>
                        
                    </div>
                    <div className='col-md-1'></div>
                    <div className='col-md-2'></div>
                    <div className='col-md-8'>
                    <p className='par mt-5'>
                    <AnimatedText> Our music bidding and polling systems will create amazing stadium atmospheres!</AnimatedText> <br />

                    <AnimatedText>We will keep you updated regarding the release date!</AnimatedText> 
                        </p>

                    </div>
                    <div className='col-md-2'></div>

                </div>
            </div>
        </section>

    );
};

export default Stadium;
