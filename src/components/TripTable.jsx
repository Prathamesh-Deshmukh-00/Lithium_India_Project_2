import React from "react";
import TripTableHeader from "./TripTableHeader.jsx";

const trips = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  distance: "20 Km",
  duration: "2 hrs",
  startAddress:
    "Plot No. 1075, Chhatral, Kadi - Kalol Rd, Taluka, Kalol, Chhatral, Gujarat, 382729, India",
  endAddress:
    "Plot No. 1075, Chhatral, Kadi - Kalol Rd, Taluka, Kalol, Chhatral, Gujarat, 382729, India",
  startTime: "22/04/24 10:00 AM",
  endTime: "22/04/24 10:00 AM",
}));

const TripTable = () => {
  return (
   
       <div className="max-w-7xl text-sm mx-auto mt-5">
      <TripTableHeader />

      {/* Add Trip Data Rows Below */}
      <div className="container mx-auto py-4 rounded-b-xl bg-gray-50">
      <div className="overflow-x-auto">
        <div className="h-96 overflow-y-auto  relative">
          <div className="bg-white   rounded-lg shadow-md">
          
            <div className="divide-y text-sm  divide-gray-200">
              {trips.map((trip) => (
                <div key={trip.id} className="grid grid-cols-7 gap-4 p-2 text-sm items-center  last:border-none">
                  <span >{trip.id}</span>
                  <span >{trip.distance}</span>
                  <span >{trip.duration}</span>
                  <span >{trip.startAddress}</span>
                  <span >{trip.endAddress}</span>
                  <span >{trip.startTime}</span>
                  <span >{trip.endTime}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>


    </div>
  
   
  );
};

export default TripTable;
