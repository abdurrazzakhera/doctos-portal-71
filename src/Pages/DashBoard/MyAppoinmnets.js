import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const MyAppoinmnets = () => {
  const [user, loading, error] = useAuthState(auth);

  const [appoinments, setAppoinments] = useState([]);
  const patient = user.email;
  let index = 1;

  useEffect(() => {
    fetch(`http://localhost:5000/booking?patient=${patient}`)
      .then((res) => res.json())
      .then((data) => setAppoinments(data));
  }, [patient]);
  if (loading) {
    return <Loading></Loading>;
  }
  // if (user) {
  //   console.log(patient);
  // }
  return (
    <div>
      <h1>This si mY Appoinment : {appoinments.length}</h1>
      <div className='overflow-x-auto'>
        <table className='table table-zebra w-full'>
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Time Slot</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {/* <tr> */}
            {appoinments.map((appointment) => (
              <tr key={index}>
                <th>{index++}</th>
                <td>{appointment.patientName}</td>
                <td>{appointment.treatment}</td>
                <td>{appointment.date}</td>
                <td>{appointment.slottime}</td>
              </tr>
            ))}
            {/* <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td> */}
            {/* </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppoinmnets;
