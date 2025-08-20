import React, { useEffect, useState, useRef } from 'react';
import API from '../api/Api';

export default function GalleryAdmin() {
  const [list, setList] = useState([]);
  const [form, setForm] = useState({ 
    title: '', 
    caption: '',
    heading1: '',
    description1: '',
    heading2: '',
    description2: '',
    heading3: '',
    description3: ''
  });
  const [images, setImages] = useState({
    image1: null,
    image2: null,
    image3: null
  });
  const [editingId, setEditingId] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const fileRef1 = useRef(null);
  const fileRef2 = useRef(null);
  const fileRef3 = useRef(null);

  const fetchList = async () => {
    const res = await API.get('/gallery');
    setList(res.data);
  };

  useEffect(() => { fetchList() }, []);

  const resetForm = () => {
    setForm({ 
      title: '', 
      caption: '',
      heading1: '',
      description1: '',
      heading2: '',
      description2: '',
      heading3: '',
      description3: ''
    });
    setImages({ image1: null, image2: null, image3: null });
    setEditingId(null);
    
    // Reset file inputs
    if (fileRef1.current) fileRef1.current.value = '';
    if (fileRef2.current) fileRef2.current.value = '';
    if (fileRef3.current) fileRef3.current.value = '';
  };

  const submit = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    
    // Append form data
    fd.append('title', form.title);
    fd.append('caption', form.caption);
    fd.append('heading1', form.heading1);
    fd.append('description1', form.description1);
    fd.append('heading2', form.heading2);
    fd.append('description2', form.description2);
    fd.append('heading3', form.heading3);
    fd.append('description3', form.description3);
    
    // Append images
    if (images.image1) fd.append('image1', images.image1);
    if (images.image2) fd.append('image2', images.image2);
    if (images.image3) fd.append('image3', images.image3);
    
    try {
      if (editingId) {
        // Update existing item
        await API.put(`/gallery/${editingId}`, fd, { 
          headers: { 'Content-Type': 'multipart/form-data' } 
        });
      } else {
        // Create new item
        await API.post('/gallery', fd, { 
          headers: { 'Content-Type': 'multipart/form-data' } 
        });
      }
      
      resetForm();
      fetchList();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error saving gallery item. Please try again.');
    }
  };

  const startEdit = (item) => {
    setForm({
      title: item.title || '',
      caption: item.caption || '',
      heading1: item.heading1 || '',
      description1: item.description1 || '',
      heading2: item.heading2 || '',
      description2: item.description2 || '',
      heading3: item.heading3 || '',
      description3: item.description3 || ''
    });
    setEditingId(item.id);
    setImages({ image1: null, image2: null, image3: null });
    
    // Reset file inputs
    if (fileRef1.current) fileRef1.current.value = '';
    if (fileRef2.current) fileRef2.current.value = '';
    if (fileRef3.current) fileRef3.current.value = '';
    
    // Scroll to form
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cancelEdit = () => {
    resetForm();
  };

  const confirmDelete = (item) => {
    setItemToDelete(item);
    setShowDeleteModal(true);
  };

  const handleDelete = async () => {
    if (!itemToDelete) return;
    
    try {
      await API.delete(`/gallery/${itemToDelete.id}`);
      fetchList();
      setShowDeleteModal(false);
      setItemToDelete(null);
    } catch (error) {
      console.error('Error deleting item:', error);
      alert('Error deleting item. Please try again.');
    }
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setItemToDelete(null);
  };

  const handleImageChange = (imageKey, file) => {
    setImages(prev => ({ ...prev, [imageKey]: file }));
  };

  const triggerFileInput = (refNumber) => {
    if (refNumber === 1) fileRef1.current?.click();
    if (refNumber === 2) fileRef2.current?.click();
    if (refNumber === 3) fileRef3.current?.click();
  };

  const removeImage = (imageKey) => {
    setImages(prev => ({ ...prev, [imageKey]: null }));
    if (imageKey === 'image1') fileRef1.current.value = '';
    if (imageKey === 'image2') fileRef2.current.value = '';
    if (imageKey === 'image3') fileRef3.current.value = '';
  };

  return (
    <div>
      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full mx-4">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0 w-10 h-10 mx-auto bg-red-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Delete Gallery Item</h3>
              <p className="text-sm text-gray-500 mb-2">
                Are you sure you want to delete "<span className="font-medium">{itemToDelete?.title}</span>"?
              </p>
              <p className="text-xs text-red-600 mb-6">This action cannot be undone.</p>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={cancelDelete}
                className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="flex-1 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white p-4 rounded shadow mb-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold">
            {editingId ? 'Update Gallery Item' : 'Add Gallery Item'}
          </h2>
          {editingId && (
            <button
              type="button"
              onClick={cancelEdit}
              className="text-gray-500 hover:text-gray-700 text-sm"
            >
              Cancel Edit
            </button>
          )}
        </div>
        
        <form onSubmit={submit} className="grid gap-3">
          <input 
            placeholder="Title" 
            value={form.title} 
            onChange={e => setForm({...form, title: e.target.value})} 
            className="border p-2 rounded"
            required
          />
          <textarea 
            placeholder="Caption" 
            value={form.caption} 
            onChange={e => setForm({...form, caption: e.target.value})} 
            className="border p-2 rounded" 
          />
          
          {/* Image uploads */}
          <div className="grid grid-cols-3 gap-3">
            {/* Image 1 */}
            <div>
              <label className="block text-sm font-medium mb-1">Image 1</label>
              <input 
                type="file"
                ref={fileRef1}
                onChange={e => handleImageChange('image1', e.target.files[0])}
                accept="image/*"
                className="hidden"
              />
              {images.image1 ? (
                <div className="relative border rounded p-2">
                  <img 
                    src={URL.createObjectURL(images.image1)} 
                    alt="Preview 1" 
                    className="w-full h-24 object-cover rounded mb-2"
                  />
                  <div className="text-xs text-gray-600 mb-2 truncate">{images.image1.name}</div>
                  <button
                    type="button"
                    onClick={() => removeImage('image1')}
                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs hover:bg-red-600"
                    title="Remove image"
                  >
                    ×
                  </button>
                  <button
                    type="button"
                    onClick={() => triggerFileInput(1)}
                    className="w-full text-xs bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                  >
                    Change Image
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => triggerFileInput(1)}
                  className="w-full border border-dashed border-gray-300 p-2 rounded text-gray-600 hover:border-gray-400 hover:bg-gray-50 min-h-[100px] flex flex-col items-center justify-center"
                >
                  <svg className="w-8 h-8 mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                  </svg>
                  <span className="text-sm">Upload Image 1</span>
                </button>
              )}
            </div>

            {/* Image 2 */}
            <div>
              <label className="block text-sm font-medium mb-1">Image 2</label>
              <input 
                type="file"
                ref={fileRef2}
                onChange={e => handleImageChange('image2', e.target.files[0])}
                accept="image/*"
                className="hidden"
              />
              {images.image2 ? (
                <div className="relative border rounded p-2">
                  <img 
                    src={URL.createObjectURL(images.image2)} 
                    alt="Preview 2" 
                    className="w-full h-24 object-cover rounded mb-2"
                  />
                  <div className="text-xs text-gray-600 mb-2 truncate">{images.image2.name}</div>
                  <button
                    type="button"
                    onClick={() => removeImage('image2')}
                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs hover:bg-red-600"
                    title="Remove image"
                  >
                    ×
                  </button>
                  <button
                    type="button"
                    onClick={() => triggerFileInput(2)}
                    className="w-full text-xs bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                  >
                    Change Image
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => triggerFileInput(2)}
                  className="w-full border border-dashed border-gray-300 p-2 rounded text-gray-600 hover:border-gray-400 hover:bg-gray-50 min-h-[100px] flex flex-col items-center justify-center"
                >
                  <svg className="w-8 h-8 mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                  </svg>
                  <span className="text-sm">Upload Image 2</span>
                </button>
              )}
            </div>

            {/* Image 3 */}
            <div>
              <label className="block text-sm font-medium mb-1">Image 3</label>
              <input 
                type="file"
                ref={fileRef3}
                onChange={e => handleImageChange('image3', e.target.files[0])}
                accept="image/*"
                className="hidden"
              />
              {images.image3 ? (
                <div className="relative border rounded p-2">
                  <img 
                    src={URL.createObjectURL(images.image3)} 
                    alt="Preview 3" 
                    className="w-full h-24 object-cover rounded mb-2"
                  />
                  <div className="text-xs text-gray-600 mb-2 truncate">{images.image3.name}</div>
                  <button
                    type="button"
                    onClick={() => removeImage('image3')}
                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs hover:bg-red-600"
                    title="Remove image"
                  >
                    ×
                  </button>
                  <button
                    type="button"
                    onClick={() => triggerFileInput(3)}
                    className="w-full text-xs bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                  >
                    Change Image
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => triggerFileInput(3)}
                  className="w-full border border-dashed border-gray-300 p-2 rounded text-gray-600 hover:border-gray-400 hover:bg-gray-50 min-h-[100px] flex flex-col items-center justify-center"
                >
                  <svg className="w-8 h-8 mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                  </svg>
                  <span className="text-sm">Upload Image 3</span>
                </button>
              )}
            </div>
          </div>

          {/* Heading-Description pairs */}
          <div className="space-y-4">
            <h3 className="font-medium">Content Sections</h3>
            
            {/* Section 1 */}
            <div className="grid grid-cols-2 gap-3">
              <input 
                placeholder="Heading 1" 
                value={form.heading1} 
                onChange={e => setForm({...form, heading1: e.target.value})} 
                className="border p-2 rounded"
              />
              <textarea 
                placeholder="Description 1" 
                value={form.description1} 
                onChange={e => setForm({...form, description1: e.target.value})} 
                className="border p-2 rounded" 
              />
            </div>
            
            {/* Section 2 */}
            <div className="grid grid-cols-2 gap-3">
              <input 
                placeholder="Heading 2" 
                value={form.heading2} 
                onChange={e => setForm({...form, heading2: e.target.value})} 
                className="border p-2 rounded"
              />
              <textarea 
                placeholder="Description 2" 
                value={form.description2} 
                onChange={e => setForm({...form, description2: e.target.value})} 
                className="border p-2 rounded" 
              />
            </div>
            
            {/* Section 3 */}
            <div className="grid grid-cols-2 gap-3">
              <input 
                placeholder="Heading 3" 
                value={form.heading3} 
                onChange={e => setForm({...form, heading3: e.target.value})} 
                className="border p-2 rounded"
              />
              <textarea 
                placeholder="Description 3" 
                value={form.description3} 
                onChange={e => setForm({...form, description3: e.target.value})} 
                className="border p-2 rounded" 
              />
            </div>
          </div>

          <div className="flex space-x-2">
            <button 
              type="submit"
              className="bg-sky-600 text-white px-4 py-2 rounded hover:bg-sky-700 transition-colors"
            >
              {editingId ? 'Update' : 'Create'}
            </button>
            {editingId && (
              <button
                type="button"
                onClick={cancelEdit}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {list.map(item => (
          <div key={item.id} className="bg-white p-4 rounded shadow">
            {/* Display images */}
            <div className="grid grid-cols-3 gap-2 mb-3">
              {item.image_url1 && (
                <img 
                  src={`${import.meta.env.VITE_API_URL.replace('/api', '')}${item.image_url1}`} 
                  alt="" 
                  className="w-full h-20 object-cover rounded" 
                />
              )}
              {item.image_url2 && (
                <img 
                  src={`${import.meta.env.VITE_API_URL.replace('/api', '')}${item.image_url2}`} 
                  alt="" 
                  className="w-full h-20 object-cover rounded" 
                />
              )}
              {item.image_url3 && (
                <img 
                  src={`${import.meta.env.VITE_API_URL.replace('/api', '')}${item.image_url3}`} 
                  alt="" 
                  className="w-full h-20 object-cover rounded" 
                />
              )}
            </div>

            <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
            {item.caption && <p className="text-sm text-gray-600 mb-3">{item.caption}</p>}

            {/* Display heading-description pairs */}
            <div className="space-y-2">
              {item.heading1 && (
                <div>
                  <h5 className="font-medium text-sm">{item.heading1}</h5>
                  {item.description1 && <p className="text-xs text-gray-600">{item.description1}</p>}
                </div>
              )}
              {item.heading2 && (
                <div>
                  <h5 className="font-medium text-sm">{item.heading2}</h5>
                  {item.description2 && <p className="text-xs text-gray-600">{item.description2}</p>}
                </div>
              )}
              {item.heading3 && (
                <div>
                  <h5 className="font-medium text-sm">{item.heading3}</h5>
                  {item.description3 && <p className="text-xs text-gray-600">{item.description3}</p>}
                </div>
              )}
            </div>

            <div className="mt-3 flex justify-end space-x-2">
              <button 
                onClick={() => startEdit(item)} 
                className="text-blue-500 hover:text-blue-700 text-sm font-medium transition-colors"
              >
                Edit
              </button>
              <button 
                onClick={() => confirmDelete(item)} 
                className="text-red-500 hover:text-red-700 text-sm font-medium transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}