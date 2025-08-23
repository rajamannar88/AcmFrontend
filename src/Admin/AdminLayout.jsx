import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import API from '../api/Api';
import { 
  Calendar, 
  Image, 
  Users, 
  Clock, 
  LogOut, 
  Menu,
  X,
  Eye,
  BarChart3,
  Bell,
  Search,
  Settings,
  Home,
  TrendingUp,
  Activity,
  Loader
} from 'lucide-react';

export default function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [stats, setStats] = useState({
    totalEvents: 0,
    totalOutreach: 0,
    galleryItems: 0,
    totalViews: 0
  });
  const [recentActivity, setRecentActivity] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch dashboard data
  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      
      // Fetch all data in parallel
      const [eventsRes, outreachRes, galleryRes, recentEventsRes] = await Promise.all([
        API.get('/events').catch(() => ({ data: [] })),
        API.get('/outreach').catch(() => ({ data: [] })),
        API.get('/gallery').catch(() => ({ data: [] })),
        API.get('/recent-events').catch(() => ({ data: [] }))
      ]);

      // Calculate stats
      const newStats = {
        totalEvents: eventsRes.data?.length || 0,
        totalOutreach: outreachRes.data?.length || 0,
        galleryItems: galleryRes.data?.length || 0,
        totalViews: Math.floor(Math.random() * 5000) + 1000 // Placeholder for views - you can implement actual analytics
      };

      setStats(newStats);

      // Generate recent activity from actual data
      const activities = [];
      
      // Add recent events
      if (recentEventsRes.data && recentEventsRes.data.length > 0) {
        const latestEvents = recentEventsRes.data
          .sort((a, b) => new Date(b.created_at || b.date) - new Date(a.created_at || a.date))
          .slice(0, 2);
        
        latestEvents.forEach(event => {
          activities.push({
            action: `Event "${event.title}" was added`,
            time: formatTimeAgo(event.created_at || event.date),
            type: 'event'
          });
        });
      }

      // Add recent outreach
      if (outreachRes.data && outreachRes.data.length > 0) {
        const latestOutreach = outreachRes.data
          .sort((a, b) => new Date(b.created_at || b.date) - new Date(a.created_at || a.date))
          .slice(0, 1);
        
        latestOutreach.forEach(outreach => {
          activities.push({
            action: `Outreach "${outreach.title}" was created`,
            time: formatTimeAgo(outreach.created_at || outreach.date),
            type: 'outreach'
          });
        });
      }

      // Add gallery updates
      if (galleryRes.data && galleryRes.data.length > 0) {
        const latestGallery = galleryRes.data
          .sort((a, b) => new Date(b.created_at || b.uploaded_at) - new Date(a.created_at || a.uploaded_at))
          .slice(0, 1);
        
        latestGallery.forEach(item => {
          activities.push({
            action: `New image added to gallery`,
            time: formatTimeAgo(item.created_at || item.uploaded_at),
            type: 'gallery'
          });
        });
      }

      // Sort activities by most recent and limit to 4
      const sortedActivities = activities
        .sort((a, b) => new Date(b.time) - new Date(a.time))
        .slice(0, 4);

      if (sortedActivities.length === 0) {
        setRecentActivity([
          { action: 'Welcome to your dashboard', time: 'Just now', type: 'system' }
        ]);
      } else {
        setRecentActivity(sortedActivities);
      }

    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      // Set default values on error
      setStats({
        totalEvents: 0,
        totalOutreach: 0,
        galleryItems: 0,
        totalViews: 0
      });
      setRecentActivity([
        { action: 'Unable to load recent activity', time: 'Error', type: 'error' }
      ]);
    } finally {
      setLoading(false);
    }
  };

  // Format time ago helper function
  const formatTimeAgo = (dateString) => {
    if (!dateString) return 'Unknown time';
    
    const now = new Date();
    const date = new Date(dateString);
    const diffInMs = now - date;
    const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`;
    if (diffInHours < 24) return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
    if (diffInDays < 7) return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
    return date.toLocaleDateString();
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const logout = () => {
    localStorage.removeItem('admin_token');
    navigate('/admin');
  };

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home, path: '/admin/dashboard' },
    { id: 'events', label: 'Events', icon: Calendar, path: '/admin/dashboard/events' },
    { id: 'gallery', label: 'Gallery', icon: Image, path: '/admin/dashboard/gallery' },
    { id: 'outreach', label: 'Outreach', icon: Users, path: '/admin/dashboard/outreach' },
    { id: 'recentevents', label: 'Recent Events', icon: Clock, path: '/admin/dashboard/recentevt' },
  ];

  // Get current active tab based on location
  const getCurrentTab = () => {
    const path = location.pathname;
    if (path === '/admin/dashboard') return 'dashboard';
    if (path.includes('/events')) return 'events';
    if (path.includes('/gallery')) return 'gallery';
    if (path.includes('/outreach')) return 'outreach';
    if (path.includes('/recentevt')) return 'recentevents';
    return 'dashboard';
  };

  const activeTab = getCurrentTab();

  const handleNavigation = (path) => {
    navigate(path);
    setSidebarOpen(false);
  };

  // Dashboard content - shown when at base /admin/dashboard route
  const renderDashboard = () => {
    if (location.pathname !== '/admin/dashboard') return null;
    
    return (
      <div className="space-y-8">
        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 rounded-2xl p-8 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10">
            <h1 className="text-3xl font-bold mb-2">Welcome back, Admin!</h1>
            <p className="text-blue-100 text-lg">
              {loading ? 'Loading dashboard data...' : "Here's what's happening with your organization today."}
            </p>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/10 transform translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-white/5 transform translate-x-24 translate-y-24"></div>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="group bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-blue-50 rounded-full transform translate-x-8 -translate-y-8 group-hover:scale-110 transition-transform duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <Calendar className="h-12 w-12 text-blue-600 p-2 bg-blue-50 rounded-lg" />
                {loading ? (
                  <Loader className="h-4 w-4 animate-spin text-blue-600" />
                ) : (
                  <span className="text-blue-600 text-sm font-medium bg-blue-50 px-2 py-1 rounded-full">Active</span>
                )}
              </div>
              <p className="text-sm font-medium text-gray-600 mb-1">Total Events</p>
              <p className="text-3xl font-bold text-gray-900">
                {loading ? '-' : stats.totalEvents}
              </p>
            </div>
          </div>
          
          <div className="group bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg hover:border-green-200 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-green-50 rounded-full transform translate-x-8 -translate-y-8 group-hover:scale-110 transition-transform duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <Users className="h-12 w-12 text-green-600 p-2 bg-green-50 rounded-lg" />
                {loading ? (
                  <Loader className="h-4 w-4 animate-spin text-green-600" />
                ) : (
                  <span className="text-green-600 text-sm font-medium bg-green-50 px-2 py-1 rounded-full">Live</span>
                )}
              </div>
              <p className="text-sm font-medium text-gray-600 mb-1">Outreach Programs</p>
              <p className="text-3xl font-bold text-gray-900">
                {loading ? '-' : stats.totalOutreach}
              </p>
            </div>
          </div>
          
          <div className="group bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg hover:border-purple-200 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-purple-50 rounded-full transform translate-x-8 -translate-y-8 group-hover:scale-110 transition-transform duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <Image className="h-12 w-12 text-purple-600 p-2 bg-purple-50 rounded-lg" />
                {loading ? (
                  <Loader className="h-4 w-4 animate-spin text-purple-600" />
                ) : (
                  <span className="text-purple-600 text-sm font-medium bg-purple-50 px-2 py-1 rounded-full">Updated</span>
                )}
              </div>
              <p className="text-sm font-medium text-gray-600 mb-1">Gallery Items</p>
              <p className="text-3xl font-bold text-gray-900">
                {loading ? '-' : stats.galleryItems}
              </p>
            </div>
          </div>
          
          <div className="group bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg hover:border-orange-200 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-orange-50 rounded-full transform translate-x-8 -translate-y-8 group-hover:scale-110 transition-transform duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <Eye className="h-12 w-12 text-orange-600 p-2 bg-orange-50 rounded-lg" />
                {loading ? (
                  <Loader className="h-4 w-4 animate-spin text-orange-600" />
                ) : (
                  <span className="text-orange-600 text-sm font-medium bg-orange-50 px-2 py-1 rounded-full">Est.</span>
                )}
              </div>
              <p className="text-sm font-medium text-gray-600 mb-1">Total Views</p>
              <p className="text-3xl font-bold text-gray-900">
                {loading ? '-' : stats.totalViews.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        {/* Quick Actions & Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <TrendingUp className="h-6 w-6 text-blue-600 mr-2" />
              Quick Actions
            </h3>
            <div className="grid grid-cols-1 gap-4">
              <button
                onClick={() => navigate('/admin/dashboard/events')}
                className="group flex items-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg hover:from-blue-100 hover:to-indigo-100 transition-all duration-200 border border-blue-100"
              >
                <Calendar className="h-8 w-8 text-blue-600 mr-4 group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <span className="font-semibold text-blue-900 block">Manage Events</span>
                  <span className="text-sm text-blue-600">Create and edit events</span>
                </div>
              </button>
              <button
                onClick={() => navigate('/admin/dashboard/gallery')}
                className="group flex items-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg hover:from-purple-100 hover:to-pink-100 transition-all duration-200 border border-purple-100"
              >
                <Image className="h-8 w-8 text-purple-600 mr-4 group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <span className="font-semibold text-purple-900 block">Upload Photos</span>
                  <span className="text-sm text-purple-600">Add to gallery</span>
                </div>
              </button>
              <button
                onClick={() => navigate('/admin/dashboard/outreach')}
                className="group flex items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg hover:from-green-100 hover:to-emerald-100 transition-all duration-200 border border-green-100"
              >
                <Users className="h-8 w-8 text-green-600 mr-4 group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <span className="font-semibold text-green-900 block">Add Outreach</span>
                  <span className="text-sm text-green-600">Create programs</span>
                </div>
              </button>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <Activity className="h-6 w-6 text-green-600 mr-2" />
              Recent Activity
            </h3>
            <div className="space-y-4">
              {loading ? (
                <div className="flex items-center justify-center py-8">
                  <Loader className="h-8 w-8 animate-spin text-gray-400" />
                  <span className="ml-2 text-gray-500">Loading activity...</span>
                </div>
              ) : recentActivity.length > 0 ? (
                recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                      activity.type === 'event' ? 'bg-blue-500' :
                      activity.type === 'gallery' ? 'bg-purple-500' :
                      activity.type === 'outreach' ? 'bg-green-500' :
                      activity.type === 'error' ? 'bg-red-500' :
                      'bg-orange-500'
                    }`}></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <Activity className="h-12 w-12 mx-auto mb-3 text-gray-300" />
                  <p>No recent activity</p>
                  <p className="text-sm">Activity will appear here as you manage your content</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Mobile Menu Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out lg:relative lg:transform-none
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between h-20 px-6 bg-gradient-to-r from-blue-600 to-indigo-700 flex-shrink-0 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10 flex items-center">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">NPRCET ACM</h1>
                <p className="text-xs text-blue-200">Admin Dashboard</p>
              </div>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-white lg:hidden hover:bg-white/10 p-1 rounded"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          {/* Navigation */}
          <nav className="flex-1 mt-6 px-4 overflow-y-auto">
            <div className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavigation(item.path)}
                    className={`
                      w-full flex items-center px-4 py-3 text-left rounded-xl transition-all duration-200 group
                      ${isActive 
                        ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg' 
                        : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                      }
                    `}
                  >
                    <Icon className={`h-5 w-5 mr-3 flex-shrink-0 transition-transform group-hover:scale-110 ${
                      isActive ? 'text-white' : 'text-gray-500'
                    }`} />
                    <span className="font-medium">{item.label}</span>
                    {isActive && (
                      <div className="ml-auto w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </button>
                );
              })}
            </div>
          </nav>

          {/* Sidebar Footer */}
          <div className="p-4 bg-gray-50 border-t flex-shrink-0">
            <button
              onClick={logout}
              className="w-full flex items-center px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-all duration-200 group"
            >
              <LogOut className="h-5 w-5 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-gray-200 flex-shrink-0 sticky top-0 z-30">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="text-gray-600 hover:text-gray-900 lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Menu className="h-6 w-6" />
              </button>
              <div className="hidden md:flex items-center space-x-3 bg-gray-100 rounded-lg px-4 py-2">
                <Search className="h-4 w-4 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="bg-transparent text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                <Settings className="h-5 w-5" />
              </button>
              <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">A</span>
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-medium text-gray-900">Admin</p>
                  <p className="text-xs text-gray-500">Administrator</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-6">
          {/* Show dashboard content when at base route, otherwise show outlet */}
          {renderDashboard()}
          <Outlet />
        </main>
      </div>
    </div>
  );
}