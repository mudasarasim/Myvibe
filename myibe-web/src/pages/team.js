import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedText from '../components/AnimatedText';

const team = () => {
    return (
        <section className="about_section layout_padding">
            <div className="container">
                <h1><AnimatedText>Our Team</AnimatedText></h1>
                <div className="row">

                    <div className="col-md-4">
                        <figure class="snip1113 red">
                        <AnimatedText><img src="images/Picture5.jpg" alt="pr-sample1" /></AnimatedText>
                            <figcaption>
                                <h3 className='text-dark'><AnimatedText>Benjamin </AnimatedText><span className='ml-5'><AnimatedText>Melloul</AnimatedText><a target='blank' rel="noreferrer" className='anchor' href='https://www.linkedin.com/in/benjamin-melloul-757001213'><i className='fa fa-linkedin btn-danger btn-sm text-light p-1 ml-3'></i></a></span></h3>
                                <h4 className='mt-3'>
                                <AnimatedText>Founder</AnimatedText>
                                </h4>
                            </figcaption>
                        </figure>

                    </div>
                    <div className="col-md-8">
                        <div className="detail-box">
                            {/* <div className="custom_heading-container">
                                <h3>FOUNDER & CEO OF COMPANY</h3>
                            </div> */}
                            <p className='para'><AnimatedText>I’m Benjamin Melloul, 23 years old and just graduated from Bocconi University, Master in Management & Finance.
                                Before founding My Vibe, I worked as Investment Banker for Rothschild & Co and as Business Developer for Eiffel Investment Group.
                                I am passionate about technology, entrepreneurship, music and innovation. Luckily for me, My Vibe is about these three concepts.
                                If you share the same interests, let’s connect and collaborate!</AnimatedText></p>
                           
                            <div className='row'>
                                <div className='col-md-6'>
                                    <h3 className='mtm'>Education</h3>
                                    <AnimatedText><img src='images/Picture6.png' alt='uy' className='mt-3 mtm' height={30} /></AnimatedText><br />
                                    <AnimatedText><img src='images/Picture7.png' alt='uy' className='mt-3 mtm' height={100} /></AnimatedText>

                                </div>
                                <div className='col-md-6 firm mt-5 fsc'>
                                    <h3 className='mtm manat'><AnimatedText>Previous Firms</AnimatedText> </h3>
                                    <AnimatedText><img src='images/Picture8.png' alt='uy' className='mt-3 mtm' height={35} /></AnimatedText><br />
                                    <AnimatedText><img src='images/Picture9.png' alt='uy' className='mt-3 mtm' height={45} /></AnimatedText>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row mt-5">

                    <div className="col-md-4">
                        <figure class="snip1113 pic red">
                        <AnimatedText><img src="images/team.png" alt="pr-sample1" /></AnimatedText>
                            <figcaption>
                                <h3 className='text-dark'><AnimatedText>David</AnimatedText> <br /><span><AnimatedText>Bellaiche</AnimatedText></span><a target='_blank' rel="noreferrer" className='anchor' href='http://linkedin.com/in/david-b-28206419b'><i className='fa fa-linkedin btn-danger btn-sm text-light p-1 ml-3'></i></a></h3>
                                <h4 className='mt-3'>
                                <AnimatedText>Co-Founder</AnimatedText>
                                </h4>
                            </figcaption>
                        </figure>

                    </div>
                    <div className="col-md-8 david">
                        <div className="detail-box">
                            {/* <div className="custom_heading-container">
            <h3>Co-FOUNDER OF COMPANY</h3>
        </div> */}
                            <p className='para mt-5 pta'><AnimatedText>I am David Bellaiche, 23 years old, I hold a Bachelor from ESSEC Business School and I am currently pursuing a Master in Finance at EM Lyon. Before co-founding My Vibe, I worked at several leading financial firms, including Natixis, in the derivatives team. I am passionate about entrepreneurship and finance. Feel free to reach out if you want to join the team!</AnimatedText></p>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <h3 className='mtm'><AnimatedText>Education</AnimatedText></h3>
                                    <AnimatedText><img src='images/Picture91.png' alt='uy' className='mt-3 mtm' height={80} /></AnimatedText><br />
                                    <AnimatedText><img src='images/Picture7.png' alt='uy' className='mt-3 mtm' height={100} /></AnimatedText>

                                </div>
                                <div className='col-md-6 mt-4'>
                                    <h3 className='mtm'><AnimatedText>Previous Firms </AnimatedText></h3>
                                    <AnimatedText>  <img src='images/Picture13.png' alt='uy' className='mt-3 mtm' height={60} /></AnimatedText><br />
                                    <AnimatedText><img src='images/Picture14.png' alt='uy' className='mt-3 mtm' height={60} /></AnimatedText>
                                    <AnimatedText><img src='images/Picture15.png' alt='uy' className='mt-3 mtm' height={60} /></AnimatedText>
                                    
                                </div>
                            </div>
                            <p><Link to='/career' className='btc'><AnimatedText>We are hiring!</AnimatedText></Link></p>
                           
                        </div>

                    </div>
                </div>
                
            </div>

        </section>

    );
};

export default team;
