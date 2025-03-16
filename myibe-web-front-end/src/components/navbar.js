import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';

const Navbar = ({ setLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    // Scroll to top whenever location changes
    window.scrollTo(0, 0);
  }, [location]);

  const toggleNavbar = () => setIsOpen(!isOpen);
  const closeNavbar = () => setIsOpen(false);
  const toggleSearch = () => setShowSearch(!showSearch);
  const toggleLanguageDropdown = () => setShowLanguageDropdown(!showLanguageDropdown);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
    setShowLanguageDropdown(false); // Close dropdown after selection
  };

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <div>
      <header className="header_section">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container">
            <Link className="navbar-brand" to="/">
              <div className='by'>
                <img className="logo" src="images/my-logo.png" alt="Logo" />
              </div>
            </Link>
            <div className="aaa extra-controls mt-0">
              {/* Language Button */}
              <span className='text-danger lang' onClick={toggleLanguageDropdown}>
                <i className='fa fa-language'></i>
              </span>
              {showLanguageDropdown && (
                <div className="language-dropdown">
                  <ul>
                    <li onClick={() => handleLanguageChange('en')}>English</li>
                    <li onClick={() => handleLanguageChange('fr')}>French</li>
                  </ul>
                </div>
              )}
              {/* Search Button */}
              <span className='text-danger lang' onClick={toggleSearch}>
                <i className='fa fa-search'></i>
              </span>
              {showSearch && (
                <input
                  type="text"
                  placeholder="Search..."
                  className="search-input"
                  onBlur={() => setShowSearch(false)} // Optional: close on blur
                />
              )}
            </div>
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleNavbar}
              aria-controls="navbarSupportedContent"
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarSupportedContent">
              <div className="d-flex mx-auto flex-column flex-lg-row align-items-center">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className={`nav-link ${isActive('/')}`} to="/" onClick={closeNavbar}>{t('Home')}</Link>
                  </li>
                  <li className="nav-item">
                    <Link className={`nav-link ${isActive('/about')}`} to="/about" onClick={closeNavbar}>{t('About Us')}</Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link className={`nav-link ${isActive('/solutions')}`} to="/solutions" onClick={closeNavbar}>{t('Solutions')}<i className='fa fa-caret-down ml-1'></i></Link>
                    <ul className="dropdown-menu">
                      <li><Link className={`nav-link ${isActive('/solutions')}`} to="/solutions" onClick={closeNavbar}>{t('Restaurants, Cafes')}</Link></li>
                      <li><Link className={`nav-link ${isActive('/clubs')}`} to="/clubs" onClick={closeNavbar}>{t('Clubs')}</Link></li>
                      <li><Link className={`nav-link ${isActive('/stadium')}`} to="/stadium" onClick={closeNavbar}>{t('Stadiums')}</Link></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link className={`nav-link ${isActive('/team')}`} to="/team" onClick={closeNavbar}>{t('Team')}</Link>
                  </li>
                  <li className="nav-item">
                    <Link className={`nav-link ${isActive('/career')}`} to="/career" onClick={closeNavbar}>{t('Careers')}</Link>
                  </li>
                  <li className="nav-item">
                    <Link className={`nav-link ${isActive('/blogs')}`} to="/blogs" onClick={closeNavbar}>{t('Blog')}</Link>
                  </li>
                  <li className="nav-item">
                    <Link className={`nav-link ${isActive('/contact')}`} to="/contact" onClick={closeNavbar}>{t('Contact')}</Link>
                  </li>
                  <li className="nav-item aaa">
                    <Link className={`nav-link ${isActive('/login')}`} to="/login" onClick={closeNavbar}>{t('Login')}</Link>
                  </li>
                  <li className="nav-item aaa">
                    <Link className={`nav-link ${isActive('/signup')}`} to="/signup" onClick={closeNavbar}>{t('Sign Up')}</Link>
                  </li>
                </ul>
                <div className="extra-controls bbb">
                  {/* Language Button */}
                  <span className='text-danger lang' onClick={toggleLanguageDropdown}>
                    <i className='fa fa-language'></i>
                  </span>
                  {showLanguageDropdown && (
                    <div className="language-dropdown">
                      <ul>
                        <li onClick={() => handleLanguageChange('en')}>English</li>
                        <li onClick={() => handleLanguageChange('fr')}>French</li>
                      </ul>
                    </div>
                  )}
                  {/* Search Button */}
                  <span className='text-danger lang' onClick={toggleSearch}>
                    <i className='fa fa-search'></i>
                  </span>
                  {showSearch && (
                    <input
                      type="text"
                      placeholder="Search..."
                      className="search-input"
                      onBlur={() => setShowSearch(false)} // Optional: close on blur
                    />
                  )}
                </div>
              </div>
              <div className="quote_btn-container mr-2 d-flex justify-content-center">
                <div>
                  <Link className="nav-btn" to="/login" onClick={closeNavbar}>
                    Login
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
                    </div>
                    <div className="star-5">
                      <svg viewBox="0 0 784.11 815.53" className="star-svg">
                        <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
                      </svg>
                    </div>
                    <div className="star-6">
                      <svg viewBox="0 0 784.11 815.53" className="star-svg">
                        <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
                      </svg>
                    </div>                    
                  </Link>
                </div>
              </div>
              <div className="quote_btn-container mr-2 d-flex justify-content-center">
                <div>
                  <Link className="nav-btn" to="/signup" onClick={closeNavbar}>
                    Create an account
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
                    </div>
                    <div className="star-5">
                      <svg viewBox="0 0 784.11 815.53" className="star-svg">
                        <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
                      </svg>
                    </div>
                    <div className="star-6">
                      <svg viewBox="0 0 784.11 815.53" className="star-svg">
                        <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
