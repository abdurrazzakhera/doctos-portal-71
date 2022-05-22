import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  //img bb image storage key
  const imgStorageKey = "b1f022ee7105e8edda803c03f91eacfa";

  const { data: services, isLoading } = useQuery("services", () =>
    fetch("http://localhost:5000/service").then((res) => res.json())
  );

  const onSubmit = async (data) => {
    console.log(data);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            img: img,
          };
          console.log(doctor);
          //send tho database
          fetch("http://localhost:5000/doctor", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("doctor added successfully");
                reset();
              } else {
                toast.error("doctor added faild");
              }
            });
        }
        // console.log("img bb", result);
      });
  };
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1>This is Add Doctor Page</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-control w-full'>
          <label className='label'>
            <span className='label-text'>Your Name</span>
          </label>
          <input
            type='text'
            placeholder='Type Your Name'
            className='input input-bordered w-full max-w-xs'
            {...register("name", {
              required: {
                value: true,
                message: "Please Type Your Name",
              },
            })}
          />
          <label className='label'>
            {errors.name?.type === "required" && (
              <span className='label-text-alt text-red-600'>
                {errors?.name?.message}
              </span>
            )}
          </label>
        </div>
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Email</span>
          </label>
          <input
            type='email'
            placeholder='Type Your Email'
            className='input input-bordered w-full max-w-xs'
            {...register("email", {
              required: {
                value: true,
                message: "Please Enter Your Email",
              },
              pattern: {
                value: 6,
                message: "Provied a valid email", // JS only: <p>error message</p> TS only support string
              },
            })}
          />
          <label className='label'>
            {errors.email?.type === "required" && (
              <span className='label-text-alt text-red-600'>
                {errors?.email?.message}
              </span>
            )}
            {errors.email?.type === "pattern" && (
              <span className='label-text-alt text-red-600'>
                {errors?.email?.message}
              </span>
            )}
          </label>
        </div>
        <div className='form-control w-full max-w-xs mb-8'>
          <label className='label'>
            <span className='label-text'>Specility</span>
          </label>
          <select
            {...register("specialty")}
            className='select input-bordered w-full max-w-xs'
          >
            {services.map((service) => (
              <option key={service._id} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>
        </div>

        <div className='form-control w-full'>
          <label className='label'>
            <span className='label-text'>Doctor Image</span>
          </label>
          <input
            type='file'
            className='input input-bordered w-full max-w-xs'
            {...register("image", {
              required: {
                value: true,
                message: "Doctor Image is required",
              },
            })}
          />
          <label className='label'>
            {errors.name?.type === "required" && (
              <span className='label-text-alt text-red-600'>
                {errors?.name?.message}
              </span>
            )}
          </label>
        </div>

        {/* user from hookk */}

        <input
          className='btn input-bordered w-full max-w-xs '
          type='submit'
          value='ADD'
        />
      </form>
    </div>
  );
};

export default AddDoctor;
