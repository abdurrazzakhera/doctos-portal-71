import React from "react";

const Service = ({ service }) => {
  return (
    <div>
      <div class='card card-compact w-96 bg-base-200 shadow-xl text-center py-5 mt-10'>
        <figure>
          <img src={service.img} alt='Shoes' />
        </figure>
        <div class='card-body'>
          <h2 class='card-title w-auto mx-auto'>{service.name}</h2>
          <p>{service.dec}</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
