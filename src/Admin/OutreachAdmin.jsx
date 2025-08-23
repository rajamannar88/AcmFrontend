import React, { useEffect, useState, useRef } from 'react';
import API from '../api/Api';

export default function OutreachAdmin() {
  const [list, setList] = useState([]);
  const [form, setForm] = useState({ 
    title: '', 
    description: '',
    date: '',
    location: '',
    heading1: '',
    description1: '',
    heading2: '',
    description2: '',
    heading3: '',
    description3: '',
    status: 'upcoming'
  });
  const [image, setImage] = useState(null);
  const fileRef = useRef(null);

  const fetchList = async () => {
    const res = await API.get('/outreach');
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
    fd.append('location', form.location);
    fd.append('heading1', form.heading1);
    fd.append('description1', form.description1);
    fd.append('heading2', form.heading2);
    fd.append('description2', form.description2);
    fd.append('heading3', form.heading3);
    fd.append('description3', form.description3);
    fd.append('status', form.status);
    
    // Append image
    if (image) fd.append('image', image);
    
    await API.post('/outreach', fd, { headers: { 'Content-Type': 'multipart/form-data' } });
    
    // Reset form
    setForm({ 
      title: '', 
      description: '',
      date: '',
      location: '',
      heading1: '',
      description1: '',
      heading2: '',
      description2: '',
      heading3: '',
      description3: '',
      status: 'upcoming'
    });
    setImage(null);
    
    // Reset file input
    if (fileRef.current) fileRef.current.value = '';
    
    fetchList();
  };

  const remove = async (id) => {
    if (!confirm('Delete?')) return;
    await API.delete(`/outreach/${id}`);
    fetchList();
  };

  const triggerFileInput = () => {
    fileRef.current?.click();
  };

  const removeImage = () => {
    setImage(null);
    if (fileRef.current) fileRef.current.value = '';
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'upcoming': return 'bg-blue-100 text-blue-800';
      case 'ongoing': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div>
      <div className="bg-white p-4 rounded shadow mb-6">
        <h2 className="font-semibold mb-3">Create Outreach Activity</h2>
        <form onSubmit={submit} className="grid gap-3">
          <div className="grid grid-cols-2 gap-3">
            <input 
              placeholder="Title" 
              value={form.title} 
              onChange={e => setForm({...form, title: e.target.value})} 
              className="border p-2 rounded"
              required
            />
            <select
              value={form.status}
              onChange={e => setForm({...form, status: e.target.value})}
              className="border p-2 rounded"
            >
              <option value="upcoming">Upcoming</option>
              <option value="ongoing">Ongoing</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          <textarea 
            placeholder="Description" 
            value={form.description} 
            onChange={e => setForm({...form, description: e.target.value})} 
            className="border p-2 rounded" 
            rows="3"
          />

          <div className="grid grid-cols-2 gap-3">
            <input 
              type="date"
              value={form.date} 
              onChange={e => setForm({...form, date: e.target.value})} 
              className="border p-2 rounded"
            />
            <input 
              placeholder="Location" 
              value={form.location} 
              onChange={e => setForm({...form, location: e.target.value})} 
              className="border p-2 rounded"
            />
          </div>

          {/* Image upload */}
          <div>
            <label className="block text-sm font-medium mb-1">Activity Image</label>
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
                <span className="text-sm">Upload Activity Image</span>
              </button>
            )}
          </div>

          {/* Activity Details sections */}
          <div className="space-y-4">
            <h3 className="font-medium">Activity Details</h3>
            
            {/* Section 1 */}
            <div className="grid grid-cols-2 gap-3">
              <input 
                placeholder="Detail Heading 1" 
                value={form.heading1} 
                onChange={e => setForm({...form, heading1: e.target.value})} 
                className="border p-2 rounded"
              />
              <textarea 
                placeholder="Detail Description 1" 
                value={form.description1} 
                onChange={e => setForm({...form, description1: e.target.value})} 
                className="border p-2 rounded" 
                rows="2"
              />
            </div>
            
            {/* Section 2 */}
            <div className="grid grid-cols-2 gap-3">
              <input 
                placeholder="Detail Heading 2" 
                value={form.heading2} 
                onChange={e => setForm({...form, heading2: e.target.value})} 
                className="border p-2 rounded"
              />
              <textarea 
                placeholder="Detail Description 2" 
                value={form.description2} 
                onChange={e => setForm({...form, description2: e.target.value})} 
                className="border p-2 rounded" 
                rows="2"
              />
            </div>
            
            {/* Section 3 */}
            <div className="grid grid-cols-2 gap-3">
              <input 
                placeholder="Detail Heading 3" 
                value={form.heading3} 
                onChange={e => setForm({...form, heading3: e.target.value})} 
                className="border p-2 rounded"
              />
              <textarea 
                placeholder="Detail Description 3" 
                value={form.description3} 
                onChange={e => setForm({...form, description3: e.target.value})} 
                className="border p-2 rounded" 
                rows="2"
              />
            </div>
          </div>

          <button className="bg-sky-600 text-white px-4 py-2 rounded hover:bg-sky-700">
            Create Outreach Activity
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {list.map(item => (
          <div key={item.id} className="bg-white p-4 rounded shadow">
            {/* Status badge */}
            <div className="flex justify-between items-start mb-3">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
              </span>
              <button 
                onClick={() => remove(item.id)} 
                className="text-red-500 hover:text-red-700 text-sm"
              >
                Delete
              </button>
            </div>

            {/* Image */}
{item.image_url && (
  <img 
    src={item.image_url} 
    alt={item.title || "Outreach image"} 
    className="w-full h-40 object-cover rounded mb-3" 
  />
)}


            {/* Main content */}
            <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
            {item.description && <p className="text-sm text-gray-600 mb-3">{item.description}</p>}

            {/* Date and Location */}
            <div className="flex flex-wrap gap-2 mb-3 text-xs text-gray-500">
              {item.date && (
                <span className="flex items-center">
                  <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  {formatDate(item.date)}
                </span>
              )}
              {item.location && (
                <span className="flex items-center">
                  <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  {item.location}
                </span>
              )}
            </div>

            {/* Activity details */}
            <div className="space-y-2">
              {item.heading1 && (
                <div>
                  <h5 className="font-medium text-sm text-gray-800">{item.heading1}</h5>
                  {item.description1 && <p className="text-xs text-gray-600">{item.description1}</p>}
                </div>
              )}
              {item.heading2 && (
                <div>
                  <h5 className="font-medium text-sm text-gray-800">{item.heading2}</h5>
                  {item.description2 && <p className="text-xs text-gray-600">{item.description2}</p>}
                </div>
              )}
              {item.heading3 && (
                <div>
                  <h5 className="font-medium text-sm text-gray-800">{item.heading3}</h5>
                  {item.description3 && <p className="text-xs text-gray-600">{item.description3}</p>}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}