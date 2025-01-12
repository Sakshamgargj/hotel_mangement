// app/rooms/[id]/page.js
'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { BookingForm } from '@/components/booking/BookingForm'
import { RoomGallery } from '@/components/rooms/RoomGallery'
import { RoomAmenities } from '@/components/rooms/RoomAmenities'
import { api } from '@/lib/api'

export default function RoomDetailPage() {
  const { id } = useParams()
  const [room, setRoom] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchRoom()
  }, [id])

  const fetchRoom = async () => {
    try {
      const data = await api.rooms.getById(id)
      setRoom(data)
    } catch (error) {
      console.error('Error fetching room:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <div>Loading...</div>
  if (!room) return <div>Room not found</div>

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold mb-4">{room.name}</h1>
          <RoomGallery images={room.images} />
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Description</h2>
            <p className="text-gray-600">{room.description}</p>
          </div>
          <RoomAmenities amenities={room.amenities} />
        </div>
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="mb-4">
                <span className="text-3xl font-bold">${room.price}</span>
                <span className="text-gray-600">/night</span>
              </div>
              <BookingForm roomId={id} price={room.price} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
