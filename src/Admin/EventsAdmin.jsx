// src/pages/EventsAdmin.jsx
import React, { useEffect, useState } from 'react';
import API from '../api/Api';
import { Plus, Trash2, X, Calendar, Clock, MapPin, Edit2 } from 'lucide-react';

export default function EventsAdmin() {
  const [list, setList] = useState([]);
  const [form, setForm] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    location: ''
  });
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [editId, setEditId] = useState(null); // Track which event is being edited

  const fetchList = async () => {
    try {
      const res = await API.get('/events');
      setList(res.data);
    } catch (error) {
      console.error('Error fetching events data:', error);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const clearImage = () => {
    setImage(null);
    setImagePreview(null);
    document.getElementById('event-image-input').value = '';
  };

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const fd = new FormData();
      Object.keys(form).forEach((k) => fd.append(k, form[k]));
      if (image) fd.append('image', image);

      if (editId) {
        // Update existing event
        await API.put(`/events/${editId}`, fd, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
      } else {
        // Create new event
        await API.post('/events', fd, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
      }

      setForm({ title: '', description: '', date: '', time: '', location: '' });
      clearImage();
      setEditId(null);
      fetchList();
    } catch (error) {
      alert('Error saving event');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const edit = (item) => {
    setForm({
      title: item.title || '',
      description: item.description || '',
      date: item.date ? item.date.split('T')[0] : '',
      time: item.time || '',
      location: item.location || ''
    });
    setImagePreview(item.image_url || null);
    setEditId(item.id);
  };

  const remove = async (id) => {
    if (!confirm('Are you sure you want to delete this event?')) return;

    try {
      await API.delete(`/events/${id}`);
      fetchList();
    } catch (error) {
      alert('Error deleting event');
      console.error(error);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Events Management</h1>
      </div>

      {/* Create/Edit Form */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center mb-4">
          <Plus size={20} className="text-blue-600 mr-2" />
          <h2 className="text-lg font-semibold text-gray-900">
            {editId ? 'Edit Event' : 'Create Event'}
          </h2>
        </div>

        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
            <input
              placeholder="Enter event title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              placeholder="Enter event description"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
              <input
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
              <input
                placeholder="e.g., 10:00 AM"
                value={form.time}
                onChange={(e) => setForm({ ...form, time: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <input
                placeholder="Enter event location"
                value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Image</label>
            <div className="space-y-3">
              <input
                id="event-image-input"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />

              {imagePreview && (
                <div className="relative inline-block">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-32 h-32 object-cover rounded-lg border border-gray-300"
                  />
                  <button
                    type="button"
                    onClick={clearImage}
                    className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                  >
                    <X size={16} />
                  </button>
                </div>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? (editId ? 'Updating...' : 'Creating...') : editId ? 'Update Event' : 'Create Event'}
          </button>
        </form>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
          >
            {item.image_url && (
              <img
                src={item.image_url}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
            )}

            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
              </div>

              {item.description && (
                <p className="text-gray-600 text-sm mb-3 line-clamp-3">{item.description}</p>
              )}

              <div className="flex flex-col text-sm text-gray-500 mb-3 space-y-1">
                {item.date && (
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-2" />
                    {formatDate(item.date)}
                  </div>
                )}
                {item.time && (
                  <div className="flex items-center">
                    <Clock size={14} className="mr-2" />
                    {item.time}
                  </div>
                )}
                {item.location && (
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-2" />
                    {item.location}
                  </div>
                )}
              </div>

              <div className="flex justify-end space-x-2 pt-3 border-t border-gray-100">
                <button
                  onClick={() => edit(item)}
                  className="flex items-center px-3 py-1 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <Edit2 size={16} className="mr-1" />
                  Edit
                </button>
                <button
                  onClick={() => remove(item.id)}
                  className="flex items-center px-3 py-1 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <Trash2 size={16} className="mr-1" />
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {list.length === 0 && (
        <div className="bg-white rounded-xl border-2 border-dashed border-gray-300 p-12 text-center">
          <Calendar size={48} className="mx-auto text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No events yet</h3>
          <p className="text-gray-500">Create your first event to get started.</p>
        </div>
      )}
    </div>
  );
}