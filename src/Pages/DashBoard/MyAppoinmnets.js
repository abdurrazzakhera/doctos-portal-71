import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const MyAppoinmnets = () => {
  const [user, loading] = useAuthState(auth);

  const [appoinments, setAppoinments] = useState([]);
  const patient = user.email;
  let index = 1;
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/booking?patient=${patient}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        console.log("res", res);
        if (res.status === 401 || res.status === 403) {
          console.log("401 or 403");
          navigate("/");
          signOut(auth);
          localStorage.removeItem("accessToken");
        }
        return res.json();
      })
      .then((data) => setAppoinments(data));
  }, [patient, navigate]);
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
