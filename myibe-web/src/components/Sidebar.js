import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faQrcode } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const location = useLocation(); // Get the current route
  const navigate = useNavigate();
  
  // Retrieve user ID from local storage (or wherever it's stored)
  const userId = localStorage.getItem('userId'); // Adjust if necessary

  // Scroll to the top of the page when a link is clicked
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  // Logout function to clear local storage and redirect to the login page
  const handleLogout = () => {
    localStorage.clear(); // Clear all local storage
    navigate('/login'); // Redirect to the login page
  };

  // Determine which sidebar links to show based on the current route
  const adminRoutes = ['/admin-dashboard', '/reviews','/add-music', '/all-musics', '/all-users', '/edit-profile', '/suggested-songs'];
  const clubRoutes = ['/club-dashboard', '/revenue', '/add-playlist', '/add-song', '/all-songs', '/all-playlists', '/edit-user','/playlist-wise-songs', '/add-user-song','/all-songs', '/generate-new', '/end-users', '/add-time-slot', '/all-time-slots', '/user-requests'];
  const otherRoutes = ['/r-dashboard'];
  const isAdmin = adminRoutes.some(route => location.pathname.startsWith(route));
  const isClub = clubRoutes.some(route => location.pathname.startsWith(route));
  const isOther = otherRoutes.some(route => location.pathname.startsWith(route));

  return (
    <div className="sidebar">
      <nav className="nab">
        <div className="logo_item">
          <i className="bx bx-menu" id="sidebarOpen"></i>
          <img src="images/logo.png" alt="Logo" />
        </div>
        <div className="navbar_content">
          <i className="bi bi-grid"></i>
          <i className="bx bx-sun" id="darkLight"></i>
          <i className="bx bx-bell"></i>
          <img src="images/user.jpg" alt="Profile" className="profile" />
        </div>
      </nav>
      <nav className="sidebar">
        <div className="menu_content">
          <ul className="menu_items">
            <div className="menu_title menu_dashboard">Dashboard</div>
            {isAdmin && (
              <>
                <li className="item">
                  <Link to="/admin-dashboard" className="nav_link submenu_item" onClick={handleLinkClick}>
                    <span className="navlink_icon">
                      <i className="bx bx-home-alt"></i>
                    </span>
                    <span className="navlink">Home</span>
                  </Link>
                </li>
                <li className="item">
                  <Link to="/add-music" className="nav_link" onClick={handleLinkClick}>
                    <span className="navlink_icon">
                      <i className="bx bx-music"></i>
                    </span>
                    <span className="navlink">Add Song</span>
                  </Link>
                </li>
                <li className="item">
                  <Link to={`/all-musics`} className="nav_link" onClick={handleLinkClick}>
                    <span className="navlink_icon">
                      <i className="bx bx-music"></i>
                    </span>
                    <span className="navlink">All Songs</span>
                  </Link>
                </li>
                <li className="item">
                  <Link to={`/suggested-songs`} className="nav_link" onClick={handleLinkClick}>
                    <span className="navlink_icon">
                      <i className="bx bx-music"></i>
                    </span>
                    <span className="navlink">Suggested Songs</span>
                  </Link>
                </li>
                <li className="item">
                  <Link to="/all-users" className="nav_link" onClick={handleLinkClick}>
                    <span className="navlink_icon">
                      <i className="bx bx-user"></i>
                    </span>
                    <span className="navlink">All Users</span>
                  </Link>
                </li>
                <ul className="menu_items">
            <div className="menu_title">Reviews</div>
            <li className="item">
              <Link to="/reviews" className="nav_link" onClick={handleLinkClick}>
                <span className="navlink_icon">
                  <i className="bx bx-comment"></i>
                </span>
                <span className="navlink">All Reviews</span>
              </Link>
            </li>
          </ul>
                <ul className="menu_items">
            <div className="menu_title menu_setting"></div>
            <li className="item">
              <Link to="/edit-profile" className="nav_link" onClick={handleLinkClick}>
                <span className="navlink_icon">
                  <i className="bx bx-edit"></i>
                </span>
                <span className="navlink">Edit Profile</span>
              </Link>
            </li>
          </ul>
         
              </>
            )}
            {isClub && (
              <>
                <li className="item">
                  <Link to="/club-dashboard" className="nav_link submenu_item" onClick={handleLinkClick}>
                    <span className="navlink_icon">
                      <i className="bx bx-home-alt"></i>
                    </span>
                    <span className="navlink">Home</span>
                  </Link>
                </li>
                <ul className="menu_items">
                  <div className="menu_title">Manage Playlists</div>
                  <li className="item">
                  <Link to="/add-user-song" className="nav_link submenu_item" onClick={handleLinkClick}>
                    <span className="navlink_icon">
                      <i className="bx bx-music"></i>
                    </span>
                    <span className="navlink">Add song</span>
                  </Link>
                </li>
                  <li className="item">
                    
                    <Link to="/add-playlist" className="nav_link" onClick={handleLinkClick}>
                      <span className="navlink_icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="svg">
                          <path d="M13 16.493C13 18.427 14.573 20 16.507 20s3.507-1.573 3.507-3.507c0-.177-.027-.347-.053-.517H20V6h2V4h-3a1 1 0 0 0-1 1v8.333a3.465 3.465 0 0 0-1.493-.346A3.51 3.51 0 0 0 13 16.493zM2 5h14v2H2z"></path>
                          <path d="M2 9h14v2H2zm0 4h9v2H2zm0 4h9v2H2z"></path>
                        </svg>
                      </span>
                      <span className="navlink">Add Playlist</span>
                    </Link>
                  </li>
                  <li className="item">
                    <Link to="/add-song" className="nav_link" onClick={handleLinkClick}>
                      <span className="navlink_icon">
                        <i className="bx bx-music"></i>
                      </span>
                      <span className="navlink">Add Song To Playlist</span>
                    </Link>
                  </li>
                  <li className="item">
                    <Link to="/all-playlists" className="nav_link" onClick={handleLinkClick}>
                      <span className="navlink_icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="svg">
                          <path d="M13 16.493C13 18.427 14.573 20 16.507 20s3.507-1.573 3.507-3.507c0-.177-.027-.347-.053-.517H20V6h2V4h-3a1 1 0 0 0-1 1v8.333a3.465 3.465 0 0 0-1.493-.346A3.51 3.51 0 0 0 13 16.493zM2 5h14v2H2z"></path>
                          <path d="M2 9h14v2H2zm0 4h9v2H2zm0 4h9v2H2z"></path>
                        </svg>
                      </span>
                      <span className="navlink">All Playlists</span>
                    </Link>
                  </li>
                  
                  <li className="item">
                    <Link to={`/all-songs?userId=${userId}`} className="nav_link" onClick={handleLinkClick}>
                      <span className="navlink_icon">
                        <i className="bx bx-music"></i>
                      </span>
                      <span className="navlink">All Songs</span>
                    </Link>
                  </li>
                  
                </ul>
                <ul className="menu_items">
                  <div className="menu_title">Manage queue</div>
                  <li className="item">
                  <Link to={`/end-users?userId=${userId}`} className="nav_link" onClick={handleLinkClick}>
                    <span className="navlink_icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 2H8c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2M8 16V4h12l.002 12z"/><path fill="currentColor" d="M4 8H2v12c0 1.103.897 2 2 2h12v-2H4zm11-2h-2v3h-3v2h3v3h2v-3h3V9h-3z"/></svg>
                    </span>
                    <span className="navlink">Add song to queue</span>
                  </Link>
                </li>
                <li className="item">
                  <Link to={`/user-requests?userId=${userId}`} className="nav_link" onClick={handleLinkClick}>
                    <span className="navlink_icon">
                      <i className="bx bx-user"></i>
                    </span>
                    <span className="navlink">User songs for queue</span>
                  </Link>
                </li>
                <li className="item">
                  <Link to={`/queue?userId=${userId}`} className="nav_link" onClick={handleLinkClick}>
                    <span className="navlink_icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 2H8c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2M8 16V4h12l.002 12z"/><path fill="currentColor" d="M4 8H2v12c0 1.103.897 2 2 2h12v-2H4zm11-2h-2v3h-3v2h3v3h2v-3h3V9h-3z"/></svg>
                    </span>
                    <span className="navlink">Live queue</span>
                  </Link>
                </li>
                </ul>
                <ul className="menu_items">
                  <div className="menu_title">Manage QR Codes</div>
                  <li className="item">
                    <Link to={`/generate-new?userId=${userId}`} className="nav_link" onClick={handleLinkClick}>
                    <span className="navlink_icon">
                        <FontAwesomeIcon icon={faQrcode} />
                      </span>
                      <span className="navlink">Generate New</span>
                    </Link>
                  </li>
                </ul>
                <ul className="menu_items">
                  <div className="menu_title">Manage time slots and pricing</div>
                  <li className="item">
                    <Link to={`/add-time-slot`} className="nav_link" onClick={handleLinkClick}>
                    <span className="navlink_icon">
                        <FontAwesomeIcon icon={faClock} />
                      </span>
                      <span className="navlink">Add time slot</span>
                    </Link>
                  </li>
                  <li className="item">
                    <Link to={`/all-time-slots`} className="nav_link" onClick={handleLinkClick}>
                    <span className="navlink_icon">
                        <FontAwesomeIcon icon={faClock} />
                      </span>
                      <span className="navlink">All time slots</span>
                    </Link>
                  </li>
                </ul>
               
               
                <ul className="menu_items">
            <div className="menu_title">Statistics</div>
            <li className="item">
              <Link to="/revenue" className="nav_link" onClick={handleLinkClick}>
                <span className="navlink_icon">
                  <i className="bx bx-money"></i>
                </span>
                <span className="navlink">Revenue</span>
              </Link>
            </li>
          </ul>

          <ul className="menu_items">
            <div className="menu_title menu_setting"></div>
            <li className="item">
              <Link to="/edit-user" className="nav_link" onClick={handleLinkClick}>
                <span className="navlink_icon">
                  <i className="bx bx-edit"></i>
                </span>
                <span className="navlink">Edit Profile</span>
              </Link>
            </li>
          </ul>
          
              </>
            )}
            {isOther && (
              <>
                <li className="item">
                  <Link to="/r-dashboard" className="nav_link submenu_item" onClick={handleLinkClick}>
                    <span className="navlink_icon">
                      <i className="bx bx-home-alt"></i>
                    </span>
                    <span className="navlink">Dashboard</span>
                  </Link>
                </li>
                {/* Add Other Dashboard-specific links here */}
              </>
            )}
          </ul>
          <div className="bottom_content">
            <div className="bottom expand_sidebar">
              <span>Expand</span>
              <i className="bx bx-log-in"></i>
            </div>
            <div className="bottom collapse_sidebar" onClick={handleLogout}>
              <span>Logout</span>
              <i className="bx bx-log-out"></i>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
