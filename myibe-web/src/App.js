import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Navbar from './components/navbar';
import Contact from './pages/contact';
import Team from './pages/team';
import Privacy from './pages/privacy';
import Disclaimer from './pages/disclaimer';
import Conditions from './pages/conditions';
import Cookies from './pages/cookies';
import Signup from './pages/signup';
import Login from './pages/login';
import FirstBlog from './pages/FirstBlog';
import Blogs from './pages/Blogs';
import SecondBlog from './pages/SecondBlog';
import Solutions from './pages/Solutions';
import Career from './pages/Career';
import Clubs from './pages/Club';
import Stadium from './pages/Stadium';
import AdminDashboard from './pages/admin-dashboard';
import ClubDashboard from './pages/club-dashboard';
import RDashboard from './pages/r-dashboard';
import AddMusic from './pages/add-music';
import GenerateNew from './pages/generate-new';
import AddSong from './pages/add-song';
import EditProfile from './pages/edit-profile';
import Queue from './pages/Queue';
import AddTimeSlot from './pages/add-time-slot';
import AddPlaylist from './pages/add-playlist';
import AllMusics from './pages/all-musics';
import AllSongs from './pages/all-songs';
import EndUsers from './pages/end-users';
import AllUsers from './pages/all-users';
import PlaylistSongs from './pages/playlist-wise-songs';
import Footer from './components/footer';
import Sidebar from './components/Sidebar';
import ScrollToTopButton from './components/ScrollToTopButton';
import './App.css';
import Loader from './components/loader';
import AllPlaylists from './pages/all-playlists';
import AllTimeSlots from './pages/all-time-slots';
import UserRequests from './pages/user-requests';
import EditUser from './pages/edit-user';
import ForgotPassword from './pages/forgot-password';
import ResetPassword from './pages/reset-password';
import UserQueue from './pages/user-queue';
import SuggestedMusics from './pages/suggested-songs';
import AddUserSong from './pages/add-user-song';
import AllReviews from './pages/reviews';
import Revenue from './pages/revenue';

const MainLayout = () => {
  const location = useLocation();

  // Define routes where Navbar and Footer should be hidden
  const noHeaderFooterRoutes = [
    '/admin-dashboard', '/club-dashboard', '/add-music', '/add-time-slot',
    '/all-musics', '/all-users', '/r-dashboard', '/add-playlist', '/add-song',
    '/all-playlists', '/playlist-wise-songs', '/generate-new', '/all-songs', '/reviews', '/revenue',
    '/all-time-slots', '/edit-profile', '/user-requests', '/edit-user', '/suggested-songs', '/add-user-song' 
    
  ];

  // Add /end-users to hide header and footer but allow public access
  const noHeaderFooterPublicRoutes = ['/end-users', '/queue', '/user-queue'];

  // Check if the current route should hide the header and footer
  const showHeaderFooter = !noHeaderFooterRoutes.includes(location.pathname) && !noHeaderFooterPublicRoutes.includes(location.pathname);

  // Check for a valid token in local storage for private routes
  const token = localStorage.getItem('token');

  // Redirect to login if accessing private routes without a valid token
  if (!token && noHeaderFooterRoutes.includes(location.pathname)) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div style={{ display: 'flex' }}>
      {/* Show Sidebar for certain private routes */}
      {(
        location.pathname === '/admin-dashboard' || 
        location.pathname === '/reviews' || 
        location.pathname === '/add-music' || 
        location.pathname === '/suggested-songs' || 
        location.pathname === '/all-musics' || 
        location.pathname === '/all-users' || 
        location.pathname === '/club-dashboard' || 
        location.pathname === '/r-dashboard' || 
        location.pathname === '/add-playlist' || 
        location.pathname === '/add-song' || 
        location.pathname === '/revenue' || 
        location.pathname === '/all-playlists' || 
        location.pathname === '/playlist-wise-songs' || 
        location.pathname === '/all-songs' || 
        location.pathname === '/generate-new' || 
        location.pathname === '/add-time-slot' || 
        location.pathname === '/all-time-slots' || 
        location.pathname === '/edit-profile' || 
        location.pathname === '/user-requests' || 
        location.pathname === '/add-user-song' || 
        location.pathname === '/edit-user'
      ) && <Sidebar />}
      
      <div style={{ flex: 1 }}>
        {/* Conditionally render Navbar and Footer */}
        {showHeaderFooter && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/revenue" element={<Revenue />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/suggested-songs" element={<SuggestedMusics />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/conditions" element={<Conditions />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Solutions" element={<Solutions />} />
          <Route path="/Career" element={<Career />} />
          <Route path="/queue" element={<Queue />} />
          <Route path="/Stadium" element={<Stadium />} />
          <Route path="/edit-user" element={<EditUser />} />
          <Route path="/add-user-song" element={<AddUserSong />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/club-dashboard" element={<ClubDashboard />} />
          <Route path="/r-dashboard" element={<RDashboard />} />
          <Route path="/add-music" element={<AddMusic />} />
          <Route path="/reviews" element={<AllReviews />} />
          <Route path="/user-requests" element={<UserRequests />} />
          <Route path="/add-time-slot" element={<AddTimeSlot />} />
          <Route path="/add-song" element={<AddSong />} />
          <Route path="/generate-new" element={<GenerateNew />} />
          <Route path="/add-playlist" element={<AddPlaylist />} />
          <Route path="/all-playlists" element={<AllPlaylists />} />
          <Route path="/all-musics" element={<AllMusics />} />
          <Route path="/all-time-slots" element={<AllTimeSlots />} />
          <Route path="/all-songs" element={<AllSongs />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/end-users" element={<EndUsers />} />
          <Route path="/user-queue" element={<UserQueue />} />
          <Route path="/playlist-wise-songs" element={<PlaylistSongs />} />
          <Route path="/all-users" element={<AllUsers />} />
          <Route path="/Clubs" element={<Clubs />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/FirstBlog" element={<FirstBlog />} />
          <Route path="/SecondBlog" element={<SecondBlog />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
        {/* Conditionally render Footer and ScrollToTopButton */}
        {showHeaderFooter && <Footer />}
        {showHeaderFooter && <ScrollToTopButton />}
      </div>
    </div>
  );
};


const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Loader loading={loading} />
      <div style={{ display: loading ? 'none' : 'block' }}>
        <MainLayout />
      </div>
    </Router>
  );
};

export default App;
