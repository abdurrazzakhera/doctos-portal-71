import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots, price } = service;
  return (
    <div className='card w:max-w-lg bg-base-100 shadow-xl '>
      <div className='card-body text-center '>
        <h2 className='text-3xl font-bold text-secondary'>{name}</h2>
        <p>
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className='text-red-500 text-xl'>Try another date</span>
          )}
        </p>
        <p>Price: ${price}</p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} is Available
        </p>
        <div className='card-actions justify-center'>
          <label
            disabled={slots.length === 0}
            onClick={() => setTreatment(service)}
            htmlFor='booking-Modal'
            className='btn bg-gradient-to-r from-secondary to-primary text-white uppercase border-none'
          >
            Booking Now
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
