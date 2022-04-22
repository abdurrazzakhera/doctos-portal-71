import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handelDelete = (id) => {
    // console.log("the id is", id);
    const procced = window.confirm("Are you sure delelte");
    if (procced) {
      const url = `http://localhost:5000/user/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            console.log("delete successfully");
            const remaing = users.filter((user) => user._id !== id);
            setUsers(remaing);
          }
        });
    }
  };
  return (
    <div>
      <h2>This is HOme : {users.length}</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            name:{user.name} :: Email :: {user.email}{" "}
            <Button
              onClick={() => handelDelete(user._id)}
              className='text-gray-500'
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
