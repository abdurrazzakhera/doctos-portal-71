import React, { useState } from "react";
import Footer from "../Shared/Footer";
import ApoinmentBannr from "./ApoinmentBannr";
import AvailAbilApoinments from "./AvailAbilApoinments";

const Apoinment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <ApoinmentBannr date={date} setDate={setDate}></ApoinmentBannr>
      <AvailAbilApoinments date={date}></AvailAbilApoinments>
      <Footer></Footer>
    </div>
  );
};

export default Apoinment;
