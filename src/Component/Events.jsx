import React, { useState } from "react";
import {
  Calendar,
  MapPin,
  Clock,
  Image,
  Video,
  Users,
  ChevronRight,
  Filter,
  Search,
} from "lucide-react";
import { Link } from "react-router-dom";

function Events({ data }) {
  const [activeView, setActiveView] = useState("calendar");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");

  // Handle the data - it could be an array or object
  const events = Array.isArray(data) ? data : data ? [data] : [];
  console.log("Events data:", events);

  const formatDate = (dateString) => {
    if (!dateString) return "Date TBD";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (timeString) => {
    if (!timeString) return "";
    return timeString;
  };

  const handleViewChange = (view) => {
    setActiveView(view);
  };

  // Get unique years from events
  const availableYears = [
    ...new Set(
      events
        .filter((event) => event.date)
        .map((event) => new Date(event.date).getFullYear())
    ),
  ].sort((a, b) => b - a);

  const filteredEvents = events.filter((event) => {
    if (!event) return false;

    const matchesSearch =
      searchTerm === "" ||
      (event.title &&
        event.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (event.description &&
        event.description.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesFilter =
      selectedFilter === "all" ||
      (selectedFilter === "upcoming" && new Date(event.date) > new Date()) ||
      (selectedFilter === "past" && new Date(event.date) <= new Date());

    const matchesYear =
      selectedYear === "all" ||
      (event.date &&
        new Date(event.date).getFullYear().toString() === selectedYear);

    return matchesSearch && matchesFilter && matchesYear;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-cyan-50">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-sky-600 via-cyan-600 to-sky-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight mb-6 animate-fade-in">
              EVENTS
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-90 max-w-3xl mx-auto">
              Discover amazing events, workshops, and activities happening in
              our community
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-sky-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-10">
        {/* Navigation Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => handleViewChange("calendar")}
            className={`group px-8 py-4 rounded-2xl font-semibold text-white transition-all duration-300 flex items-center gap-3 transform hover:scale-105 ${
              activeView === "calendar"
                ? "bg-gradient-to-r from-sky-600 to-sky-700 shadow-xl shadow-sky-200"
                : "bg-gradient-to-r from-sky-500 to-sky-600 hover:shadow-lg shadow-sky-100"
            }`}
          >
            <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Explore Events Calendar
          </button>
          <Link
            to={"/gallery"}
            className={`group px-8 py-4 rounded-2xl font-semibold text-white transition-all duration-300 flex items-center gap-3 transform hover:scale-105 ${
              activeView === "gallery"
                ? "bg-gradient-to-r from-cyan-600 to-cyan-700 shadow-xl shadow-cyan-200"
                : "bg-gradient-to-r from-cyan-500 to-cyan-600 hover:shadow-lg shadow-cyan-100"
            }`}
          >
            <Image className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Explore Gallery
          </Link>

          {/* <button
            onClick={() => handleViewChange("videos")}
            className={`group px-8 py-4 rounded-2xl font-semibold text-white transition-all duration-300 flex items-center gap-3 transform hover:scale-105 ${
              activeView === "videos"
                ? "bg-gradient-to-r from-sky-600 to-cyan-700 shadow-xl shadow-sky-200"
                : "bg-gradient-to-r from-sky-500 to-cyan-600 hover:shadow-lg shadow-sky-100"
            }`}
          >
            <Video className="w-5 h-5 group-hover:bounce transition-transform" />
            Explore Videos
          </button> */}
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-3xl shadow-lg p-6 mb-12 border border-gray-100">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
              />
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="flex items-center gap-3">
                <Filter className="text-gray-400 w-5 h-5" />
                <select
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="px-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all bg-white"
                >
                  <option value="all">All Events</option>
                  <option value="upcoming">Upcoming</option>
                  <option value="past">Past Events</option>
                </select>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="text-gray-400 w-5 h-5" />
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="px-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all bg-white"
                >
                  <option value="all">All Years</option>
                  {availableYears.map((year) => (
                    <option key={year} value={year.toString()}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
            {filteredEvents.map((event, index) => (
              <div
                key={event.id || index}
                className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 border border-gray-100"
              >
                {/* Event Image */}
                <div className="relative bg-gradient-to-br from-sky-500 via-cyan-500 to-sky-600 overflow-hidden h-80 flex items-center justify-center">
                  {event.image_url ? (
                    <img
                      src={event.image_url}
                      alt={event.title || "Event"}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.parentNode.classList.add(
                          "flex",
                          "items-center",
                          "justify-center"
                        );
                        const icon = document.createElement("div");
                        icon.className = "text-white text-center";
                        icon.innerHTML = `
          <div class="w-16 h-16 mx-auto mb-2 opacity-60">
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <p class="text-sm font-medium">Event Poster</p>
        `;
                        e.target.parentNode.appendChild(icon);
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white">
                      <div className="text-center">
                        <Image className="w-16 h-16 mx-auto mb-2 opacity-60" />
                        <p className="text-sm font-medium">Event Poster</p>
                      </div>
                    </div>
                  )}

                  {/* Date Badge */}
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 text-sm font-bold text-gray-800 shadow-lg">
                    {formatDate(event.date)}
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Event Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 leading-tight group-hover:text-sky-600 transition-colors">
                    {event.title || "Untitled Event"}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-2 text-sm leading-relaxed">
                    {event.description ||
                      "No description available for this event."}
                  </p>

                  {/* Event Details */}
                  <div className="space-y-2 mb-4">
                    {event.time && (
                      <div className="flex items-center text-xs text-gray-500">
                        <Clock className="w-3 h-3 mr-2 text-sky-500 flex-shrink-0" />
                        <span>{formatTime(event.time)}</span>
                      </div>
                    )}

                    {event.location && (
                      <div className="flex items-center text-xs text-gray-500">
                        <MapPin className="w-3 h-3 mr-2 text-sky-500 flex-shrink-0" />
                        <span className="line-clamp-1">{event.location}</span>
                      </div>
                    )}
                  </div>

                  {/* Action Button */}
                  <button className="w-full bg-gradient-to-r from-sky-500 via-cyan-500 to-sky-500 text-white font-semibold py-3 px-4 rounded-2xl hover:shadow-lg transition-all duration-300 transform group-hover:scale-105 flex items-center justify-center gap-2 group text-sm">
                    <Users className="w-4 h-4" />
                    <span>View Details</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-20">
            <div className="bg-white rounded-3xl shadow-lg p-12 max-w-md mx-auto">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-700 mb-4">
                {events.length === 0
                  ? "No Events Available"
                  : "No Events Found"}
              </h3>
              <p className="text-gray-500 mb-6">
                {events.length === 0
                  ? "Check back later for upcoming events and activities."
                  : "Try adjusting your search terms or filters to find events."}
              </p>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="bg-sky-500 text-white px-6 py-3 rounded-2xl hover:bg-sky-600 transition-colors mr-2"
                >
                  Clear Search
                </button>
              )}
              {selectedYear !== "all" && (
                <button
                  onClick={() => setSelectedYear("all")}
                  className="bg-cyan-500 text-white px-6 py-3 rounded-2xl hover:bg-cyan-600 transition-colors"
                >
                  Clear Year Filter
                </button>
              )}
            </div>
          </div>
        )}

        {/* Stats Section */}
        {events.length > 0 && (
          <div className="bg-gradient-to-r from-sky-600 to-cyan-600 rounded-3xl p-8 text-white text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold mb-2">{events.length}</div>
                <div className="text-blue-100">Total Events</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">
                  {events.filter((e) => new Date(e.date) > new Date()).length}
                </div>
                <div className="text-blue-100">Upcoming</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">
                  {filteredEvents.length}
                </div>
                <div className="text-blue-100">Currently Shown</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Events;
