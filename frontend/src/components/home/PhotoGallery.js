'use client';
'use client';
import React, { useState } from 'react';
import { X } from 'lucide-react';

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const images = [
    { id: 1, src: '/images/room/room2.jpg', category: 'Rooms', title: 'Deluxe Suite' },
    { id: 2, src: '/images/room/room2.jpg', category: 'Dining', title: 'Main Restaurant' },
    { id: 3, src: '/images/room/room2.jpg', category: 'Pool', title: 'Infinity Pool' },
    { id: 4, src: '/images/room/room2.jpg', category: 'Spa', title: 'Wellness Center' },
    { id: 5, src: '/images/room/room2.jpg', category: 'Rooms', title: 'Ocean View Room' },
    { id: 6, src: '/images/room/room2.jpg', category: 'Dining', title: 'Rooftop Bar' },
    { id: 7, src: '/images/room/room2.jpg', category: 'Amenities', title: 'Fitness Center' },
    { id: 8, src: '/images/room/room2.jpg', category: 'Events', title: 'Conference Room' }
  ];

  const categories = ['All', ...new Set(images.map(img => img.category))];

  const filteredImages = activeCategory === 'All'
    ? images
    : images.filter(img => img.category === activeCategory);

  return (
    <div className="h-auto bg-black mx-auto px-4 py-6">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-4 mb-6 justify-center">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full ${
              activeCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Responsive Image Display */}
      <div
        className="flex flex-nowrap gap-4 overflow-x-auto md:overflow-visible md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-6"
      >
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className="flex-shrink-0 w-72 md:w-auto group relative cursor-pointer"
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 rounded-lg" />
            <div className="absolute text-center bottom-0 left-0 right-0 p-4 text-black transform translate-y-full group-hover:translate-y-0 group-hover:text-white transition-transform duration-300">
              <h3 className="text-xl font-bold">{image.title}</h3>
              <p className="text-sm">{image.category}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white rounded-b-lg">
              <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
              <p>{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
