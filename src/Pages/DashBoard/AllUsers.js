import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import UserRow from "./UserRow";

const AllUsers = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("http://localhost:5000/users", {
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
      <h1>The All User Is here : {users.length}</h1>
      <table className='table table-zebra w-full'>
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>email</th>
            <th>Admin</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserRow key={user._id} user={user} refetch={refetch}></UserRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
