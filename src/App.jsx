// src/App.jsx
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Outlet, // Import Outlet untuk membuat Layout Route
  Navigate // Import Navigate untuk redirect
} from 'react-router-dom';
import './App.css';

// --- Import Komponen Halaman Publik ---
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
// --- HAPUS: Import halaman terkait user ---
// import SignUpPage from './pages/SignUpPage';
// import LoginPage from './pages/LoginPage';
// import ProfilePage from './pages/ProfilePage';
// import ReadHistoryPage from './pages/ReadHistoryPage';

// --- Import Komponen Halaman Admin ---
import AdminLoginPage from './pages/admin/AdminLoginPage';
import AdminLayout from './components/admin/AdminLayout';
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import ProtectedRoute from './components/admin/ProtectedRoute';
import AdminArticlePage from './pages/admin/AdminArticlePage';
import AdminAddArticlePage from './pages/admin/AdminAddArticlePage';
import AdminAddItemPage from './pages/admin/AdminAddItemPage';
import AdminListItemPage from './pages/admin/AdminListItemPage';
import AdminAnalyticsPage from './pages/admin/AdminAnalyticsPage';

// =================================================================
// PERBAIKAN: Komponen "PublicLayout" disederhanakan.
// Prop isLoggedIn dan handleLogout dihapus karena tidak lagi diperlukan.
// =================================================================
function PublicLayout() {
    const location = useLocation();
    const isHome = location.pathname === '/';

    // State untuk Timeline (tidak berubah)
    const [selectedPhilosopher, setSelectedPhilosopher] = useState(null);
    const handleMarkerClick = (philosopherId) => {
        const foundPhilosopher = philosophers.find(p => p.id === philosopherId);
        setSelectedPhilosopher(foundPhilosopher);
    };
    const handleCloseBiography = () => setSelectedPhilosopher(null);

    return (
        <div className="app">
            {isHome ? (
                <>
                    {/* Props isLoggedIn dan handleLogout dihapus */}
                    <Navbar />
                    <section id="section1" className="section section1">
                        <div className="main-content-container">
                            {selectedPhilosopher && (
                                <div className="biography-panel">
                                    <BiographyView philosopher={selectedPhilosopher} onClose={handleCloseBiography} />
                                </div>
                            )}
                            <div className="map-wrapper">
                                <TimelineOfThought philosophers={philosophers} onMarkerClick={handleMarkerClick} />
                            </div>
                        </div>
                    </section>
                    <NavbarLinks />
                </>
            ) : (
                // Props isLoggedIn dan handleLogout dihapus
                <PageHeader />
            )}

            <main className={isHome ? '' : 'page-content'}>
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}


// =================================================================
// PERBAIKAN: Menyederhanakan AppContent
// State dan fungsi yang berhubungan dengan login user (isLoggedIn, handleLogout) dihapus.
// =================================================================
function AppContent() {
  // State login untuk user biasa dihapus
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  useEffect(() => {
    // Hanya cek status login admin
    const adminStatus = localStorage.getItem('isAdminLoggedIn') === 'true';
    setIsAdminLoggedIn(adminStatus);
  }, []);

  // Fungsi handleLogout untuk user biasa dihapus

  return (
    <Routes>
      {/* HAPUS: Rute untuk /login dan /signup */}
      <Route path="/admin/login" element={<AdminLoginPage setIsAdminLoggedIn={setIsAdminLoggedIn} />} />

      {/* Rute untuk Admin (menggunakan AdminLayout) - Tidak ada perubahan */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute isAdminLoggedIn={isAdminLoggedIn}>
            <AdminLayout setIsAdminLoggedIn={setIsAdminLoggedIn} />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="analytics" replace />} />
        <Route path="dashboard" element={<AdminDashboardPage />} />
        <Route path="analytics" element={<AdminAnalyticsPage />} />
        <Route path="articles/list" element={<AdminArticlePage />} />
        <Route path="articles/add" element={<AdminAddArticlePage />} />
        <Route path="shop/list" element={<AdminListItemPage />} />
        <Route path="shop/add" element={<AdminAddItemPage />} />
      </Route>

      {/* PERBAIKAN: Rute Halaman Publik tidak lagi mengirimkan props login */}
      <Route path="/" element={<PublicLayout />}>
        <Route index element={
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
        <Route path="magazine" element={<MagazinePage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="research" element={<ResearchPage />} />
        <Route path="monologues" element={<MonologuesPage/>}/>
        <Route path="IdeasTradition" element={<IdeasTraditionPage />}/>
        <Route path="PopCultureReview" element={<PopCultureReviewPage />}/>
        <Route path="ReadingGuide" element={<ReadingGuidePage />} />
        <Route path="read/:articleId" element={<ReadPage />} />
        <Route path="guide/:guideId" element={<GuidePage />} />
        {/* HAPUS: Rute untuk /profile dan /read-history */}
      </Route>
    </Routes>
  );
}

// Komponen App utama tetap sederhana
export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}