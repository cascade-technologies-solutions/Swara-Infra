// import React, { useState, useEffect } from 'react';
// import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Home from './Pages/home';
// import Packages from './Pages/Packages';
// import About from './Pages/About';
// import Contact from './components/contact';
// import Projects from './components/Projects';
// import TopBar from './components/TopBar';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Premium from './components/Premium';
// import Auth from './components/Auth'; 
// import BallCursor from "./components/Cursor";
// import Backtotop from "./components/Backtotop";
// import WhatsAppButton from './components/Whattsapp';
// import { useCookies } from 'react-cookie';

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Manage login state
//   const [cookies] = useCookies(['user']); // Get user data from cookies

//   // Handle login logic
//   const handleLogin = () => {
//     setIsLoggedIn(true);
//   };

//   // Check if user is already logged in via cookies
//   useEffect(() => {
//     if (cookies.user) {
//       try {
//         JSON.parse(cookies.user); // Try parsing cookies
//         setIsLoggedIn(true); // If successful, mark as logged in
//       } catch (error) {
//         console.error("Error parsing cookies data:", error);
//       }
//     }
//   }, [cookies]);

//   return (
//     <Router>
//       <div>
//       <WhatsAppButton/>
//         <Backtotop />
//         <BallCursor />
//         <TopBar />
//         <Navbar />
//         <Routes>
//           {/* Route Definitions */}
//           <Route path="*" element={<Home />} />
//           <Route path="/packages" element={<Packages />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/about" element={<About />} />
//           <Route
//             path="/projects"
//             element={
//               isLoggedIn ? (
//                 <Projects />
//               ) : (
//                 <Navigate to="/login" state={{ from: '/projects' }} />
//               )
//             }
//           />
//           <Route path="/premium" element={<Premium />} />
//           <Route
//             path="/login"
//             element={<Auth handleLogin={handleLogin} />}
//           />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;

import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from './Pages/home';
import Packages from './Pages/Packages';
import About from './Pages/About';
import Contact from './components/contact';
import Projects from './components/Projects';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Premium from './components/Premium';
// import Auth from './components/Auth'; 
import {Login,Register} from './components/Auth';
import BallCursor from "./components/Cursor";
import Backtotop from "./components/Backtotop";
import WhatsAppButton from './components/Whattsapp';
import { useCookies } from 'react-cookie';

// ScrollToTop Component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on route change
  }, [pathname]);

  return null; // This component does not render anything
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Manage login state
  const [cookies] = useCookies(['user']); // Get user data from cookies

  // Handle login logic
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Check if user is already logged in via cookies
  useEffect(() => {
    if (cookies.user) {
      try {
        JSON.parse(cookies.user); // Try parsing cookies
        setIsLoggedIn(true); // If successful, mark as logged in
      } catch (error) {
        console.error("Error parsing cookies data:", error);
      }
    }
  }, [cookies]);

  return (
    <Router>
      <ScrollToTop /> {/* Ensure scroll resets on route change */}
      <div>
        <WhatsAppButton />
        <Backtotop />
        <BallCursor />
        <TopBar />
        <Navbar />
        <Routes>
          {/* Route Definitions */}
          <Route path="*" element={<Home />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/projects"
            element={
              isLoggedIn ? (
                <Projects />
              ) : (
                <Navigate to="/login" state={{ from: '/projects' }} />
              )
            }
          />
          <Route path="/premium" element={<Premium />} />
          {/* <Route
            path="/login"
            element={<Auth handleLogin={handleLogin} />}
          /> */}
          <Route
            path="/login"
            element={<Login handleLogin={handleLogin} />}
          />
          <Route
            path="/register"
            element={<Register />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
