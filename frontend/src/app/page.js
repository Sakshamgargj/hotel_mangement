// import { BookingForm } from '@/components/bookings/BookingForm'
import FeaturedCards from '@/components/home/FeaturedCards'
import FeaturedRoom from '@/components/home/FeaturedRoom'
import FeaturedRooms from '@/components/home/FeaturesRooms'
import HeroSection from '@/components/home/HeroSection'
import PhotoGallery from '@/components/home/PhotoGallery'
import ResortBanner from '@/components/home/ResortBanner'
import Amenities from '@/components/home/Amenities'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ResortBanner />
      <FeaturedRooms/>
      <PhotoGallery/>
      <FeaturedRoom />
      <FeaturedCards />
      <Amenities />
    </div>
  )
}