import { RoomList } from '@/components/rooms/RoomList'

export default function RoomsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Rooms</h1>
      <RoomList />
    </div>
  )
}