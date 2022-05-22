import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, refetch }) => {
  const { email, role } = user;
  let index = 1;
  const makeAdmin = () => {
    console.log(email);
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("forbbiden");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          console.log(data);
          toast.success("Successfully Added Admin");
          refetch();
        }
      });
  };
  return (
    <tr>
      <th>{index++}</th>
      <td>Samiul</td>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button onClick={makeAdmin} className='btn btn-active btn-ghost'>
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button className='btn btn-active btn-ghost'>Remove</button>
      </td>
    </tr>
  );
};

export default UserRow;
