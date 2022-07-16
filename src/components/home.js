import React from "react";
import { NavLink } from "react-router-dom";
import SearchBox from "./UI/SearchBox";

const Home = () => {
  return (
    <div className="w-full h-[100vh] relative ">
      <div className="w-full h-full ">
        <div className="absolute w-full h-full bg-gradient-to-bl from-slate-900 " />
        <img className="w-full h-[100vh] object-cover " src={require("../img/01.jpg")} alt="pic" />
        <div className="absolute top-[30%] w-full">
          <h1 className="text-[36px] text-center text-gray-400">
            با رزومه یاب نیروی کار دلخواه خودت را پیدا کن
          </h1>
          <SearchBox />
          <div className="flex justify-center mt-10 flex-col">
            <h1 className="text-[26px] text-center text-gray-400">
              با رزومه ساز خودترو به دیگران معرفی کن
            </h1>
            <div className="flex justify-center mt-5">
              <button className="ml-3 px-[40px] py-[7px] bg-transparent border border-gray-300 text-gray-300 rounded-full hover:bg-gray-700 hover:text-white">
                شروع
              </button>
              <button className="ml-5 px-[40px] py-[7px] bg-transparent border border-gray-300 text-gray-300 rounded-full hover:bg-gray-700 hover:text-white">
                <NavLink to="resumes">رزومه ها</NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
