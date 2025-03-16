import React, { useState } from 'react';
import AnimatedText from '../components/AnimatedText';

const Career = () => {
    const [cvFile, setCvFile] = useState(null);
    const [isCTOVisible, setIsCTOVisible] = useState(false);
    const [isJuniorSalesVisible, setIsJuniorSalesVisible] = useState(false);

    const handleFileChange = (event) => {
        setCvFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!cvFile) {
            alert('Please select a CV file to upload.');
            return;
        }

        const formData = new FormData();
        formData.append('cv', cvFile);

        try {
            const response = await fetch('YOUR_FORMSPREE_ENDPOINT', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                alert('CV submitted successfully!');
                setCvFile(null);
            } else {
                alert('Submission failed.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    };

    const toggleCTODescription = () => {
        setIsCTOVisible(prevState => !prevState);
    };

    const toggleJuniorSalesDescription = () => {
        setIsJuniorSalesVisible(prevState => !prevState);
    };

    return (
        <section className="about_section layout_padding">
            <div className="container">
                <h1 className="text-center"><AnimatedText>Careers</AnimatedText></h1>
                <div className="row mb-5">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 text-center">
                        <h2 className="mb-2"><AnimatedText>We ARE HIRING!</AnimatedText></h2>
                        <h2 className="mb-4 text-capitalize">
                            <AnimatedText>Join our passionate team</AnimatedText>
                        </h2>
                        <div className="img-box bo">
                            <AnimatedText><img src="images/career.png" width="300" alt="career" /></AnimatedText>
                        </div>

                    </div>
                    <div className="col-md-2"></div>
                    <div className="col-md-2"></div>

                    <div className="col-md-4">
                    <h2 className='mt-5'><AnimatedText>Job Offers</AnimatedText></h2>

                        <button onClick={toggleCTODescription} className="btn btn-dark btn-md mt-4">
                        
                        {isCTOVisible ? 'Hide CTO Job Description' : 'Chief Technology Officer (CTO)'}
                    </button><br />
                        <button onClick={toggleJuniorSalesDescription} className="btn btn-dark btn-md mt-4">
                            {isJuniorSalesVisible ? 'Hide Junior Sales Rep Job Description' : 'Junior Sales Representative'}
                        </button></div>
                    <div className="col-md-4"></div>
                    <div className="col-md-2"></div>
                </div>

                {/* CTO Job Description */}
                {isCTOVisible && (
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-10">
                            <h2 className="mt-5 mb-4">Job Offer: Chief Technology Officer (CTO) - My Vibe</h2>
                            <h3 className="mb-4">Location: Remote</h3>
                            <h3 className="mb-2">About My Vibe:</h3>
                            <p className="par mt-0">
                                Join My Vibe, a dynamic startup revolutionizing the way people engage with restaurants, cafes, bars, and clubs using QR code solutions. We're at the early stages and looking for a visionary CTO to shape and build our technology landscape.
                            </p>
                            <h3 className="mb-3">Key Responsibilities:</h3>
                            <ul>
                                <li>Lead the development and deployment of My Vibe's core product.</li>
                                <li>Oversee all technical aspects and technological resources of the company.</li>
                                <li>Drive innovation and provide technical vision to the team.</li>
                                <li>Collaborate closely with the founding team to refine our product strategy and roadmap.</li>
                            </ul>
                            <h3 className="mb-3">Qualifications:</h3>
                            <ul>
                                <li>Proven experience as a Full Stack Developer.</li>
                                <li>Proficiency in programming languages including HTML, CSS, Python, and SQL.</li>
                                <li>Fluency in English and either French or Italian.</li>
                                <li>Strong leadership skills and experience in building and leading technical teams.</li>
                            </ul>
                            <h3 className="mb-3">Why Join My Vibe:</h3>
                            <ul>
                                <li>Opportunity to earn equity in a promising startup.</li>
                                <li>Play a pivotal role in shaping and building the company from its very early stages.</li>
                                <li>Work with an awesome, motivated team.</li>
                                <li>Develop a groundbreaking product and challenge yourself in a creative and supportive environment.</li>
                            </ul>
                            <h3 className="mt-3">Apply now to join My Vibe and make a significant impact!</h3>
                        </div>
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-10">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group mt-3">
                                        <label htmlFor="cv">Upload your CV:</label>
                                        <input
                                            type="file"
                                            id="cv"
                                            name="cv"
                                            accept=".pdf, .doc, .docx"
                                            onChange={handleFileChange}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="mt-3 text-center">
                                        <button type="submit" className="nav-btn">
                                            Submit
                                            <div className="star-1">
                                                <svg viewBox="0 0 784.11 815.53" className="star-svg">
                                                    <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
                                                </svg>
                                            </div>
                                            {/* Add other star elements here if needed */}
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-1"></div>

                        </div>
                    </div>
                )}

                {/* Junior Sales Representative Job Description */}
                {isJuniorSalesVisible && (
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                            <h2 className="mt-5 mb-4">Job Opportunity: Junior Sales Representative at My Vibe</h2>
                            <h3 className="mb-4">Location: Remote</h3>
                            <h3 className="mb-2">About My Vibe:</h3>
                            <p className="par mt-0">
                                Are you a motivated and enthusiastic individual looking to kick-start your career in sales? My Vibe is seeking a Junior Sales Representative to join our dynamic team. As a Junior Sales Representative, you will play a pivotal role in expanding our reach and driving growth in the vibrant nightlife industry.
                            </p>
                            <h3 className="mb-3">Key Responsibilities:</h3>
                            <ul>
                                <li>Proactively reach out to bars and nightclubs to promote and sell My Vibe’s offerings.</li>
                                <li>Utilize your multilingual skills, especially in European languages, to effectively communicate and connect with potential clients.</li>
                                <li>Maintain a high level of fluency in English to ensure seamless communication with our diverse clientele.</li>
                            </ul>
                            <h3 className="mb-3">Qualifications:</h3>
                            <ul>
                                <li>A recent graduate with a passion for sales and a strong interest in the music and entertainment industry.</li>
                                <li>Sociable, curious, and eager to learn about the latest trends and developments in the nightlife scene.</li>
                                <li>Exceptional communication skills and the ability to establish rapport with potential clients.</li>
                            </ul>
                            <h3 className="mb-3">Why Join My Vibe:</h3>
                            <ul>
                                <li>Opportunity to earn equity in a promising startup.</li>
                                <li>Play a pivotal role in shaping and building the company from its very early stages.</li>
                                <li>Work with an awesome, motivated team.</li>
                                <li>Develop a groundbreaking product and challenge yourself in a creative and supportive environment.</li>
                            </ul>
                            <h3 className="mt-3">Apply now to join My Vibe and make a significant impact!</h3>
                        </div>
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-10">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group mt-3">
                                        <label htmlFor="cv">Upload your CV:</label>
                                        <input
                                            type="file"
                                            id="cv"
                                            name="cv"
                                            accept=".pdf, .doc, .docx"
                                            onChange={handleFileChange}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="mt-3 text-center">
                                        <button type="submit" className="nav-btn">
                                            Submit
                                            <div className="star-1">
                                                <svg viewBox="0 0 784.11 815.53" className="star-svg">
                                                    <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
                                                </svg>
                                            </div>
                                            {/* Add other star elements here if needed */}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}


            </div>
        </section>
    );
};

export default Career;
