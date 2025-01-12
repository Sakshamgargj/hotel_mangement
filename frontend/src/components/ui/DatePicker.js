import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Button } from "./Button";

export const DatePicker = () => {
  const [checkIn, setCheckIn] = useState();
  const [checkOut, setCheckOut] = useState();
  const [isSelectingCheckOut, setIsSelectingCheckOut] = useState(false);

  const handleDateSelect = (date) => {
    if (!checkIn || isSelectingCheckOut) {
      if (!checkIn || date >= checkIn) {
        setCheckOut(date);
        setIsSelectingCheckOut(false);
      }
    } else {
      setCheckIn(date);
      setIsSelectingCheckOut(true);
    }
  };

  const formatDate = (date) => {
    if (!date) return '';
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Select Dates</h3>
      <div className="space-y-4">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="w-full justify-start text-left font-normal"
            >
              <Calendar className="mr-2 h-4 w-4" />
              {checkIn ? formatDate(checkIn) : "Check-in Date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <CalendarComponent
              mode="single"
              selected={checkIn}
              onSelect={(date) => {
                setCheckIn(date);
                setIsSelectingCheckOut(true);
              }}
              initialFocus
            />
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="w-full justify-start text-left font-normal"
            >
              <Calendar className="mr-2 h-4 w-4" />
              {checkOut ? formatDate(checkOut) : "Check-out Date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <CalendarComponent
              mode="single"
              selected={checkOut}
              onSelect={setCheckOut}
              disabled={(date) => date < checkIn}
              initialFocus
            />
          </PopoverContent>
        </Popover>

        <Button 
          className="w-full bg-blue-600 text-white hover:bg-blue-700"
          disabled={!checkIn || !checkOut}
        >
          Search Availability
        </Button>
      </div>
    </div>
  );
};