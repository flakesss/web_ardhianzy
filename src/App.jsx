// src/App.jsx
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import NavbarLinks from './components/NavbarLinks';
import PageHeader from './components/PageHeader';
import Highlight from './components/Landing_page/Highlight';
import MagazinePreview from './components/Landing_page/Magazine';
import Research from './components/Landing_page/Research';
import Course from './components/Landing_page/Course';
import Monologues from './components/Landing_page/Monologues';
import ReadingGuide from './components/Landing_page/ReadingGuide';
import IdeasTradition from './components/Landing_page/IdeasTradition';
import PopCultureReview from './components/Landing_page/PopCultureReview';
import Shops from './components/Landing_page/Shops';
import LatestVideos from './components/Landing_page/LatestVideos';
import Community from './components/Landing_page/Community';
import Footer from './components/Footer';

import MagazinePage from './pages/MagazinePage';
import ShopPage from './pages/ShopPage';

function AppContent() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  // hitung bottom dari section1 (hanya untuk home)
  const [section1Bottom, setSection1Bottom] = useState(0);
  useEffect(() => {
    if (isHome) {
      const sect = document.getElementById('section1');
      if (sect) {
        setSection1Bottom(sect.offsetTop + sect.offsetHeight);
      }
    }
  }, [isHome]);

  return (
    <div className="app">
      {isHome ? (
        <>
          {/* Landing header */}
          <Navbar />
          <section id="section1" className="section section1">
            <h2>Welcome to ARDHIANZY</h2>
          </section>
          <NavbarLinks topOffset={section1Bottom} />
        </>
      ) : (
        /* Header khusus untuk page non-landing */
        <PageHeader />
      )}

      {/* Konten utama */}
      <div className={isHome ? '' : 'page-content'}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Highlight />
                <MagazinePreview />
                <Research />
                <Course />
                <Monologues />
                <ReadingGuide />
                <IdeasTradition />
                <PopCultureReview />
                <Shops />
                <LatestVideos />
                <Community />
              </>
            }
          />
          <Route path="/magazine" element={<MagazinePage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
