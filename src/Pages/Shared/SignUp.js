import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import Loading from "./Loading";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, pUpdating, pError] = useUpdateProfile(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  let singInError;
  if (loading || gLoading || pUpdating) {
  }
  if (loading || gLoading) {
    return <Loading></Loading>;
  }
  if (error || gError || pError) {
    singInError = (
      <p className='text-red-600 text-base pb-5 font-medium'>
        {error?.message || gError?.message || pError.message}
      </p>
    );
  }
  if (user || gUser) {
    console.log(user || gUser);
  }
  const onSubmit = async (data) => {
    // console.log(data);
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    console.log("uppdatting user");
    navigate("/appoinment");
  };
  return (
    <div className='flex h-screen justify-center items-center'>
      <div className='card w-96 bg-base-100 shadow-xl'>
        <div className='card-body'>
          <h2 className=''>Sing Up</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-control w-full max-w-xs'>
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
            <div className='form-control w-full max-w-xs'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <input
                type='password'
                placeholder='Type Your Password'
                className='input input-bordered w-full max-w-xs'
                {...register("password", {
                  required: {
                    value: true,
                    message: "Please Type Your Passeword",
                  },
                  minLength: {
                    value:
                      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                    message:
                      "Must be letter, number , sepecial caracter and at least 8 letter ", // JS only: <p>error message</p> TS only support string
                  },
                })}
              />
              <label className='label'>
                {errors.password?.type === "required" && (
                  <span className='label-text-alt text-red-600'>
                    {errors?.password?.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className='label-text-alt text-red-600'>
                    {errors?.password?.message}
                  </span>
                )}
              </label>
            </div>

            {/* user from hookk */}
            {singInError}

            <input
              className='btn input-bordered w-full max-w-xs '
              type='submit'
              value='Sing Up'
            />
          </form>
          <p>
            Allready in Doctors Portal?{" "}
            <Link className='text-secondary' to='/login'>
              Log In
            </Link>
          </p>
          <div className='divider'>OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className='btn btn-outline'
          >
            Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
