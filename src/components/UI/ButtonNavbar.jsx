import React from "react";

const ButtonNavbar = ({ title }) => {
  return (
    <h1 className="text-[15px] mx-1 cursor-pointer hover:bg-slate-500 py-[5px] px-[7px] rounded-lg transition duration-200 ease-out text-white">
      {title}
    </h1>
  );
};

export default ButtonNavbar;
