'use client';

import { useState } from 'react';
import Sidebar from './Sidebar';
import Overview from './Overview';
import AdsList from './AdsList';
import Analytics from './Analytics';
import RealTimeMetrics from './RealTimeMetrics';

type View = 'overview' | 'ads' | 'analytics' | 'realtime';

export default function DashboardLayout() {
  const [currentView, setCurrentView] = useState<View>('overview');

  const renderView = () => {
    switch (currentView) {
      case 'overview':
        return <Overview />;
      case 'ads':
        return <AdsList />;
      case 'analytics':
        return <Analytics />;
      case 'realtime':
        return <RealTimeMetrics />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar currentView={currentView} onViewChange={setCurrentView} />
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          {renderView()}
        </div>
      </main>
    </div>
  );
}