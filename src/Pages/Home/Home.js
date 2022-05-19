import React from "react";
import Footer from "../Shared/Footer";
import Bannar from "./Bannar";
import FeedBackInput from "./FeedBackInput";
import Info from "./Info";
import Services from "./Services";
import Testominals from "./Testominals";
import AppoinmentHome from "./AppoinmentHome";

const Home = () => {
  return (
    <div className=' px-3 lg:px-12'>
      <Bannar></Bannar>
      <Info></Info>
      <Services></Services>
      <AppoinmentHome></AppoinmentHome>
      <Testominals></Testominals>
      <FeedBackInput></FeedBackInput>
      <Footer></Footer>
    </div>
  );
};

export default Home;
