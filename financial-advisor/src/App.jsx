import { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';
import AskMe from './components/AskMe';
import LearnAbout from './components/LearnAbout';
import KYCDocuments from './components/KYCDocuments';
import UserProfile from './components/UserProfile';
import AvailLoan from './components/AvailLoan';
import Budgeting from './components/Budgeting';
import FundingOpportunities from './components/FundingOpportunities';
import LongTermPlanning from './components/LongTermPlanning';
import LongTermFinancialPlanning from './components/LongTermFinancialPlanning';

const navItems = [
  { label: 'Ask me', icon: (
    <svg width="20" height="20" fill="currentColor"><circle cx="10" cy="10" r="8" /></svg>
  ), path: '/ask-me' },
  { label: 'Learn about', icon: (
    <svg width="20" height="20" fill="currentColor"><rect x="4" y="4" width="12" height="12" rx="3" /></svg>
  ), path: '/learn-about' },
  { label: 'KYC documents', icon: (
    <svg width="20" height="20" fill="currentColor"><path d="M4 4h12v12H4z" stroke="#00f2fe" fill="none"/></svg>
  ), path: '/kyc-documents' },
  { label: 'User profile', icon: (
    <svg width="20" height="20" fill="currentColor"><circle cx="10" cy="7" r="4" /><rect x="4" y="13" width="12" height="4" rx="2" /></svg>
  ), path: '/user-profile' },
  { label: 'Avail loan', icon: (
    <svg width="20" height="20" fill="currentColor"><rect x="3" y="8" width="14" height="8" rx="2" /><circle cx="10" cy="6" r="2" /></svg>
  ), path: '/avail-loan' },
  { label: 'Budgeting', icon: (
    <svg width="20" height="20" fill="currentColor"><rect x="4" y="10" width="12" height="6" rx="2" /><rect x="7" y="4" width="6" height="4" rx="1" /></svg>
  ), path: '/budgeting' },
  { label: 'Funding opportunities', icon: (
    <svg width="20" height="20" fill="currentColor"><circle cx="10" cy="10" r="8" /><path d="M10 6v4l3 3" stroke="#00f2fe" fill="none"/></svg>
  ), path: '/funding-opportunities' },
  { label: 'Long term planning', icon: (
    <svg width="20" height="20" fill="currentColor"><rect x="4" y="4" width="12" height="12" rx="6" /></svg>
  ), path: '/long-term-planning' },
  { label: 'Long term financial planning', icon: (
    <svg width="20" height="20" fill="currentColor"><rect x="2" y="2" width="16" height="16" rx="8" /></svg>
  ), path: '/long-term-financial-planning' },
];

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const location = useLocation();

  return (
    <div className={`app-layout${sidebarCollapsed ? ' sidebar-collapsed' : ''}`}>
      <header className="header">
        <button className="menu-btn" onClick={() => setSidebarCollapsed(v => !v)} aria-label="Toggle sidebar">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00f2fe" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
        </button>
        <span className="header-title">Financial Advisor</span>
      </header>
      <div className="main-content">
        <nav className="sidebar">
          <ul>
            {navItems.map((item) => (
              <li key={item.label}>
                <Link to={item.path} className={location.pathname === item.path ? 'active' : ''}>
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-label">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <section className="content-area">
          <Routes>
            <Route path="/ask-me" element={<AskMe />} />
            <Route path="/learn-about" element={<LearnAbout />} />
            <Route path="/kyc-documents" element={<KYCDocuments />} />
            <Route path="/user-profile" element={<UserProfile />} />
            <Route path="/avail-loan" element={<AvailLoan />} />
            <Route path="/budgeting" element={<Budgeting />} />
            <Route path="/funding-opportunities" element={<FundingOpportunities />} />
            <Route path="/long-term-planning" element={<LongTermPlanning />} />
            <Route path="/long-term-financial-planning" element={<LongTermFinancialPlanning />} />
            <Route path="*" element={<div><h2>Welcome!</h2><p>Select an option from the sidebar to get started.</p></div>} />
          </Routes>
        </section>
      </div>
    </div>
  );
}

export default App;
