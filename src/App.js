import "./App.css";
import { useEffect, useState } from "react";
import UsetTable from "./Components/UsetTable/UsetTable";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  // post user into local server
  const handelUserAdd = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const user = { name, email };

    fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        const newUser = [...users, user];
        setUsers(newUser);
      });
  };

  return (
    <div className='App'>
      <h1>Hello This is my react node practis: {users.length}</h1>
      <div>
        <form onSubmit={handelUserAdd}>
          <input
            type='text'
            name='name'
            placeholder='Enter your name'
            required
          />
          <input
            type='email'
            name='email'
            placeholder='Enter your email'
            required
          />
          <input type='submit' value='Add User' />
        </form>
      </div>
      <table className='border-2 border-purple-50 mx-auto mt-6 p-5'>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
        {users.map((user) => (
          <UsetTable key={user.id} user={user}></UsetTable>
        ))}
      </table>
    </div>
  );
}

export default App;
