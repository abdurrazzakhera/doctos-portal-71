import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddUser = () => {
  const handelAddUser = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const user = { name, email };

    //fetch post data to server
    fetch("http://localhost:5000/user", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        event.target.reset();
      });
  };
  return (
    <div
      style={{ height: "75vh" }}
      className='w-full max-w-xs  mx-auto bg-slate-400'
    >
      <h2>Please Add a User</h2>
      <form
        onSubmit={handelAddUser}
        className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
      >
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor=''
          >
            Enter Your Name
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            type='text'
            name='name'
            id=''
            placeholder='Enter your name'
            required
          />
        </div>
        <div>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor=''
          >
            Enter Your Name
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            type='email'
            name='email'
            id=''
            placeholder='Enter your Email'
            required
          />
        </div>
        <div>
          <input
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-3'
            type='submit'
            value='Add User'
          />
        </div>
      </form>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AddUser;
