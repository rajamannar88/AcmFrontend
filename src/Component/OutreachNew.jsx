import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock, Users, ChevronRight, Filter, Search } from 'lucide-react';

function OutreachNew({ data = [] }) {
  const [filteredData, setFilteredData] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOutreach, setSelectedOutreach] = useState(null);

  // Filter data based on status and search
  useEffect(() => {
    let filtered = data;
    
    if (selectedStatus !== 'all') {
      filtered = filtered.filter(item => item.status === selectedStatus);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.location?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredData(filtered);
  }, [data, selectedStatus, searchTerm]);

  const formatDate = (dateString) => {
    if (!dateString) return 'Date TBD';
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'upcoming':
        return 'bg-blue-50 text-blue-700 border border-blue-200';
      case 'ongoing':
        return 'bg-green-50 text-green-700 border border-green-200';
      case 'completed':
        return 'bg-gray-50 text-gray-700 border border-gray-200';
      default:
        return 'bg-gray-50 text-gray-700 border border-gray-200';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'upcoming':
        return <Clock className="h-4 w-4" />;
      case 'ongoing':
        return <Users className="h-4 w-4" />;
      case 'completed':
        return <Calendar className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  // Handle case when no data is provided
  if (!data || data.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center bg-white p-12 rounded-xl shadow-sm border">
          <div className="text-gray-300 mb-6">
            <Users className="h-20 w-20 mx-auto" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">No Outreach Activities</h3>
          <p className="text-gray-600">No outreach activities are currently available.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen mt-20 bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-sky-600 mb-4">Our Outreach Activities</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our community initiatives and join us in making a positive impact in society
            </p>
          </div>

          {/* Search and Filter Bar */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between max-w-4xl mx-auto">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search activities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
              />
            </div>
            
            <div className="flex items-center gap-3">
              <Filter className="h-5 w-5 text-gray-500" />
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white min-w-[140px]"
              >
                <option value="all">All Status</option>
                <option value="upcoming">Upcoming</option>
                <option value="ongoing">Ongoing</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Showing {filteredData.length} of {data.length} activities
            </p>
          </div>
        </div>
      </div>

      {/* Activities Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {filteredData.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-gray-300 mb-6">
              <Search className="h-20 w-20 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">No Activities Found</h3>
            <p className="text-gray-600">
              {searchTerm || selectedStatus !== 'all' 
                ? 'Try adjusting your search or filter criteria.'
                : 'No outreach activities match your criteria.'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredData.map((activity) => (
              <div
                key={activity.id}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md hover:border-gray-200 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                onClick={() => setSelectedOutreach(activity)}
              >
                {/* Image */}
                <div className="relative h-70 bg-gray-100">
                  {activity.image_url ? (
                    <img
                      src={activity.image_url}
                      alt={activity.title || 'Outreach Activity'}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  
                  {/* Fallback when image fails or doesn't exist */}
                  <div className={`w-full h-full flex items-center justify-center ${activity.image_url ? 'hidden' : 'flex'}`}>
                    <Users className="h-16 w-16 text-gray-300" />
                  </div>
                  
                  {/* Status Badge */}
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-lg text-sm font-medium flex items-center gap-1 ${getStatusColor(activity.status)}`}>
                    {getStatusIcon(activity.status)}
                    <span className="capitalize">{activity.status || 'upcoming'}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {activity.title || 'Untitled Activity'}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                    {activity.description || 'No description available'}
                  </p>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4 mr-3 text-blue-500" />
                    <span>{formatDate(activity.date)}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <MapPin className="h-4 w-4 mr-3 text-red-500" />
                    <span>{activity.location || 'Location TBD'}</span>
                  </div>
                  
                  <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 font-medium">
                    View Details
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {selectedOutreach && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-xl">
            <div className="sticky top-0 bg-white border-b border-gray-100 px-8 py-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedOutreach.title || 'Activity Details'}
              </h2>
              <button
                onClick={() => setSelectedOutreach(null)}
                className="text-gray-400 hover:text-gray-600 text-3xl font-light"
              >
                ×
              </button>
            </div>
            
            <div className="p-8">
              {/* Image */}
              {selectedOutreach.image_url && (
                <img
                  src={selectedOutreach.image_url}
                  alt={selectedOutreach.title}
                  className="w-full object-cover rounded-xl mb-8"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              )}
              
              {/* Basic Info */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 ${getStatusColor(selectedOutreach.status)}`}>
                  {getStatusIcon(selectedOutreach.status)}
                  <span className="capitalize">{selectedOutreach.status || 'upcoming'}</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-3 text-blue-500" />
                  <span className="font-medium">{formatDate(selectedOutreach.date)}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-3 text-red-500" />
                  <span className="font-medium">{selectedOutreach.location || 'Location TBD'}</span>
                </div>
              </div>
              
              <div className="mb-10">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Description</h3>
                <p className="text-gray-700 leading-relaxed">
                  {selectedOutreach.description || 'No description available'}
                </p>
              </div>
              
              {/* Dynamic Sections */}
              <div className="space-y-8">
                {[1, 2, 3].map((num) => {
                  const heading = selectedOutreach[`heading${num}`];
                  const description = selectedOutreach[`description${num}`];
                  
                  if (!heading || !description) return null;
                  
                  return (
                    <div key={num} className="border-l-4 border-blue-500 pl-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">{heading}</h3>
                      <p className="text-gray-700 leading-relaxed">{description}</p>
                    </div>
                  );
                })}
              </div>

              {/* No additional sections message */}
              {![1, 2, 3].some(num => selectedOutreach[`heading${num}`] && selectedOutreach[`description${num}`]) && (
                <div className="text-center py-12 border-t border-gray-100 mt-8">
                  <p className="text-gray-500">No additional details available for this activity.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OutreachNew;