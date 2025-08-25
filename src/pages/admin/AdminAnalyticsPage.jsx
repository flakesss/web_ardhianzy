// src/pages/admin/AdminAnalyticsPage.jsx
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './AdminAnalytics.css'; 

// --- Data Simulasi ---
const newcomersData = [
  { id: 1, name: 'Odin Irawan', age: 20, region: 'Bandung, Indonesia', phone: '0823 0123 0123', email: 'OdinIrawan@gmail.com', avatar: '/assets/default-profile-icon.png' },
  { id: 2, name: 'Siti Freya', age: 22, region: 'Aceh, Indonesia', phone: '0823 0123 0123', email: 'SitiFreya@gmail.com', avatar: '/assets/default-profile-icon.png' },
  { id: 3, name: 'Odin Irawan', age: 20, region: 'Bandung, Indonesia', phone: '0823 0123 0123', email: 'OdinIrawan@gmail.com', avatar: '/assets/default-profile-icon.png' },
  { id: 4, name: 'Siti Freya', age: 22, region: 'Aceh, Indonesia', phone: '0823 0123 0123', email: 'SitiFreya@gmail.com', avatar: '/assets/default-profile-icon.png' },
  { id: 5, name: 'Odin Irawan', age: 20, region: 'Bandung, Indonesia', phone: '0823 0123 0123', email: 'OdinIrawan@gmail.com', avatar: '/assets/default-profile-icon.png' }
];

const topPicksData = [
    { id: 1, title: '“God is dead. God remain is dead”', views: '201.123', likes: '502', bookmarks: '227', shares: '58', status: 'Popular' },
    { id: 2, title: '“God is dead. God remain is dead”', views: '90.204', likes: '234', bookmarks: '102', shares: '50', status: 'Popular' },
    { id: 3, title: '“God is dead. God remain is dead”', views: '50.912', likes: '123', bookmarks: '80', shares: '32', status: 'Popular' },
    { id: 4, title: '“God is dead. God remain is dead”', views: '12.209', likes: '50', bookmarks: '23', shares: '31', status: '-' },
    { id: 5, title: '“God is dead. God remain is dead”', views: '5.023', likes: '27', bookmarks: '20', shares: '24', status: '-' }
];

// Data untuk Top Picks Shop (bisa sama atau berbeda)
const topPicksShopData = [
    { id: 1, title: 'Item E-commerce Populer', views: '201.123', likes: '502', bookmarks: '227', shares: '58', status: 'Popular' },
    { id: 2, title: 'E-Book Terlaris', views: '90.204', likes: '234', bookmarks: '102', shares: '50', status: 'Popular' },
    // ... data lainnya
];


// --- Ikon-ikon ---
const UserGroupIcon = () => ( <svg width="18" height="18" viewBox="0 0 24 24" fill="#F5F5F5" xmlns="http://www.w3.org/2000/svg"><path d="M12 5.5C10.62 5.5 9.5 6.62 9.5 8S10.62 10.5 12 10.5 14.5 9.38 14.5 8 13.38 5.5 12 5.5zM12 12.5c-1.93 0-3.5-1.57-3.5-3.5S10.07 5.5 12 5.5s3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5zm6 -2c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zm-12 0c.83 0 1.5-.67 1.5-1.5S6.83 7.5 6 7.5 4.5 8.17 4.5 9s.67 1.5 1.5 1.5zm12 4h-1.45c-1.26.88-2.83 1.5-4.55 1.5s-3.29-.62-4.55-1.5H6c-2.21 0-4 1.79-4 4v1h16v-1c0-2.21-1.79-4-4-4zm-8 2h8c.55 0 1 .45 1 1v1H7v-1c0-.55.45-1 1-1z"/></svg> );
const IncreaseArrowIcon = () => ( <svg width="16" height="16" viewBox="0 0 24 24" fill="#F5F5F5" xmlns="http://www.w3.org/2000/svg"><path d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z"/></svg> );
const FilterIcon = () => ( <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.41667 9.33333L2.33333 4.66667H11.6667L7.58333 9.33333" stroke="#F5F5F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> );
const StatIcon = () => ( <svg width="14" height="14" viewBox="0 0 14 14" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"><path d="M7 0C3.13 0 0 3.13 0 7s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7z"/></svg> );


// --- Komponen-komponen Section ---

const WebPerformanceSection = () => (
  <div id="web-performance" className="admin-section">
    <h3>Web Performance</h3>
    <div className="web-performance-cards">
        <div className="visitors-card">
            <div className="visitors-card-header"> <UserGroupIcon /> <span>Visitors</span> </div>
            <p className="visitors-card-main-number">501.789</p>
            <div className="visitors-card-footer"> <IncreaseArrowIcon /> <span className="percentage">15%</span> <span>+10K this week</span> </div>
        </div>
    </div>
  </div>
);

const NewcomersSection = () => (
  <div id="newcomers" className="admin-section">
    <div className="newcomers-container">
      <div className="newcomers-header">
        <h4>Newcomers</h4>
        <button className="filter-sort-button"> <FilterIcon /> <span>Filter & Sort</span> </button>
      </div>
      <table className="newcomers-table">
        <thead>
          <tr><th>Profile</th><th>Region</th><th>No Telepon</th><th>Email</th></tr>
        </thead>
        <tbody>
          {newcomersData.map(user => (
            <tr key={user.id}>
              <td>
                <div className="profile-cell">
                  <img src={user.avatar} alt={user.name} className="profile-avatar" />
                  <div className="profile-info">
                    <span className="profile-name">{user.name}</span>
                    <span className="profile-age">{user.age} tahun</span>
                  </div>
                </div>
              </td>
              <td>{user.region}</td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="newcomers-footer"> <Link to="/admin/users" className="view-more-link">View more</Link> </div>
    </div>
  </div>
);

const ArticleAnalyticsSection = () => {
    const statCards = [
        { title: 'Total View', value: '480.124', change: '+10K this week' },
        { title: 'Total Likes', value: '802', change: '+26 this week' },
        { title: 'Total Bookmark', value: '475', change: '+24 this week' },
        { title: 'Total Share', value: '286', change: '+56 this week' }
    ];

    return (
        <div id="article-analytics" className="admin-section">
            <h3 className="section-title">Analytics Article</h3>
            <div className="article-stats-grid">
                {statCards.map((card, index) => (
                    <div className="article-stat-card" key={index}>
                        <div className="stat-card-header"> <StatIcon /> <span>{card.title}</span> </div>
                        <p className="stat-card-value">{card.value}</p>
                        <div className="stat-card-footer"> <IncreaseArrowIcon /> <span className="percentage">15%</span> <span>{card.change}</span> </div>
                    </div>
                ))}
            </div>
            <div className="top-picks-container">
                <div className="top-picks-header"> <h4>Top Picks</h4> <button className="filter-sort-button"> <FilterIcon /> <span>Filter & Sort</span> </button> </div>
                <table className="top-picks-table">
                    <thead><tr><th>No</th><th>Judul</th><th>Views</th><th>Likes</th><th>Bookmark</th><th>Share</th><th>Status</th></tr></thead>
                    <tbody>
                        {topPicksData.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td className="top-picks-title">{item.title}</td>
                                <td>{item.views}</td>
                                <td>{item.likes}</td>
                                <td>{item.bookmarks}</td>
                                <td>{item.shares}</td>
                                <td> {item.status === 'Popular' ? <span className="status-popular">{item.status}</span> : <span>{item.status}</span>} </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="top-picks-footer"> <Link to="/admin/articles/all" className="view-more-link">View more</Link> </div>
            </div>
        </div>
    );
};

// --- KOMPONEN BARU: ShopAnalyticsSection ---
const ShopAnalyticsSection = () => {
    const statCards = [
        { title: 'Total Revenue', value: '7.282', change: '+32 this week', percentage: '5%' },
        { title: 'Total Order (eCommerce)', value: '2034', change: '+22 this week', percentage: '3%' },
        { title: 'Total Order (E-Book)', value: '5248', change: '+10 this week', percentage: '2%' }
    ];

    return (
        <div id="shop-analytics" className="admin-section">
            <h3 className="section-title">Analytics Shop</h3>
            <div className="shop-stats-grid">
                {statCards.map((card, index) => (
                    <div className="shop-stat-card" key={index}>
                        <div className="stat-card-header"> <StatIcon /> <span>{card.title}</span> </div>
                        <p className="stat-card-value">{card.value}</p>
                        <div className="stat-card-footer"> <IncreaseArrowIcon /> <span className="percentage">{card.percentage}</span> <span>{card.change}</span> </div>
                    </div>
                ))}
            </div>
            <div className="top-picks-container">
                <div className="top-picks-header"> <h4>Top Picks</h4> <button className="filter-sort-button"> <FilterIcon /> <span>Filter & Sort</span> </button> </div>
                <table className="top-picks-table">
                     <thead><tr><th>No</th><th>Judul</th><th>Views</th><th>Likes</th><th>Bookmark</th><th>Share</th><th>Status</th></tr></thead>
                    <tbody>
                        {topPicksShopData.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td className="top-picks-title">{item.title}</td>
                                <td>{item.views}</td>
                                <td>{item.likes}</td>
                                <td>{item.bookmarks}</td>
                                <td>{item.shares}</td>
                                <td> {item.status === 'Popular' ? <span className="status-popular">{item.status}</span> : <span>{item.status}</span>} </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="top-picks-footer"> <Link to="/admin/shop/all" className="view-more-link">View more</Link> </div>
            </div>
        </div>
    );
};


export default function AdminAnalyticsPage() {
  const location = useLocation();

  React.useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div>
      <WebPerformanceSection />
      <NewcomersSection /> 
      <ArticleAnalyticsSection />
      <ShopAnalyticsSection />
    </div>
  );
}
