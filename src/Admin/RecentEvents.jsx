import React, { useEffect, useState, useRef } from 'react';
import API from '../api/Api';

export default function RecentEvents() {
  const [list, setList] = useState([]);
  const [form, setForm] = useState({ 
    title: '', 
    description: '',
    date: '',
    time: '',
    location: ''
  });
  const [image, setImage] = useState(null);
  const fileRef = useRef(null);

  const fetchList = async () => {
    const res = await API.get('/recent-events');
    setList(res.data);
  };

  useEffect(() => { fetchList() }, []);

  const submit = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    
    // Append form data
    fd.append('title', form.title);
    fd.append('description', form.description);
    fd.append('date', form.date);
    fd.append('time', form.time);
    fd.append('location', form.location);
    
    // Append image
    if (image) fd.append('image', image);
    
    await API.post('/recent-events', fd, { headers: { 'Content-Type': 'multipart/form-data' } });
    
    // Reset form
    setForm({ 
      title: '', 
      description: '',
      date: '',
      time: '',
      location: ''
    });
    setImage(null);
    
    // Reset file input
    if (fileRef.current) fileRef.current.value = '';
    
    fetchList();
  };

  const remove = async (id) => {
    if (!confirm('Delete this event?')) return;
    await API.delete(`/recent-events/${id}`);
    fetchList();
  };

  const triggerFileInput = () => {
    fileRef.current?.click();
  };

  const removeImage = () => {
    setImage(null);
    if (fileRef.current) fileRef.current.value = '';
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (timeString) => {
    if (!timeString) return '';
    // Convert 24-hour format to 12-hour format
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  const getDaysAgo = (dateString) => {
    if (!dateString) return '';
    const eventDate = new Date(dateString);
    const today = new Date();
    const diffTime = today - eventDate;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays > 0) return `${diffDays} days ago`;
    return 'Upcoming';
  };

  return (
    <div>
      <div className="bg-white p-4 rounded shadow mb-6">
        <h2 className="font-semibold mb-3">Add Recently Conducted Event</h2>
        <form onSubmit={submit} className="grid gap-3">
          <input 
            placeholder="Event Title" 
            value={form.title} 
            onChange={e => setForm({...form, title: e.target.value})} 
            className="border p-2 rounded"
            required
          />

          <textarea 
            placeholder="Event Description" 
            value={form.description} 
            onChange={e => setForm({...form, description: e.target.value})} 
            className="border p-2 rounded" 
            rows="3"
          />

          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-xs text-gray-600 mb-1">Event Date</label>
              <input 
                type="date"
                value={form.date} 
                onChange={e => setForm({...form, date: e.target.value})} 
                className="border p-2 rounded w-full"
                required
              />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Event Time</label>
              <input 
                type="time"
                value={form.time} 
                onChange={e => setForm({...form, time: e.target.value})} 
                className="border p-2 rounded w-full"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Location</label>
              <input 
                placeholder="Location" 
                value={form.location} 
                onChange={e => setForm({...form, location: e.target.value})} 
                className="border p-2 rounded w-full"
              />
            </div>
          </div>

          {/* Image upload */}
          <div>
            <label className="block text-sm font-medium mb-1">Event Image</label>
            <input 
              type="file"
              ref={fileRef}
              onChange={e => setImage(e.target.files[0])}
              accept="image/*"
              className="hidden"
            />
            {image ? (
              <div className="relative border rounded p-2">
                <img 
                  src={URL.createObjectURL(image)} 
                  alt="Preview" 
                  className="w-full h-32 object-cover rounded mb-2"
                />
                <div className="text-xs text-gray-600 mb-2 truncate">{image.name}</div>
                <button
                  type="button"
                  onClick={removeImage}
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs hover:bg-red-600"
                  title="Remove image"
                >
                  ×
                </button>
                <button
                  type="button"
                  onClick={triggerFileInput}
                  className="w-full text-xs bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                >
                  Change Image
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={triggerFileInput}
                className="w-full border border-dashed border-gray-300 p-4 rounded text-gray-600 hover:border-gray-400 hover:bg-gray-50 min-h-[120px] flex flex-col items-center justify-center"
              >
                <svg className="w-8 h-8 mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                </svg>
                <span className="text-sm">Upload Event Image</span>
              </button>
            )}
          </div>

          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Add Recent Event
          </button>
        </form>
      </div>

      {/* Events List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {list.map(event => (
          <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            {/* Image */}
            {event.image_url && (
              <div className="relative">
                <img 
                  src={`${import.meta.env.VITE_API_URL.replace('/api', '')}${event.image_url}`} 
                  alt={event.title} 
                  className="w-full h-48 object-cover" 
                />
                {/* Days ago badge */}
                <div className="absolute top-2 left-2">
                  <span className="bg-black bg-opacity-70 text-white px-2 py-1 rounded-full text-xs">
                    {getDaysAgo(event.date)}
                  </span>
                </div>
              </div>
            )}

            <div className="p-4">
              {/* Title */}
              <h3 className="font-semibold text-lg mb-2 text-gray-800">{event.title}</h3>
              
              {/* Description */}
              {event.description && (
                <p className="text-sm text-gray-600 mb-3 line-clamp-3">{event.description}</p>
              )}

              {/* Event Details */}
              <div className="space-y-1 mb-4">
                {event.date && (
                  <div className="flex items-center text-xs text-gray-500">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    {formatDate(event.date)}
                  </div>
                )}
                
                {event.time && (
                  <div className="flex items-center text-xs text-gray-500">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    {formatTime(event.time)}
                  </div>
                )}
                
                {event.location && (
                  <div className="flex items-center text-xs text-gray-500">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    {event.location}
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                <div className="text-xs text-gray-400">
                  Event ID: {event.id}
                </div>
                <button 
                  onClick={() => remove(event.id)} 
                  className="text-red-500 hover:text-red-700 text-sm font-medium"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
        
        {list.length === 0 && (
          <div className="col-span-full text-center py-12 text-gray-500">
            <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <p className="text-lg">No recent events found</p>
            <p className="text-sm">Add your first recently conducted event above</p>
          </div>
        )}
      </div>
    </div>
  );
}