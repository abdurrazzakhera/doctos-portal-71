import React from "react";
import feedback from "../../assets/images/appointment.png";

const FeedBackInput = () => {
  return (
    <div className="py-14 my-8 rounded-lg bg-[url('https://i.ibb.co/bLZtH6H/appointment.png')]">
      <div className='w-1/3 mx-auto my-5 text-center'>
        <h3 className='text-secondary text-2xl font-bold'>Contact Us</h3>
        <h1 className='text-4xl text-white'>Stay connected with us</h1>
        <form className='my-5'>
          <input
            type='text'
            placeholder='Email Address'
            class='input w-full max-w-lg mb-5'
          />
          <input
            type='text'
            placeholder='Subject'
            class='input w-full max-w-lg mb-5'
          />
          <textarea
            type='textarea'
            placeholder='Your Message'
            class='input h-24 w-full max-w-lg mb-5'
          ></textarea>
          <input
            type='submit'
            placeholder='Subject'
            class='input btn btn-secondary block mx-auto  mb-5 text-white text-xl px-7'
            value='submit'
          />
        </form>
      </div>
    </div>
  );
};

export default FeedBackInput;
