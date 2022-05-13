import React from "react";
import doctor from "../../assets/images/doctor.png";

const Appoinment = () => {
  return (
    <div class="hero min-screen my-10 bg-[url('https://i.ibb.co/bLZtH6H/appointment.png')] rounded-lg ">
      <div class='hero-content  flex-col lg:flex-row'>
        <div className='basis-5/12 hidden lg:block'>
          <img
            src={doctor}
            class='h-fit rounded-lg  mt-[-110px] mb-[-16px]'
            alt=''
          />
        </div>
        <div className='basis-6/12 text-white'>
          <p className='text-secondary'>Appointment</p>
          <h1 class='text-5xl font-bold'>Make an appointment Today</h1>
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

export default Appoinment;
