// src/components/admin/AdminLayout.jsx
import React, { useState } from 'react';
import { Outlet, useNavigate, NavLink, useLocation } from 'react-router-dom';
import './Sidebar.css';
// 1. Import AdminHeader di sini
import AdminHeader from './AdminHeader'; 

// --- Komponen Ikon SVG (Tidak ada perubahan di sini) ---
const AnalyticsIcon = ({ isActive }) => (
  <svg width="20" height="18" viewBox="0 0 20 18" fill={isActive ? "#000000" : "#FFFFFF"} xmlns="http://www.w3.org/2000/svg">
    <path d="M1.66602 17.5V9.66667H4.99935V17.5H1.66602ZM8.33268 17.5V0.833333H11.666V17.5H8.33268ZM14.9993 17.5V5H18.3327V17.5H14.9993Z"/>
  </svg>
);
const ArticleIcon = ({ isActive }) => (
    <svg width="19" height="18" viewBox="0 0 19 18" fill={isActive ? "#000000" : "#FFFFFF"} xmlns="http://www.w3.org/2000/svg">
        <path d="M9.5 0C8.23125 0 7.0575 0.3375 6.075 1.0125C5.0925 1.6875 4.35 2.5875 3.8475 3.7125C3.345 4.8375 3.09375 6.075 3.09375 7.425C3.09375 8.8875 3.42 10.1625 4.0725 11.25C4.725 12.3375 5.58 13.1625 6.6375 13.725C7.695 14.2875 8.8575 14.5725 10.125 14.5725C10.35 14.5725 10.575 14.55 10.8 14.505V18L14.715 14.7075C15.51 14.0175 16.14 13.14 16.605 12.075C17.07 11.01 17.3025 9.81 17.3025 8.475C17.3025 6.075 16.4475 4.14 14.7375 2.67C13.0275 1.2 11.31 0.465 9.585 0.465L9.5 0ZM1.6125 5.085C2.43 3.8025 3.4875 2.775 4.785 2.0025C6.0825 1.23 7.5375 0.84375 9.15 0.84375C10.7625 0.84375 12.24 1.26 13.5825 2.0925C14.925 2.925 15.975 4.05 16.7325 5.4675C17.49 6.885 17.8725 8.43 17.8725 10.1025C17.8725 11.775 17.49 13.32 16.7325 14.7375C15.975 16.155 14.925 17.28 13.5825 18.1125H1.6125V5.085Z" />
    </svg>
);
const ShopIcon = ({ isActive }) => (
    <svg width="19" height="18" viewBox="0 0 19 18" fill={isActive ? "#000000" : "currentColor"} xmlns="http://www.w3.org/2000/svg">
        <path d="M0.5 0.5V2.75H2.3L5.45 9.425L4.25 11.5C4.08333 11.8167 4 12.1583 4 12.5C4 13.6 4.9 14.5 6 14.5H17V12.5H6.35C6.23333 12.5 6.15 12.4167 6.15 12.3C6.15 12.25 6.15833 12.2 6.175 12.15L7.1 10.5H14.075C14.75 10.5 15.3417 10.1417 15.65 9.575L18.8 3.65C18.9167 3.43333 19 3.19167 19 2.95C19 2.4 18.6 2 18.05 2H4.475L3.725 0.5H0.5ZM15.5 15.5C14.8333 15.5 14.2917 16.0417 14.2917 16.7083C14.2917 17.375 14.8333 17.9167 15.5 17.9167C16.1667 17.9167 16.7083 17.375 16.7083 16.7083C16.7083 16.0417 16.1667 15.5 15.5 15.5ZM6.5 15.5C5.83333 15.5 5.29167 16.0417 5.29167 16.7083C5.29167 17.375 5.83333 17.9167 6.5 17.9167C7.16667 17.9167 7.70833 17.375 7.70833 16.7083C7.70833 16.0417 7.16667 15.5 6.5 15.5Z"/>
    </svg>
);
const LogoutIcon = () => (
    <svg width="20" height="18" viewBox="0 0 20 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.6667 14.1667L11.4917 13.0083L13.6583 10.8333H6.66667V9.16667H13.6583L11.4917 7L12.6667 5.83333L16.8333 10L12.6667 14.1667ZM3.33333 17.5C2.41667 17.5 1.64583 17.1875 1.02083 16.5625C0.395833 15.9375 0.0833333 15.1667 0.0833333 14.25V5.75C0.0833333 4.83333 0.395833 4.0625 1.02083 3.4375C1.64583 2.8125 2.41667 2.5 3.33333 2.5H8.33333V4.16667H3.33333C3.11111 4.1667 2.92361 4.23958 2.77083 4.38542C2.61806 4.53125 2.54167 4.71528 2.54167 4.9375V15.0625C2.54167 15.2847 2.61806 15.4722 2.77083 15.625C2.92361 15.7778 3.11111 15.8542 3.33333 15.8333H8.33333V17.5H3.33333Z"/>
    </svg>
);
const ArrowIcon = ({ isOpen, isActive }) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" 
         style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
        <path d="M6 15L12 9L18 15" stroke={isActive ? "#000000" : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
// --- Akhir Komponen Ikon ---

function Sidebar({ handleLogout }) {
    const location = useLocation();
    
    const isAnalyticsRoute = location.pathname.startsWith('/admin/analytics');
    const isArticleRoute = location.pathname.startsWith('/admin/articles');
    const isShopRoute = location.pathname.startsWith('/admin/shop');

    const [isAnalyticsOpen, setAnalyticsOpen] = useState(isAnalyticsRoute);
    const [isArticleOpen, setArticleOpen] = useState(isArticleRoute);
    const [isShopOpen, setShopOpen] = useState(isShopRoute);

    return (
        <div className="sidebar">
            <div>
                <div className="sidebar-header">
                    <img src="/assets/Ardhianzy_Logo.jpg" alt="Logo" className="sidebar-logo" />
                </div>
                <div className="divider" />
                <nav className="sidebar-nav">
                    {/* Analytics Menu */}
                    <div className="nav-item">
                        <div className={`nav-link ${isAnalyticsRoute ? 'active' : ''}`} onClick={() => setAnalyticsOpen(!isAnalyticsOpen)}>
                            <div className="nav-link-content">
                                <AnalyticsIcon isActive={isAnalyticsRoute} />
                                <span>Analytics</span>
                            </div>
                            <ArrowIcon isOpen={isAnalyticsOpen} isActive={isAnalyticsRoute} />
                        </div>
                        {isAnalyticsOpen && (
                            <div className="submenu">
                                <NavLink to="/admin/analytics#web-performance" className="submenu-item">Web perfomance</NavLink>
                                <NavLink to="/admin/analytics#article-analytics" className="submenu-item">Analytics Article</NavLink>
                                <NavLink to="/admin/analytics#shop-analytics" className="submenu-item">Analytics Shop</NavLink>
                            </div>
                        )}
                    </div>

                    {/* Article Menu */}
                    <div className="nav-item">
                        <div className={`nav-link ${isArticleRoute ? 'active' : ''}`} onClick={() => setArticleOpen(!isArticleOpen)}>
                            <div className="nav-link-content">
                                <ArticleIcon isActive={isArticleRoute} />
                                <span>Article</span>
                            </div>
                            <ArrowIcon isOpen={isArticleOpen} isActive={isArticleRoute} />
                        </div>
                        {isArticleOpen && (
                            <div className="submenu">
                                <NavLink to="/admin/articles/add" className="submenu-item">Add Article</NavLink>
                                <NavLink to="/admin/articles/list" className="submenu-item">List Article</NavLink>
                            </div>
                        )}
                    </div>

                    {/* Shop Menu */}
                    <div className="nav-item">
                        <div className={`nav-link ${isShopRoute ? 'active' : ''}`} onClick={() => setShopOpen(!isShopOpen)}>
                            <div className="nav-link-content">
                                <ShopIcon isActive={isShopRoute} />
                                <span>Shop</span>
                            </div>
                            <ArrowIcon isOpen={isShopOpen} isActive={isShopRoute} />
                        </div>
                        {isShopOpen && (
                            <div className="submenu">
                                <NavLink to="/admin/shop/add" className="submenu-item">Add Item</NavLink>
                                <NavLink to="/admin/shop/list" className="submenu-item">List Item</NavLink>
                            </div>
                        )}
                    </div>
                </nav>
            </div>
            <div className="sidebar-footer">
                <div className="divider" />
                <button onClick={handleLogout} className="sidebar-logout-button">
                    <LogoutIcon />
                    <span>Log Out</span>
                </button>
            </div>
        </div>
    );
}

export default function AdminLayout({ setIsAdminLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAdminLoggedIn(false);
    localStorage.removeItem('isAdminLoggedIn');
    navigate('/admin/login');
  };

  return (
    <div className="admin-layout">
      <Sidebar handleLogout={handleLogout} />
      <main className="admin-main-content">
        {/* 2. Letakkan AdminHeader di sini, di atas Outlet */}
        <AdminHeader />
        <Outlet /> 
      </main>
    </div>
  );
}
