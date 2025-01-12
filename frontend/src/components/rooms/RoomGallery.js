import { useState } from 'react'
import Image from 'next/image'

export const RoomGallery = ({ images }) => {
  const [activeImage, setActiveImage] = useState(0)

  return (
    <div className="space-y-4">
      <div className="relative h-[400px] rounded-lg overflow-hidden">
        <Image
          src={images[activeImage]}
          alt="Room view"
          fill
          className="object-cover"
        />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setActiveImage(index)}
            className={`relative h-24 rounded-lg overflow-hidden ${
              activeImage === index ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            <Image
              src={image}
              alt={`Room view ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}