import React from "react";

const UsetTable = ({ user }) => {
  const { id, name, email, phone } = user;
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
    </tr>
  );
};

export default UsetTable;
