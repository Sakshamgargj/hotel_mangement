"use client"
import { useState, useEffect } from 'react'
import { RoomCard } from './RoomCard'
// import { FilterSidebar } from './FilterSidebar'
// import { api } from '@/lib/api'

export const RoomList = () => {
  const [rooms, setRooms] = useState([])
  const [filters, setFilters] = useState({
    priceRange: [0, 1000],
    capacity: 1,
    amenities: []
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchRooms()
  }, [filters])

  const fetchRooms = async () => {
    try {
      const data = await api.rooms.getAll(filters)
      setRooms(data)
    } catch (error) {
      console.error('Error fetching rooms:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="container bg-black mx-auto px-4 py-8">
      <div className="flex gap-8">
        {/* <FilterSidebar filters={filters} onFilterChange={setFilters} /> */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}