import React from 'react';
import { Calendar, MapPin, Clock, ImageOff, Sparkles } from 'lucide-react';

function Recentevents({ data = [] }) {
  if (!data.length) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center py-20">
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full flex items-center justify-center">
            <Sparkles className="w-12 h-12 text-white" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-700 mb-2">No Events Yet</h3>
          <p className="text-gray-500 text-lg">Stay tuned for upcoming exciting events!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
Recent Happenings          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Recent
            <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              Events
            </span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Discover the amazing events we've hosted and the memories we've created together
          </p>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-300/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-300/20 rounded-full blur-lg animate-pulse delay-500"></div>
      </div>

      {/* Events Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16 relative -mt-12">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {data.map((event, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/50 hover:-translate-y-2"
            >
              {/* Event Image with Overlay */}
              <div className="relative overflow-hidden">
                {event.image_url ? (
                  <>
                    <img
                      src={`${import.meta.env.VITE_API_URL.replace('/api', '')}${event.image_url}`}
                      alt={event.title}
                      className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </>
                ) : (
                  <div className="w-full h-56 flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-100 group-hover:from-purple-200 group-hover:to-blue-200 transition-colors duration-300">
                    <div className="text-center">
                      <ImageOff className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                      <span className="text-gray-500 text-sm">No Image</span>
                    </div>
                  </div>
                )}
                
                {/* Event Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-purple-600">
                  Event #{index + 1}
                </div>
              </div>

              {/* Event Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                  {event.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">
                  {event.description}
                </p>

                {/* Event Details */}
                <div className="space-y-3">
                  {event.date && (
                    <div className="flex items-center gap-3 text-gray-600">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                        <Calendar className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-medium">
                        {new Date(event.date).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                  )}
{event.time && (
  <div className="flex items-center gap-3 text-gray-600">
    <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-lg flex items-center justify-center">
      <Clock className="w-4 h-4 text-white" />
    </div>
    <span className="text-sm font-medium">
      {new Date(`1970-01-01T${event.time}`).toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      })}
    </span>
  </div>
)}


                  {event.location && (
                    <div className="flex items-center gap-3 text-gray-600">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-teal-400 rounded-lg flex items-center justify-center">
                        <MapPin className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-medium">{event.location}</span>
                    </div>
                  )}
                </div>

                {/* Hover Effect Bar */}
                <div className="mt-6 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Decoration */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-gray-500 text-sm">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <span>More amazing events coming soon</span>
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recentevents;