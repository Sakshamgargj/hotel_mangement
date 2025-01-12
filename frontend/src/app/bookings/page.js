// 'use client'

// import { useState, useEffect } from 'react'
// import { useAuth } from '@/contexts/AuthContext'
// import { BookingCard } from '@/components/booking/BookingCard'
// import { api } from '@/lib/api'

// export default function BookingsPage() {
//   const { user } = useAuth()
//   const [bookings, setBookings] = useState([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     if (user) {
//       fetchBookings()
//     }
//   }, [user])

//   const fetchBookings = async () => {
//     try {
//       const data = await api.bookings.getMyBookings()
//       setBookings(data)
//     } catch (error) {
//       console.error('Error fetching bookings:', error)
//     } finally {
//       setLoading(false)
//     }
//   }

//   if (loading) return <div>Loading...</div>

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8">My Bookings</h1>
//       <div className="grid gap-6">
//         {bookings.map(booking => (
//           <BookingCard key={booking.id} booking={booking} />
//         ))}
//         {bookings.length === 0 && (
//           <div className="text-center py-8">
//             <p className="text-gray-600">No bookings found</p>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }