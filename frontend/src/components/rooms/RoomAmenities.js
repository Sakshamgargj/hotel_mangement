import {
    Wifi,
    Tv,
    Coffee,
    Bath,
    Parking,
    AirConditioning
  } from 'lucide-react'
  
  const amenityIcons = {
    wifi: Wifi,
    tv: Tv,
    coffee: Coffee,
    bath: Bath,
    parking: Parking,
    ac: AirConditioning
  }
  
  export const RoomAmenities = ({ amenities }) => {
    return (
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Amenities</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {amenities.map(amenity => {
            const Icon = amenityIcons[amenity.icon] || Wifi
            return (
              <div key={amenity.name} className="flex items-center space-x-3">
                <Icon className="w-5 h-5 text-gray-600" />
                <span>{amenity.name}</span>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
  
  // components/booking/BookingCard.js
  import { format } from 'date-fns'
  import { Button } from '@/components/ui/Button'
  
  export const BookingCard = ({ booking }) => {
    const statusColors = {
      pending: 'bg-yellow-100 text-yellow-800',
      confirmed: 'bg-green-100 text-green-800',
      cancelled: 'bg-red-100 text-red-800'
    }
  
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold">{booking.room.name}</h3>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[booking.status]}`}>
            {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-sm text-gray-600">Check-in</p>
            <p className="font-medium">
              {format(new Date(booking.checkIn), 'MMM dd, yyyy')}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Check-out</p>
            <p className="font-medium">
              {format(new Date(booking.checkOut), 'MMM dd, yyyy')}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Guests</p>
            <p className="font-medium">{booking.guests}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Total Price</p>
            <p className="font-medium">${booking.totalPrice}</p>
          </div>
        </div>
        <div className="border-t pt-4">
          {booking.status === 'pending' && (
            <div className="flex space-x-4">
              <Button
                variant="primary"
                onClick={() => handleConfirmBooking(booking.id)}
              >
                Confirm Booking
              </Button>
              <Button
                variant="outline"
                onClick={() => handleCancelBooking(booking.id)}
              >
                Cancel Booking
              </Button>
            </div>
          )}
        </div>
      </div>
    )
  }
  