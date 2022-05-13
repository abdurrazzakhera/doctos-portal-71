import React from "react";
import Appoinment from "./Appoinment";
import Bannar from "./Bannar";
import FeedBackInput from "./FeedBackInput";
import Info from "./Info";
import Services from "./Services";
import Testominals from "./Testominals";

const Home = () => {
  return (
    <div className='px-12'>
      <Bannar></Bannar>
      <Info></Info>
      <Services></Services>
      <Appoinment></Appoinment>
      <Testominals></Testominals>
      <FeedBackInput></FeedBackInput>
    </div>
  );
};

export default Home;
