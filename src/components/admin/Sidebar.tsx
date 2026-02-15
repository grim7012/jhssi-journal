'use client';

import { BarChart3, Eye, Layout, TrendingUp } from 'lucide-react';

type View = 'overview' | 'ads' | 'analytics' | 'realtime';

interface SidebarProps {
  currentView: View;
  onViewChange: (view: View) => void;
}

export default function Sidebar({ currentView, onViewChange }: SidebarProps) {
  const menuItems = [
    { id: 'overview' as View, label: 'Overview', icon: Layout },
    { id: 'ads' as View, label: 'Manage Ads', icon: Eye },
    { id: 'analytics' as View, label: 'Analytics', icon: BarChart3 },
    { id: 'realtime' as View, label: 'Real-time', icon: TrendingUp },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-900">Ad Dashboard</h1>
        <p className="text-sm text-gray-500 mt-1">Analytics & Management</p>
      </div>
      
      <nav className="mt-6">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={`w-full flex items-center gap-3 px-6 py-3 text-left transition-colors ${
                isActive
                  ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}