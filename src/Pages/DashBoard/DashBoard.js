import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const DashBoard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className='drawer drawer-mobile'>
      <input id='dashboard-sidebar' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content flex flex-col  '>
        {/* <!-- Page content here --> */}
        <h1 className='text-5xl text-primary  font-bold '>DashBoard </h1>
        <Outlet />
      </div>
      <div className='drawer-side'>
        <label htmlFor='dashboard-sidebar' className='drawer-overlay'></label>
        <ul className='menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content'>
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to='/dashboard'>Dash Board</Link>
          </li>
          <li>
            <Link to='/dashboard/review'>MY Reviews</Link>
          </li>
          <li>
            <Link to='/dashboard/history'>MY History</Link>
          </li>
          {admin && (
            <>
              <li>
                <Link to='/dashboard/alluser'>All User</Link>
              </li>
              <li>
                <Link to='/dashboard/adddoctor'>Add Doctor</Link>
              </li>
              <li>
                <Link to='/dashboard/managedoctor'>Manage Doctor</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
