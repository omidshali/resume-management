import React from "react";

const SvgButton = ({ data, size }) => {
  
  return (
    <div>
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={data}></path>
      </svg>
    </div>
  );
};

export default SvgButton;
