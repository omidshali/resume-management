import React from "react";
import NavBar from "./NavBar";
import SearchBox from "./UI/SearchBox";

const Home = () => {
  return (
    <div className="w-full h-[100vh] relative ">
      <div className="w-full h-full ">
        <div className="absolute w-full h-full bg-gradient-to-l from-slate-900 " />
        <img
          className="w-full h-[100vh] object-cover "
          src={require("../img/01.jpg")}
          alt="pic"
        />
        <div className="absolute top-[30%] w-full">
          <h1 className="text-[48px] text-center text-gray-400">
            با رزومه یاب نیروی کار دلخواه خودت را پیدا کن
          </h1>
          <SearchBox />
          <div className="flex justify-center mt-10">
            <button className="px-[40px] py-[7px] bg-transparent border border-gray-300 text-gray-300 rounded-full hover:bg-gray-700 hover:text-white">
              شروع
            </button>
            <button className="ml-5 px-[40px] py-[7px] bg-transparent border border-gray-300 text-gray-300 rounded-full hover:bg-gray-700 hover:text-white">
              رزومه ها
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
