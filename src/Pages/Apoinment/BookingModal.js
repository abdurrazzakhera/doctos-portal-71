import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
  const { _id, name, slots, price } = treatment;
  const [user, loading] = useAuthState(auth);
  const fomatedDate = format(date, "PP");
  const handelAppoinmtn = (event) => {
    event.preventDefault();
    const slottime = event.target.slot.value;
    const date = event.target.date.value;

    console.log(_id, name, date, slottime);

    //booking information object
    const booking = {
      treatmentId: _id,
      treatment: name,
      date: fomatedDate,
      slottime,
      price,
      patient: user.email,
      patientName: user.displayName,
      phone: event.target.phone.value,
    };
    console.log(booking);

    // fetch data send in backend
    fetch("https://secret-bastion-89260.herokuapp.com/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Success", booking);
        if (data.success) {
          toast(`Appoinment is successful at ${fomatedDate} and ${slottime} `);
        } else {
          toast.error(
            `You have already and appoinment ${data.booking?.date} and ${data.booking?.slottime}`
          );
        }
        refetch();
        setTreatment(null);
      });
  };
  return (
    <div>
      <input type='checkbox' id='booking-Modal' className='modal-toggle' />
      <div className='modal modal-bottom sm:modal-middle'>
        <div className='modal-box'>
          <label
            htmlFor='booking-Modal'
            className='btn bg-gradient-to-r from-secondary to-primary text-white btn-sm btn-circle absolute right-2 top-2 border-0'
          >
            ✕
          </label>
          <h3 className='font-bold text-2xl text-secondary mb-4'>{name}</h3>
          <form
            onSubmit={handelAppoinmtn}
            className='grid grid-cols-1 gap-y-5 justify-items-center'
          >
            <input
              type='text'
              name='date'
              readOnly
              value={format(date, "PP")}
              className='input input-bordered w-full max-w-xs'
            />
            <input
              type='text'
              name='date'
              readOnly
              value={price}
              className='input input-bordered w-full max-w-xs'
            />
            <select
              name='slot'
              className='select select-bordered w-full max-w-xs'
            >
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type='text'
              placeholder='Type here'
              disabled
              value={user?.displayName}
              className='input input-bordered w-full max-w-xs'
            />
            <input
              type='text'
              disabled
              value={user?.email}
              className='input input-bordered w-full max-w-xs'
            />
            <input
              type='number'
              name='phone'
              placeholder='Type Your Phone Number'
              className='input input-bordered w-full max-w-xs'
            />
            <input
              type='submit'
              placeholder='Type here'
              className='btn bg-gradient-to-r from-secondary to-primary text-white uppercase border-none w-full max-w-xs'
            />
          </form>
          {/* <div className='modal-action'>
            <label htmlFor='booking-Modal' className='btn'>
              Yay!
            </label>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
