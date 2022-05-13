import React from "react";
import clock from "../../assets/icons/clock.svg";
import maker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";

const info = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
      <InfoCard
        cartTitle='Opening hours'
        img={clock}
        bgClass='bg-gradient-to-r from-secondary to-primary'
      ></InfoCard>
      <InfoCard
        cartTitle='Visit our location'
        img={maker}
        bgClass='accent'
      ></InfoCard>
      <InfoCard
        cartTitle='Contact now'
        img={phone}
        bgClass='bg-gradient-to-r from-secondary to-primary'
      ></InfoCard>
    </div>
  );
};

export default info;
