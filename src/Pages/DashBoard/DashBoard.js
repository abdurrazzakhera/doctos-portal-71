import React from "react";
import { Link, Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <div className='drawer drawer-mobile'>
      <input id='dashboard-sidebar' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content flex flex-col items-center '>
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
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
