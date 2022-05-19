import React from "react";
import Testominal from "./Testominal";
import people from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import quate from "../../assets/icons/quote.svg";

const Testominals = () => {
  const testimonialsObj = [
    {
      _id: "1",
      name: "Winson Herry",
      location: "California",
      dec: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people,
    },
    {
      _id: "2",
      name: "Anne Maria",
      location: "Taxas",
      dec: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people2,
    },
    {
      _id: "3",
      name: "ketty Pery",
      location: "New York",
      dec: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people3,
    },
  ];
  return (
    <div>
      <div className='flex justify-between'>
        <div>
          <h4 className='text-socondary'>Testimonial</h4>
          <h1 className='text-4xl'>What Our Patients Says</h1>
        </div>
        <div>
          <img src={quate} className='w-24  lg:w-48' alt='' />
        </div>
      </div>
      <div className='grid lg:grid-cols-3 grid-cols-1 py-5 gap-x-10'>
        {testimonialsObj.map((testimonial) => (
          <Testominal
            testimonial={testimonial}
            key={testimonial._id}
          ></Testominal>
        ))}
      </div>
    </div>
  );
};

export default Testominals;
