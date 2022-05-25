import React from "react";

const DoctorRow = ({ doctor, index, setDeleteConfiremDoctor }) => {
  const { name, specialty, img } = doctor;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div class='avatar'>
          <div class='w-24 rounded-xl'>
            <img src={img} alt='' />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{specialty}</td>
      <td>
        <label
          onClick={() => setDeleteConfiremDoctor(doctor)}
          for='doctor-delete-m'
          class='btn btn-xs btn-error'
        >
          Delete M
        </label>
      </td>
    </tr>
  );
};

export default DoctorRow;
