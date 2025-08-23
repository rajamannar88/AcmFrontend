import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api/Api';

function Gallery() {
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetchGalleryItems();
  }, []);

  const fetchGalleryItems = async () => {
    try {
      setLoading(true);
      const response = await API.get('/gallery');
      setGalleryItems(response.data);
    } catch (err) {
      setError('Failed to load gallery items');
      console.error('Error fetching gallery:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleShowMore = (itemId) => {
    navigate(`/gallery-content/${itemId}`);
  };

  const handleImageClick = (item, imageUrl, imageIndex) => {
    const images = [item.image_url1, item.image_url2, item.image_url3].filter(Boolean);
    setSelectedItem(item);
    setSelectedImage(imageUrl);
    setCurrentImageIndex(imageIndex);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    setSelectedItem(null);
    setCurrentImageIndex(0);
  };

  const navigateImage = (direction) => {
    if (!selectedItem) return;
    const images = [selectedItem.image_url1, selectedItem.image_url2, selectedItem.image_url3].filter(Boolean);
    
    let newIndex;
    if (direction === 'prev') {
      newIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    } else {
      newIndex = currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
    }
    
    setCurrentImageIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const renderImages = (item) => {
    const images = [
      item.image_url1,
      item.image_url2,
      item.image_url3
    ].filter(Boolean);

    if (images.length === 0) {
      return (
        <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-4">
          <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      );
    }

    const baseUrl = import.meta.env.VITE_API_URL?.replace('/api', '') || '';

    return (
      <div className={`grid gap-2 mb-4 ${
        images.length === 1 ? 'grid-cols-1' :
        images.length === 2 ? 'grid-cols-2' :
        'grid-cols-3'
      }`}>
        {images.map((imageUrl, index) => (
          <div key={index} className="aspect-square overflow-hidden rounded-lg">
            <img
              src={`${baseUrl}${imageUrl}`}
              alt={`${item.title} - Image ${index + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => handleShowMore(item.id)}
              onError={(e) => {
                e.target.src = '/placeholder-image.jpg';
              }}
            />
          </div>
        ))}
      </div>
    );
  };

  const hasAdditionalContent = (item) => {
    return [
      item.heading1, item.description1,
      item.heading2, item.description2,
      item.heading3, item.description3
    ].some(Boolean);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Gallery</h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="flex justify-center items-center min-h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen  bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Gallery</h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="text-center py-8">
            <div className="text-red-600 mb-4">
              <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-lg font-medium">{error}</p>
            </div>
            <button 
              onClick={fetchGalleryItems}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (galleryItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Gallery</h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="text-center py-12">
            <div className="text-gray-500">
              <svg className="w-20 h-20 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-xl font-medium mb-2">No gallery items found</p>
              <p className="text-gray-400">Check back later for new content</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Gallery</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our collection of stunning visuals and captivating stories
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map(item => (
            <div 
              key={item.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Images */}
              {renderImages(item)}

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                  {item.title}
                </h3>

                {/* Caption */}
                {item.caption && (
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {item.caption}
                  </p>
                )}

                {/* Show More Button */}
                {hasAdditionalContent(item) ? (
                  <button
                    onClick={() => handleShowMore(item.id)}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 group"
                  >
                    <span>Show More</span>
                    <svg 
                      className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                ) : (
                  <div className="h-6"></div> // Spacer for consistent card heights
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;