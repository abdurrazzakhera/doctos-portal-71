import { async } from "@firebase/util";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ appintment }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [proccesing, setProccesing] = useState(false);
  const [transectionId, setTransectionId] = useState("");
  //Payment method intents
  const [clientSecret, setClientSecret] = useState("");
  const { _id, price, patient, patientName } = appintment;
  useEffect(() => {
    fetch("https://secret-bastion-89260.herokuapp.com/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [price, setClientSecret]);
  // console.log(appintment);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    const { error, paymetMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    setCardError(error?.message || "");
    setSuccess("");
    setProccesing(true);
    //Confirm Card Payments
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: patientName,
            email: patient,
          },
        },
      });
    if (intentError) {
      setCardError(intentError.message);
      setProccesing(false);
    } else {
      setCardError("");
      setTransectionId(paymentIntent.id);
      console.log(paymentIntent);
      setSuccess("Your Payment is Completed");

      //Store data
      const payment = {
        appintment: _id,
        transectionId: paymentIntent.id,
      };
      //fetch data for database updated
      fetch(`https://secret-bastion-89260.herokuapp.com/booking/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          setProccesing(false);
          console.log(data);
        });
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className='btn btn-primary btn-xs mt-4'
          type='submit'
          disabled={!stripe || !clientSecret || success}
        >
          Pay
        </button>
      </form>
      {cardError && <p className='text-red-500'>{cardError}</p>}
      {success && (
        <div className='text-green-500'>
          <p>{success}</p>{" "}
          <p>
            Transection Id :
            <span className='text-orange-500 font-bold'>{transectionId}</span>
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
