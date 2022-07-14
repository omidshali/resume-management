import React from "react";

const InformationCard = () => {
  return (
    <div className="flex w-[400px] h-[210px] bg-slate-400  m-10 text-[14px] rounded-xl">
      <div className="flex flex-col justify-center items-center ">
        <img src={require("../img/02.webp")} alt="photo" className="rounded-full w-[100px] m-3" />
        <div>
          <h1>تاریخ ثبت رزومه </h1>
          <h1>1400/1/25</h1>
        </div>
      </div>

      <div className="m-2  flex flex-col mt-5 ">
        <div className="flex border py-1 px-2 bg-blue-500 text-white rounded-full">
          <h1>نام و نام خانوادگی :</h1>
          <h1>میثم ضرغامی همراه</h1>
        </div>
        <hr className="bg-black mt-2" />
        <div className="flex justify-between mt-2">
          <div>
            <h1>تخصص و مهارت ها</h1>
            <div className="flex flex-row flex-wrap text-white text-[12px] my-2">
              <p className="bg-gradient-to-r from-[#b35050] to-[#20dcaa] ml-1 px-[7px] py-[2px] rounded-full">
                React
              </p>
              <p className="bg-gradient-to-r from-[#b35050] to-[#20dcaa] ml-1 px-[7px] py-[2px] rounded-full">
                Html
              </p>
              <p className="bg-gradient-to-r from-[#b35050] to-[#20dcaa] ml-1 px-[7px] py-[2px] rounded-full">
                Java
              </p>
              <p className="bg-gradient-to-r from-[#b35050] to-[#20dcaa] ml-1 px-[7px] py-[2px] rounded-full">
                Css
              </p>
              <p className="bg-gradient-to-r from-[#b35050] to-[#20dcaa] ml-1 px-[7px] py-[2px] rounded-full">
                English
              </p>
           
            </div>

            <button className=" px-2 rounded-full bg-blue-500 text-white text-[12px]">
              بیشتر..
            </button>
          </div>
        </div>
        <hr className="bg-black mt-2" />
        <div className="flex justify-between mt-2">
          <button className="bg-blue-500  py-1 px-2 rounded-full hover:bg-orange-500 text-white  ml-2">
            رزومه کامل
          </button>
          <button className=" bg-blue-500  py-1 px-2 rounded-full hover:bg-orange-500 text-white  ml-2">
            تماس
          </button>
          <button className=" bg-blue-500  py-1 px-2 rounded-full hover:bg-orange-500 text-white  ml-2">
            پسندین
          </button>
        </div>
      </div>
    </div>
  );
};

export default InformationCard;
