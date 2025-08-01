// src/App.jsx
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import './App.css';

// ... (import komponen-komponen lain yang sudah ada)
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
import ResearchPage from './pages/ResearchPage';
import MonologuesPage from './pages/MonologuesPage';
import IdeasTraditionPage from './pages/IdeasTraditionPage';
import PopCultureReviewPage from './pages/PopCultureReviewPage';
import ReadingGuidePage from './pages/ReadingGuidePage';
import ReadPage from './pages/ReadPage';
import GuidePage from './pages/GuidePage';
import TimelineOfThought from './components/Landing_page/TimelineOfThought';
import BiographyView from './components/BiographyView';
import philosophers from './data/philosophersData.js';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import ReadHistoryPage from './pages/ReadHistoryPage';

import AdminLoginPage from './pages/admin/AdminLoginPage';
import AdminLayout from './components/admin/AdminLayout';
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import ProtectedRoute from './components/admin/ProtectedRoute';
import AdminArticlePage from './pages/admin/AdminArticlePage';
import AdminAddArticlePage from './pages/admin/AdminAddArticlePage';
import AdminAddItemPage from './pages/admin/AdminAddItemPage';
import AdminListItemPage from './pages/admin/AdminListItemPage';
import AdminAnalyticsPage from './pages/admin/AdminAnalyticsPage'; 


function AppContent() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  
  const isAuthPage = location.pathname.startsWith('/admin') || 
                     location.pathname === '/login' || 
                     location.pathname === '/signup';

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  useEffect(() => {
    const adminStatus = localStorage.getItem('isAdminLoggedIn') === 'true';
    setIsAdminLoggedIn(adminStatus);
  }, []);


  const [selectedPhilosopher, setSelectedPhilosopher] = useState(null);

  const handleMarkerClick = (philosopherId) => {
    const foundPhilosopher = philosophers.find(p => p.id === philosopherId);
    setSelectedPhilosopher(foundPhilosopher);
  };

  const handleCloseBiography = () => {
    setSelectedPhilosopher(null);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    alert('You have been logged out.');
  };
  
  if (isAuthPage) {
    return (
      <Routes>
        <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/admin/login" element={<AdminLoginPage setIsAdminLoggedIn={setIsAdminLoggedIn} />} />
        <Route 
          path="/admin/*" 
          element={
            <ProtectedRoute isAdminLoggedIn={isAdminLoggedIn}>
              <AdminLayout setIsAdminLoggedIn={setIsAdminLoggedIn}>
                <Routes>
                   <Route path="dashboard" element={<AdminDashboardPage />} />
                   {/* Rute Admin */}
                   <Route path="articles/list" element={<AdminArticlePage />} />
                   <Route path="articles/add" element={<AdminAddArticlePage />} />
                   <Route path="shop/list" element={<AdminListItemPage />} />
                   <Route path="shop/add" element={<AdminAddItemPage />} />
                   {/* DIUBAH: Semua rute analytics mengarah ke satu halaman */}
                   <Route path="analytics" element={<AdminAnalyticsPage />} />
                </Routes>
              </AdminLayout>
            </ProtectedRoute>
          } 
        />
      </Routes>
    );
  }

  // Render layout normal untuk user biasa
  return (
    <div className="app">
      {isHome ? (
        <>
          <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
          <section id="section1" className="section section1">
            <div className="main-content-container">
              {selectedPhilosopher && (
                <div className="biography-panel">
                  <BiographyView 
                    philosopher={selectedPhilosopher} 
                    onClose={handleCloseBiography} 
                  />
                </div>
              )}
              <div className="map-wrapper">
                <TimelineOfThought 
                  philosophers={philosophers}
                  onMarkerClick={handleMarkerClick}
                />
              </div>
            </div>
          </section>
          <NavbarLinks />
        </>
      ) : (
        <PageHeader isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      )}

      <div className={isHome ? '' : 'page-content'}>
        <Routes>
          <Route path="/" element={
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
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/monologues" element={<MonologuesPage/>}/>
          <Route path="/IdeasTradition" element={<IdeasTraditionPage />}/>
          <Route path="/PopCultureReview" element={<PopCultureReviewPage />}/>
          <Route path="/ReadingGuide" element={<ReadingGuidePage />} />
          <Route path="/read/:articleId" element={<ReadPage />} />
          <Route path="/guide/:guideId" element={<GuidePage />} /> 
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/read-history" element={<ReadHistoryPage />} />
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
