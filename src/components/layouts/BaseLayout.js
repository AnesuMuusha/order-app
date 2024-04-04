import React from "react";
import { Outlet } from "react-router-dom";
import image from "../../images/image.jpg";

const BaseLayout = () => {
  return (
    <div className=" flex flex-col justify-center items-center">
      <div>
        <img src={image} alt="logo" className="rounded-lg w-40 h-40 " />
      </div>
    <hr className="w-full"/>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default BaseLayout;
