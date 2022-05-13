import React from "react";

const Testominal = ({ testimonial }) => {
  return (
    <div className='card shadow-lg px-6'>
      <div className='card-body'>
        <p className='text-justify'>{testimonial.dec}</p>
        <div className='flex gap-x-4 items-center justify-start'>
          <img
            className='border-4 rounded-full p-0.5 border-secondary'
            style={{ width: "70px" }}
            src={testimonial.img}
            alt=''
          />
          <div>
            <p className='font-bold'>{testimonial.name}</p>
            <p>{testimonial.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testominal;
