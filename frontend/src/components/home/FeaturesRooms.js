import React from 'react';
import { Star } from 'lucide-react';

const FeaturedRooms = () => {
  const rooms = [
    {
      id: 1,
      name: 'Deluxe Ocean View',
      image: '/images/room/room2.jpg',
      price: 2999,
      rating: 4.8,
      description: 'Luxurious room with panoramic ocean views and private balcony',
      amenities: ['King Bed', 'Ocean View', 'Private Balcony', 'Mini Bar']
    },
    {
      id: 2,
      name: 'Executive Suite',
      image: '/images/room/room2.jpg',
      price: 3459,
      rating: 4.9,
      description: 'Spacious suite with separate living area and premium amenities',
      amenities: ['King Bed', 'Living Room', 'Work Desk']
    },
    {
      id: 3,
      name: 'Garden Villa',
      image: '/images/room/room2.jpg',
      price: 2599,
      rating: 4.9,
      description: 'Private villa surrounded by tropical gardens with pool access',
      amenities: ['2 Bedrooms', 'Private Pool', 'Garden View', 'Kitchen']
    }
  ];

  return (
    <div className="py-12 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8">Featured Rooms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div key={room.id} className="bg-white/20 rounded-lg shadow-md overflow-hidden">
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-50">{room.name}</h3>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">{room.rating}</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{room.description}</p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {room.amenities.map((amenity) => (
                      <span
                        key={amenity}
                        className="px-2 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-gray-400">
                    <span className="text-2xl font-bold">Rs. {room.price}</span>
                    <span className="text-sm text-gray-600">/Day</span>
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedRooms;