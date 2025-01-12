import Image from 'next/image'
import { useRouter } from 'next/navigation'

export const RoomCard = ({ room }) => {
  const router = useRouter()

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <Image
          src={room.imageUrl}
          alt={room.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold">{room.name}</h3>
        <p className="text-gray-600">{room.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-xl font-bold">${room.price}/night</span>
          <button 
            onClick={() => router.push(`/rooms/${room.id}`)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  )
}