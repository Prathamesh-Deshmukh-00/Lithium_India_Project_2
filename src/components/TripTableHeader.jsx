const TripTableHeader = () => {
    return (
      <div className="bg-white p-3 rounded-t-xl mb-1">
        <div className="grid bg-gray-200 grid-cols-7  rounded-xl text-black h-10 justify-center items-center">
          <div className="text-center">Trip</div>
          <div className="text-center">Distance</div>
          <div className="text-center">Duration</div>
          <div className="text-center">Start Address</div>
          <div className="text-center">End Address</div>
          <div className="text-center">Trip Started on</div>
          <div className="text-center">Trip Ended on</div>
        </div>
      </div>
    );
  };
  
  export default TripTableHeader;
  