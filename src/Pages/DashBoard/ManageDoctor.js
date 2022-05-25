import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import DoctorDeleteModal from "./DoctorDeleteModal";
import DoctorRow from "./DoctorRow";

const ManageDoctor = () => {
  const [deleteConfirmDoctor, setDeleteConfiremDoctor] = useState(null);
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery("doctors", () =>
    fetch("https://secret-bastion-89260.herokuapp.com/doctor", {
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
      <h className='text-3xl'>This Is Manage Doctor : {doctors.length}</h>
      <div class='overflow-x-auto'>
        <table class='table w-full'>
          <thead>
            <tr>
              <th></th>
              <th>Avater</th>
              <th>Name</th>
              <th>Specility</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, index) => (
              <DoctorRow
                key={doctor._id}
                doctor={doctor}
                index={index}
                setDeleteConfiremDoctor={setDeleteConfiremDoctor}
              ></DoctorRow>
            ))}
          </tbody>
        </table>
        {deleteConfirmDoctor && (
          <DoctorDeleteModal
            deleteConfirmDoctor={deleteConfirmDoctor}
            setDeleteConfiremDoctor={setDeleteConfiremDoctor}
            refetch={refetch}
          ></DoctorDeleteModal>
        )}
      </div>
    </div>
  );
};

export default ManageDoctor;
