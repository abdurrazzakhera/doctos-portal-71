import React from "react";
import treatment from "../../assets/images/treatment.png";

const ServiceBanner = () => {
  return (
    <div class='hero min-h-screen bg-base-100 my-10'>
      <div class='hero-content flex-col lg:flex-row'>
        <div className='basis-4/12'>
          <img src={treatment} class='max-w-sm rounded-lg shadow-2xl' alt='' />
        </div>
        <div className='basis-5/12'>
          <h1 class='text-5xl font-bold'>
            Exceptional Dental Care, on Your Terms
          </h1>
          <p class='py-6'>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <button class='btn bg-gradient-to-r from-secondary to-primary text-white text-bold border-0'>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;
