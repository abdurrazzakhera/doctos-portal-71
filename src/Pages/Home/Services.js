import React from "react";
import fluride from "../../assets/images/fluoride.png";
import cabity from "../../assets/images/cavity.png";
import whiting from "../../assets/images/whitening.png";
import Service from "./Service";
import ServiceBanner from "./ServiceBanner";

const Services = () => {
  const servicesObj = [
    {
      _id: "1",
      name: "Fluoride Treatment",

      dec: "Fluoride is a natural mineral that builds strong teeth and prevents cavities. It's been an essential oral health treatment for decades.",
      img: fluride,
    },
    {
      _id: "2",
      name: "Cavity Filling",

      dec: "To treat a cavity your dentist will remove the decayed portion of the tooth and then fill the area on the tooth where the decayed material was removed.",
      img: cabity,
    },
    {
      _id: "3",
      name: "Teeth Whiteningt",

      dec: "With professional Teeth Whitening treatment, you can enjoy the boost in confidence of a bright, white smile. At LASER DENTAL, we trust the best Teeth ...",
      img: whiting,
    },
  ];
  return (
    <div className='py-6'>
      <div className='text-center'>
        <h1 className='text-secondary text-2xl '>Our Services</h1>
        <h2 className='text-4xl pt-4'>Servics We Provided</h2>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {servicesObj.map((service) => (
          <Service service={service}></Service>
        ))}
      </div>
      <div>
        <ServiceBanner></ServiceBanner>
      </div>
    </div>
  );
};

export default Services;
