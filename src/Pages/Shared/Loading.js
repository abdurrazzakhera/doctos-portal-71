import React from "react";

const Loading = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <div
        style={{ bordeTopColor: "transparent" }}
        className='w-16 h-16 border-4 border-gray-400 border-dotted rounded-full animate-spin'
      ></div>
    </div>
    // <div className='h-screen flex justify-center items-center '>
    //   <button className='btn loading'>loading</button>
    // </div>
  );
};

export default Loading;
