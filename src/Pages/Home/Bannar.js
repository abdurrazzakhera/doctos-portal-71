import React from "react";
import chair from "../../assets/images/chair.png";

const Bannar = () => {
  return (
    <div class="lg:container lg:mx-auto hero min-h-screen  bg-[url('https://i.ibb.co/3d3y83j/bg.png')] ">
      <div class='hero-content flex-col lg:flex-row-reverse gap-x-10'>
        <div className='basis-2/5 shrink-0 '>
          <img src={chair} class='max-w rounded-lg shadow-2xl' alt='' />
        </div>
        <div className='basis-3/5 p-10 '>
          <h1 class='text-5xl font-bold'>Your New Smile Starts Here</h1>
          <p class='py-6'>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button class='btn bg-gradient-to-r from-secondary to-primary text-white text-bold border-0'>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bannar;
