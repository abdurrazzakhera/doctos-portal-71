import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L31csBwzElALFby2o8URPuv74hTfXK8lesHMBgHyMROrRHBGJAmJUT2QXPJvk6Coc1oZIiObEsNGYKuWMdvCknV0072iqkylE"
);
const Payment = () => {
  const { id } = useParams();
  const url = `https://secret-bastion-89260.herokuapp.com/booking/${id}`;
  const { data: appintment, isLoading } = useQuery(["booking", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div class='card w-50 max-w-md bg-base-200 shadow-xl '>
        <div class='card-body '>
          <p className='text-lg font-bold text-blue-500'>
            Hello {appintment.patientName}
          </p>
          <h2 class='card-title'>Pay for : {appintment.treatment}</h2>
          <p>
            Your Appointment{" "}
            <span className='text-green-600 text-lg'>{appintment.date}</span>{" "}
            and time {appintment.slottime}
          </p>
          <p>Pay For : {appintment.price}</p>
        </div>
      </div>
      <div class='card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-200 my-10'>
        <div class='card-body'>
          <Elements stripe={stripePromise}>
            <CheckoutForm appintment={appintment} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
