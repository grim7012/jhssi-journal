'use client';

import { useEffect, useState } from 'react';
import { Eye, MousePointer, TrendingUp, Users } from 'lucide-react';
import MetricCard from './MetricCard';

interface OverallMetrics {
  totalImpressions: number;
  totalViews: number;
  totalClicks: number;
  avgCTR: number;
  avgViewability: number;
}

export default function Overview() {
  const [metrics, setMetrics] = useState<OverallMetrics | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMetrics();
    const interval = setInterval(fetchMetrics, 10000); // Refresh every 10 seconds
    return () => clearInterval(interval);
  }, []);

  const fetchMetrics = async () => {
    try {
      const response = await fetch('/api/ads/analytics');
      const data = await response.json();
      setMetrics(data.overallMetrics);
    } catch (error) {
      console.error('Error fetching metrics:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Dashboard Overview</h2>
        <p className="text-gray-600 mt-2">Real-time advertising metrics and performance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard
          title="Total Impressions"
          value={metrics?.totalImpressions.toLocaleString() || '0'}
          icon={Eye}
          color="blue"
        />
        <MetricCard
          title="Total Views"
          value={metrics?.totalViews.toLocaleString() || '0'}
          icon={Users}
          color="green"
        />
        <MetricCard
          title="Total Clicks"
          value={metrics?.totalClicks.toLocaleString() || '0'}
          icon={MousePointer}
          color="purple"
        />
        <MetricCard
          title="Avg CTR"
          value={`${metrics?.avgCTR.toFixed(2) || '0'}%`}
          icon={TrendingUp}
          color="orange"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Metrics</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">Click-Through Rate</span>
                <span className="text-sm font-semibold text-gray-900">
                  {metrics?.avgCTR.toFixed(2)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(metrics?.avgCTR || 0, 100)}%` }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">Viewability Rate</span>
                <span className="text-sm font-semibold text-gray-900">
                  {metrics?.avgViewability.toFixed(2)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-600 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(metrics?.avgViewability || 0, 100)}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Impressions</span>
              <span className="font-semibold text-gray-900">
                {metrics?.totalImpressions.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Views</span>
              <span className="font-semibold text-gray-900">
                {metrics?.totalViews.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-600">Clicks</span>
              <span className="font-semibold text-gray-900">
                {metrics?.totalClicks.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}