import React from 'react';
import AnimatedText from '../components/AnimatedText';

const Club = () => {
    return (
        <>
            <section className="about_section layout_padding">
                <div className="container">

                    <div className="row">

                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                            <h1><AnimatedText>OUR SOLUTION FOR Clubs</AnimatedText></h1>
                            <h3 className='mb-5'><AnimatedText>My Vibe enables your customers to choose the music and interact with DJs</AnimatedText></h3>

                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-1"></div>
                        <div className="col-md-5 img-box bo">
                            <AnimatedText> <video width="520" className="" height="50%" controls>
                                <source src="images/video1.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video></AnimatedText>
                        </div>
                        <div className="col-md-5 ml-5">
                            <div className="detail-box">
                                <div className="custom_heading-container">
                                    <h2>
                                        <AnimatedText> How Does It Work?</AnimatedText>
                                    </h2>

                                </div>
                                <ol className='nnn'><AnimatedText>
                                    <li>Create your professional account in less than 30 seconds for FREE</li>
                                    <li>Synchronize your playlists from the music platform that you use :
                                        {/* <span> <i className="fa fa-spotify text-success iii"></i> <img className="tube" src='images/tube.png' height={100} width={130} alt='yu' /><img className="dezer" src='images/deezer.png' height={100} width={100} alt='yu' /><img className="tube" src='images/napster.png' height={40} width={110} alt='yu' /></span> </li> */}
                                    </li> 
                                    <li>Generate customized QR Codes, print them and set them at your venue

                                    </li>
                                    <li>Coordinate My Vibe and your DJs</li>

                                </AnimatedText>

                                </ol>

                            </div>
                        </div>

                        <div className="col-md-1"></div>

                    </div>

                </div>
            </section>
            <section className="about_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-1 col-2 mb-4"></div>

                        <div className="col-md-7">
                            <div className="detail-box">
                                <div className="custom_heading-container">
                                    <h2 className='uuu'>
                                        <AnimatedText>Customize Your QR Code</AnimatedText>
                                    </h2>

                                </div>
                                <ol>
                                    <AnimatedText>
                                        <li>Customize your QR
                                        </li>
                                        <li>Insert your logo</li>
                                        <li>Print them and plastify them if possible and relevant</li>
                                        <li>Choose the best strategic places to place the QR codes:
                                            tables, menus, bathroom, walls, wherever you want!
                                        </li>
                                        <li>You can also follow our recommendations about that!</li>
                                    </AnimatedText>
                                </ol>

                            </div>
                        </div>
                        <div className="col-md-4 col-8 mb-4">
                            <div className="img-box mr-3">
                                <AnimatedText><img className='bar' src="images/qr.jpeg" height='340' alt="pp" /></AnimatedText>
                            </div>
                        </div>
                        {/* <div className="col-md-3 col-8 mb-4">
                            <div className="img-box mr-3 bo">
                                <img src="images/white.png" height='300' alt="pp" />
                            </div>
                        </div> */}
                    </div>

                </div>
            </section>
            <section className="about_section layout_padding">
                <div className="container">
                    <div className="row">
                        {/* <div className="col-md-6 mt-4 img-box bo mb-5 mmm">
                            <img src="images/a1.png" alt='ee' />
                        </div>
                        <div className="col-md-6 mt-4 img-box bo mb-5 mmm">
                        <img src="images/a2.png" alt='ee' />
                        </div> */}
                        <div className="col-md-1 col-2"></div>
                        <div className="col-md-7">
                            <div className="detail-box mmm">
                                <div className="custom_heading-container">
                                    <h2>
                                        <AnimatedText>With My Vibe functionalities, your customers are able to:</AnimatedText>
                                    </h2>

                                </div>
                                <ol>
                                    <AnimatedText>
                                        <li>Select their favorite track in the playlist (each track
                                            can only be played once every night)
                                        </li>
                                        <li>Select the time slot for their song to be played</li>
                                        <li>if applicable, add a customized message to be displayed for a
                                            birthday or any other occasion
                                        </li>
                                    </AnimatedText>
                                    <h4 className='mt-3'><AnimatedText>With your professional account:</AnimatedText></h4>
                                    <ul>
                                        <AnimatedText>
                                            <li>Import your playlist from the music platform you use</li>
                                            <li>Cut your opening time frame into time slots</li>
                                            <li>If applicable, choose the pricing of each time slot</li>
                                        </AnimatedText>
                                    </ul>
                                    {/* <ul>
                                        <li>Choose the next song being played</li>
                                        <li>Add tracks to the queue</li>
                                        <li>Suggest you to add a track to your playlist
                                            (requests visible on your account)
                                        </li>
                                    </ul> */}


                                </ol>

                            </div>
                        </div>

                        <div className="col-md-3 col-8">
                            <div className="img-box bo">
                                <AnimatedText><img src="images/eee.jpg" className='bar' alt='jii' height='500' /></AnimatedText>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
            <section className="about_section layout_padding">
                <div className="container">
                    <div className="row">

                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                            <div className="detail-box">
                                <div className="custom_heading-container">
                                    <h2 className='text-center ml-4'>
                                        <AnimatedText>Recommended Playlists With AI And Machine learning</AnimatedText>
                                    </h2>

                                </div>
                                <p className='par mt-2 text-center'><AnimatedText>My Vibe also recommends you the best playlist and the best time slot pricing by leveraging Machine Learning </AnimatedText>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-1"></div>
                        <div className="col-md-10 mb-5">
                            <div className="img-box bo">
                                <AnimatedText> <img src="images/aim.jpg" height={400} alt='jii' /></AnimatedText>
                            </div>
                        </div>
                        <div className="col-md-1"></div>

                        <section className="about_section black layout_padding">
                            <div className="container">
                                <div className="row ml-4">

                                    <div className="col-md-3">
                                        <div class="circle">
                                            <p class="text"><span className='bold'>+40</span><br /> Of QR codes scannings<br /> Per Day <br /> Per Venue</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div class="circle">
                                            <p class="text"><span className='bold'>0€</span><br /> Price <br /> of My Vibe</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div class="circle">
                                            <p class="text"><span className='bold'>+90%</span><br /> Of customers <br /> who scan our QR Code</p>

                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div class="circle">
                                            <p class="text"><span className='bold'>100%</span><br /> Of client satisfaction regarding our software</p>

                                        </div>
                                    </div>

                                </div>

                            </div>
                        </section>
                    </div>

                </div>
            </section>
            <section className="about_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-1 mb-4"></div>
                        <div className="col-md-5 mb-4">
                            <div className="img-box bo">
                                <AnimatedText><img src="images/ppp.jpeg" height='400' alt="pp" /></AnimatedText>
                            </div>
                        </div>
                        <div className="col-md-5 mb-4">
                            <div className="img-box bo">
                                <AnimatedText><img src="images/black.png" height='400' alt="pp" /></AnimatedText>
                            </div>
                        </div>
                        <div className="col-md-1 mb-4"></div>

                    </div>

                </div>
            </section>

        </>
    );
};

export default Club;
