// src/NewPage.js

import React from 'react';

const disclaimer = () => {
    return (
        <section className="about_section layout_padding">
            <div className="container">
                <h1>Disclaimer</h1>
                <div className='lll'><img className='my-logo mt-0' alt='ooo' src='images/my-logo.png' /></div>    
            
                <div className="row">
                    <h3 className='text-bold mb-0'>My Vibe Disclaimer</h3>
                    <p className='para'>
                        The information provided by My Vibe (“we,” “us,” or “our”) on our website and through our
                        services is for general informational purposes only. All information on the My Vibe platform
                        is provided in good faith; however, we make no representation or warranty of any kind,
                        express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or
                        completeness of any information on the site or through our services.

                    </p>
                    <ol>
                        <h4 className='mt-3'>1. No Professional Advice</h4>
                        <p className='para'>
                            The content provided by My Vibe is for informational purposes only and should not be
                            construed as professional advice. We recommend that you consult with the appropriate
                            professionals before taking any actions based on the information provided on our platform.

                        </p>
                        <h4 className='mt-3'>2. Use at Your Own Risk</h4>
                        <p className='para'>
                            Any reliance you place on the information found on our platform is strictly at your own risk.
                            My Vibe will not be liable for any losses or damages in connection with the use of our
                            website and services.
                        </p>
                        <h4 className='mt-3'>3. External Links</h4>
                        <p className='para'>
                            Our platform may contain links to external websites that are not provided or maintained by
                            My Vibe. We do not guarantee the accuracy, relevance, timeliness, or completeness of any
                            information on these external websites. The inclusion of any links does not imply a
                            recommendation or endorsement of the views expressed within them.
                        </p>
                        <h4 className='mt-3'>4. No Warranties</h4>
                        <p className='para'>
                            My Vibe services are provided on an "as is" and "as available" basis without any warranties of
                            any kind, either express or implied, including but not limited to, the implied warranties of
                            merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that
                            the services will be uninterrupted, error-free, or free of viruses or other harmful components.

                        </p>
                        <h4 className='mt-3'>5. Limitation of Liability
                        </h4>
                        <p className='para'>
                            To the fullest extent permitted by applicable law, in no event shall My Vibe be liable for any
                            direct, indirect, incidental, special, consequential, or punitive damages, including without
                            limitation, lost profits, data loss, or other intangible losses, arising out of or relating to your
                            use or inability to use our services, even if we have been advised of the possibility of such
                            damages.
                        </p>
                        <p className='para'>Disclaimer, September 2024
                        </p>
                        <h4 className='mt-3'>6. Changes to the Disclaimer
                        </h4>
                        <p className='para'>
                            My Vibe reserves the right to amend this disclaimer at any time without prior notice. By using
                            our platform, you agree to be bound by the current version of this disclaimer.
                        </p>
                        <h4 className='mt-3'>7. Contact Us
                        </h4>
                        <p className='para'>
                            If you have any questions or concerns about this disclaimer, please contact us via our website.
                            Thank you for using My Vibe!</p>

                        <p>Thank you for using My Vibe!</p>
                        <hr />
                        <p>By using My Vibe, you acknowledge and agree to this Disclaimer.</p>
                    </ol>
                </div>

            </div>

        </section>

    );
};

export default disclaimer;
