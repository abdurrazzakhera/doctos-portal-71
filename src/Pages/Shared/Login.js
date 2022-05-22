import React, { useEffect } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import Loading from "./Loading";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [token] = useToken(user || gUser);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);

  //location replace

  let singInError;
  if (loading || gLoading) {
  }
  if (loading || gLoading) {
    return <Loading></Loading>;
  }

  if (error || gError) {
    singInError = (
      <p className='text-red-600 text-base pb-5 font-medium'>
        {error?.message || gError?.message}
      </p>
    );
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
    // navigate("/appoinment");
  };
  return (
    <div className='flex h-screen justify-center items-center'>
      <div className='card w-96 bg-base-100 shadow-xl'>
        <div className='card-body'>
          <h2 className=''>Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
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
                placeholder='Type Your Email'
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
              value='Log In'
            />
          </form>
          <p>
            New to Doctors Portal?{" "}
            <Link className='text-secondary' to='/signup'>
              Create new account
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

export default Login;
