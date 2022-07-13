import React from "react";
import NavBar from "./NavBar";
import SearchBox from "./UI/SearchBox";

const Home = () => {
  return (
    <div>
      <div className="w-full h-[100vh] bg-gradient-to-r from-[#E8CBC0] to-[#636FA4] z-20 ">
        <NavBar />
        <div className="mt-[15%] z-[10]">
          <h1 className="text-[48px] text-center font text-gray-600">
            با رزومه یاب نیروی کار دلخواه خودت را پیدا کن
          </h1>
          <SearchBox />
        </div>
        <div className="flex justify-center mt-10">
          <button className="px-[40px] py-[7px] bg-transparent border border-gray-700 text-gray-700 rounded-full hover:bg-gray-700 hover:text-white">
            شروع
          </button>
          <button className="ml-5 px-[40px] py-[7px] bg-transparent border border-gray-700 text-gray-700 rounded-full hover:bg-gray-700 hover:text-white">
            رزومه ها
          </button>
        </div>
        
      </div>
      {/* <div className="z-10">
          <img src={require("../img/01.jpg")} alt="pic" className="absolute  top-0 h-[100vh] w-[100%]" />
        </div> */}
    </div>
  );
};

export default Home;
