import { Link } from 'react-router-dom';
import AnimatedText from '../components/AnimatedText';

const Footer = () => {
  // Scroll to the top of the page when a link is clicked
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="text-white text-center text-lg-start">
      <div className="container p-4">
        <div className="row mt-0">
          <div className="col-lg-6 bo col-md-12 mb-4 mb-md-0">
          <AnimatedText><img src='images/logo.png' width='220' alt='loo' /></AnimatedText>
            <p className='mt-4'><AnimatedText>Empowering people with music</AnimatedText></p>
            <span><i className='fa fa-phone mr-3'></i>+33 6 95 55 22 29</span><br />
            <span><i className='fa fa-envelope mr-3'></i>contact@myvibeconcept.com</span>
          <div className="mt-4">
              <a type="button" href='https://myibe-webapp.netlify.app/' className="btn btn-floating text-danger btn-light btn-lg"><i className="fa fa-facebook"></i></a>
              <a type="button" href='https://www.instagram.com/myvibefr/' className="btn btn-floating btn-light text-danger ml-2 btn-lg"><i className="fa fa-instagram"></i></a>
              <a type="button" href='https://www.linkedin.com/company/96579907' className="btn btn-floating btn-light ml-2 text-danger btn-lg"><i className="fa fa-linkedin"></i></a>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 mt-4 mb-4 mb-md-0">
            <ul className="fa-ul ml-5">
              <li className="mb-3">
                <span className="fa-li"></span><span className="ms-2"><Link className="text-light footer-link" to="/privacy" onClick={handleLinkClick}>Privacy Terms</Link></span>
              </li>
              <li className="mb-3">
                <span className="fa-li"></span><span className="ms-2"><Link className="text-light footer-link" to="/disclaimer" onClick={handleLinkClick}>Disclaimer</Link></span>
              </li>
              <li className="mb-3">
                <span className="fa-li"></span><span className="ms-2"><Link className="text-light footer-link" to="/conditions" onClick={handleLinkClick}>Conditions Of Use</Link></span>
              </li>
              <li className="mb-3">
                <span className="fa-li"></span><span className="ms-2"><Link className="text-light footer-link" to="/cookies" onClick={handleLinkClick}>Cookies Policy</Link></span>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="text-center p-3">
        © 2024 Copyright |
        <a className="text-white" href="https://myvibeconcept.com/">Myvibeconcept.com</a>
      </div>
    </footer>
  );
};

export default Footer;
