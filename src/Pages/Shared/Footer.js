import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const date = new Date();
  return (
    <div className='px-12'>
      <div className='lg:flex   justify-between lg:px-16 pb-16'>
        <div className='mx-auto'>
          <h3 className=' uppercase mb-2 font-bold text-gray-500'>Services</h3>
          <ul>
            <li>Emergency Checkup</li>
            <li>Monthly Checkup</li>
            <li>Weekly Checkup</li>
            <li>Deep Checkup</li>
          </ul>
        </div>
        <div>
          <h3 className=' uppercase mb-2 font-bold text-gray-500'>
            Our Health
          </h3>
          <ul>
            <li>Fluoride Treatment</li>
            <li>Cavity Filling</li>
            <li>Teath Whitening</li>
          </ul>
        </div>
        <div>
          <h3 className=' uppercase mb-2 font-bold text-gray-500'>
            Our Address
          </h3>
          <p>New York - 101010 Hudson</p>
        </div>
      </div>
      <div className='pb-12 text-center'>
        <p>
          Copyright{" "}
          <span>{<FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon>}</span>{" "}
          {date.getFullYear()} All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
