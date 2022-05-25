import React from "react";
import { toast } from "react-toastify";

const DoctorDeleteModal = ({
  deleteConfirmDoctor,
  setDeleteConfiremDoctor,
  refetch,
}) => {
  const { email, name } = deleteConfirmDoctor;
  const deleteDoctor = (email) => {
    fetch(`https://secret-bastion-89260.herokuapp.com/doctor/${email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("delete", data);
        if (data.deletedCount) {
          toast.success(`doctor:${name} delete successful`);
          setDeleteConfiremDoctor(null);
          refetch();
        }
      });
  };
  return (
    <div>
      <input type='checkbox' id='doctor-delete-m' class='modal-toggle' />
      <div class='modal'>
        <div class='modal-box w-6/12 max-w-5xl'>
          <h3 class='font-bold text-lg text-red-500'>
            Are You Sure Want to delete doctor : ${name}
          </h3>
          <p class='py-4'>
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div class='modal-action'>
            <button
              onClick={() => deleteDoctor(email)}
              class='btn btn-xs btn-error'
            >
              Delete Doctor
            </button>
            <label for='doctor-delete-m' class='btn'>
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDeleteModal;
