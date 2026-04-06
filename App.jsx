import React, { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import DashboardPage from './pages/DashboardPage';
import TransactionsPage from './pages/TransactionsPage';
import InsightsPage from './pages/InsightsPage';

function AppInner() {
  const { state } = useApp();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const PAGE = {
    dashboard: <DashboardPage />,
    transactions: <TransactionsPage />,
    insights: <InsightsPage />,
  };

  return (
    <div className="app-layout">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="main-content">
        <Topbar onMenuClick={() => setSidebarOpen(true)} />
        {PAGE[state.activePage] || <DashboardPage />}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppInner />
    </AppProvider>
  );
}
