import React, { useState } from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import { 
  Calendar, 
  Image, 
  Users, 
  Clock, 
  LogOut, 
  Menu,
  X,
  Eye,
  BarChart3
} from 'lucide-react';

export default function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Sample data
  const stats = {
    totalEvents: 24,
    totalOutreach: 8,
    galleryItems: 156,
    totalViews: 2847
  };

  const logout = () => {
    localStorage.removeItem('admin_token');
    navigate('/admin');
  };

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3, path: '/admin/dashboard' },
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
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">Dashboard Overview</h2>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center">
              <Calendar className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Events</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalEvents}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Outreach Programs</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalOutreach}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center">
              <Image className="h-8 w-8 text-purple-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Gallery Items</p>
                <p className="text-2xl font-bold text-gray-900">{stats.galleryItems}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center">
              <Eye className="h-8 w-8 text-orange-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Page Views</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalViews}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        {/* <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <button
              onClick={() => navigate('/admin/dashboard/events')}
              className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <Calendar className="h-6 w-6 text-blue-600 mr-3" />
              <span className="font-medium text-blue-800">Manage Events</span>
            </button>
            <button
              onClick={() => navigate('/admin/dashboard/gallery')}
              className="flex items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
            >
              <Image className="h-6 w-6 text-purple-600 mr-3" />
              <span className="font-medium text-purple-800">Upload Photos</span>
            </button>
            <button
              onClick={() => navigate('/admin/dashboard/outreach')}
              className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <Users className="h-6 w-6 text-green-600 mr-3" />
              <span className="font-medium text-green-800">Add Outreach</span>
            </button>
            <button
              onClick={() => navigate('/admin/dashboard/recentevents')}
              className="flex items-center p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
            >
              <Clock className="h-6 w-6 text-orange-600 mr-3" />
              <span className="font-medium text-orange-800">Recent Events</span>
            </button>
          </div>
        </div> */}
      </div>
    );
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Mobile Menu Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-200 ease-in-out lg:relative lg:transform-none
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between h-16 px-6 bg-blue-600 flex-shrink-0">
            <h1 className="text-xl font-bold text-white">NPRCET ACM</h1>
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-white lg:hidden"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <nav className="flex-1 mt-6 overflow-y-auto">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.path)}
                  className={`
                    w-full flex items-center px-6 py-3 text-left hover:bg-gray-100 transition-colors
                    ${activeTab === item.id ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-600' : 'text-gray-700'}
                  `}
                >
                  <Icon className="h-5 w-5 mr-3 flex-shrink-0" />
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="p-6 bg-white border-t flex-shrink-0">
            <button
              onClick={logout}
              className="w-full flex items-center px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              <LogOut className="h-5 w-5 mr-3 flex-shrink-0" />
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm border-b flex-shrink-0">
          <div className="flex items-center justify-between px-6 py-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="text-gray-600 hover:text-gray-900 lg:hidden"
            >
              <Menu className="h-6 w-6" />
            </button>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Welcome, Admin</span>
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