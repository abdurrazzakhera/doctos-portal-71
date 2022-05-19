import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import BookingModal from "./BookingModal";
import Service from "./Service";

const AvailAbilApoinments = ({ date }) => {
  // const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);
  console.log(date);
  const fomatedDate = date && format(date, "PP");

  //React use Query use
  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery(["avaiableService", fomatedDate], () =>
    fetch(`http://localhost:5000/avaiableService?date=${fomatedDate}`).then(
      (res) => res.json()
    )
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  // useEffect(() => {
  // fetch(`http://localhost:5000/avaiableService?date=${fomatedDate}`)
  //   .then((res) => res.json())
  //     .then((data) => setServices(data));
  // }, [fomatedDate]);
  return (
    <div className='px-12 bg-base-100'>
      <div className='text-center'>
        <h2 className='text-primary text-3xl'>
          Your Selected Data : {fomatedDate}
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-8'>
          {services?.map((service) => (
            <Service
              key={service._id}
              service={service}
              setTreatment={setTreatment}
            ></Service>
          ))}
          {treatment && (
            <BookingModal
              treatment={treatment}
              date={date}
              setTreatment={setTreatment}
              refetch={refetch}
            ></BookingModal>
          )}
        </div>
      </div>
    </div>
  );
};

export default AvailAbilApoinments;
