import React from "react";

const InfoCard = ({ img, bgClass, cartTitle }) => {
  return (
    <div
      class={`card lg:card-side px-5 py-2 text-white   shadow-xl bg-accent ${bgClass}`}
    >
      <figure>
        <img src={img} alt='Album' />
      </figure>
      <div class='card-body'>
        <h2 class='card-title'>{cartTitle}</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
      </div>
    </div>
  );
};

export default InfoCard;
