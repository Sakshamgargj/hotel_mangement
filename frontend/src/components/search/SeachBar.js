import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { DatePicker } from '@/components/ui/DatePicker'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'

export const SearchBar = () => {
  const router = useRouter()
  const [search, setSearch] = useState({
    checkIn: null,
    checkOut: null,
    guests: 1
  })

  const handleSearch = (e) => {
    e.preventDefault()
    const params = new URLSearchParams({
      checkIn: search.checkIn?.toISOString(),
      checkOut: search.checkOut?.toISOString(),
      guests: search.guests
    })
    router.push(`/rooms?${params.toString()}`)
  }

  return (
    <form 
      onSubmit={handleSearch}
      className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <DatePicker
          label="Check-in"
          selected={search.checkIn}
          onChange={(date) => setSearch({ ...search, checkIn: date })}
          minDate={new Date()}
          className="w-full"
        />
        <DatePicker
          label="Check-out"
          selected={search.checkOut}
          onChange={(date) => setSearch({ ...search, checkOut: date })}
          minDate={search.checkIn || new Date()}
          className="w-full"
        />
        <Input
          type="number"
          label="Guests"
          min={1}
          value={search.guests}
          onChange={(e) => setSearch({ ...search, guests: Number(e.target.value) })}
        />
        <Button type="submit" className="w-full md:self-end">
          Search Rooms
        </Button>
      </div>
    </form>
  )
}