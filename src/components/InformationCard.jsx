import React from "react";

const InformationCard = () => {
  return (
    <div className="flex flex-col w-[250px] h-[400px] bg-[#27163a] m-[15px] text-[14px] rounded-[5px] text-white items-center">
      <div className="flex justify-between px-2 mt-3 w-[100%]">
        <h1 className="bg-yellow-400 py-[1px] px-[5px] rounded-sm text-black text-[10px]">pro</h1>
        <div className="flex bg-yellow-400 py-[1px] px-[2px] rounded-sm text-black text-[10px] items-center">
          <h1 className="">56</h1>
          <svg
            class="w-4 h-4 px-[1px]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center ">
        <img
          src={require("../img/02.webp")}
          alt="photo"
          className="rounded-full h-[100px] w-[100px]  border border-[#00c2cc] p-1 border-[2px] border-dashed"
        />
      </div>

      <div className="m-2  flex flex-col mt-5 items-center">
        <h1>میثم ضرغامی همراه</h1>
        <h1>همدان</h1>
        <h1>front-end devloper</h1>
      </div>

      <div className="flex">
        <button className="bg-transparent border border-white text-white py-1 px-2 rounded-md hover:bg-[#00c2cc] hover:border-[#00c2cc] hover:text-[#27163a]  ml-2">
          رزومه کامل
        </button>

        <button className=" bg-[#00c2cc] text-[#27163a]  py-1 px-2 rounded-md hover:bg-transparent hover:border hover:text-white  ml-2">
          دنبال کردن
        </button>
        
      </div>
      <div className="flex justify-between mt-2">
        <div className="mx-3">
          <h1>مهارت ها</h1>
          <div className="flex flex-row flex-wrap text-white text-[12px] my-2">
            <p className="bg-transparent border ml-1 px-[7px] py-[1px]  mt-2 rounded-md">
              fron-end
            </p>
            <p className="bg-transparent border ml-1 px-[7px] py-[1px]  mt-2 rounded-md">git</p>
            <p className="bg-transparent border ml-1 px-[7px] py-[1px]  mt-2 rounded-md">React</p>
            <p className="bg-transparent border ml-1 px-[7px] py-[1px]  mt-2 rounded-md">Html</p>
            <p className="bg-transparent border ml-1 px-[7px] py-[1px]  mt-2 rounded-md">Css</p>
            <p className="bg-transparent border ml-1 px-[7px] py-[1px]  mt-2 rounded-md">Java</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationCard;
