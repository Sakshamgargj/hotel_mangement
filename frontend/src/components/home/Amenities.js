import React from 'react';
import { Wifi, Utensils, Dumbbell, Car, Coffee } from 'lucide-react'; // Import only valid icons

// Define a mapping for the icons
const amenityIcons = {
  PoolIcon: () => (
    <div className="w-8 h-8 flex items-center justify-center bg-blue-100 rounded-full text-blue-600 font-bold">
      Pool
    </div>
  ), // Placeholder for Pool icon
  WifiIcon: () => <Wifi className="w-8 h-8 text-blue-600" />,
  UtensilsIcon: () => <Utensils className="w-8 h-8 text-blue-600" />,
  DumbbellIcon: () => <Dumbbell className="w-8 h-8 text-blue-600" />,
  CarIcon: () => <Car className="w-8 h-8 text-blue-600" />,
  CoffeeIcon: () => <Coffee className="w-8 h-8 text-blue-600" />,
};

// Array of amenity data
const amenities = [
  {
    icon: 'PoolIcon',
    title: 'Swimming Pool',
    description: 'Outdoor infinity pool with ocean views',
  },
  {
    icon: 'WifiIcon',
    title: 'Free Wi-Fi',
    description: 'High-speed internet throughout the property',
  },
  {
    icon: 'UtensilsIcon',
    title: 'Restaurant',
    description: '24/7 fine dining with international cuisine',
  },
  {
    icon: 'DumbbellIcon',
    title: 'Fitness Center',
    description: 'Modern equipment and personal trainers',
  },
  {
    icon: 'CarIcon',
    title: 'Valet Parking',
    description: 'Complimentary valet parking service',
  },
  {
    icon: 'CoffeeIcon',
    title: 'Coffee Shop',
    description: 'Artisan coffee and fresh pastries',
  },
];

const Amenities = () => {
  return (
    <div className="relative flex py-12 bg-white/5 ">
            <div className="absolute inset-0 bg-black opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Hotel Amenities</h2>
          <p className="mt-4 text-lg text-gray-600">
            Experience luxury with our world-class amenities and services
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  {React.createElement(amenityIcons[amenity.icon] || (() => <div>Icon Missing</div>))}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {amenity.title}
                  </h3>
                  <p className="mt-1 text-gray-600">{amenity.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Amenities;
