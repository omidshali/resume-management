import React, { useState } from "react";
import ButtonNavbar from "./UI/ButtonNavbar";
import SvgButton from "./UI/SvgButton";

const NavBar = () => {
  const [visibleMenu, setVisibleMenu] = useState(false);
  return (
    <div className="fixed top-0 w-[100%]">
      <div className="relative">
        <div
          className={
            visibleMenu
              ? "bg-slate-700  w-[100%] h-[100vh] absolute text-[20px] text-center text-white px-8 py-10 flex flex-col justify-between md:hidden  "
              : "hidden"
          }
        >
          <ul className="flex flex-col justify-center">
            <li className="border-b  py-[6px] hover:bg-gray-400 hover:text-black hover:border-none my-2 ">
              خانه
            </li>

            <li className="border-b  py-[6px] hover:bg-gray-400 hover:text-black hover:border-none my-2 ">
              رزومه ها
            </li>
            <li className="border-b  py-[6px] hover:bg-gray-400 hover:text-black hover:border-none my-2 ">
              رزومه ساز
            </li>
            <li className="border-b  py-[6px] hover:bg-gray-400 hover:text-black hover:border-none my-2 ">
              جستجوی پیشرفته
            </li>
            <li className="border-b  py-[6px] hover:bg-gray-400 hover:text-black hover:border-none my-2 ">
              درباره ما
            </li>
            <li className="border-b  py-[6px] hover:bg-gray-400 hover:text-black hover:border-none my-2 ">
              درباره ما
            </li>
          </ul>
          <button className="border py-2 rounded-lg" onClick={() => setVisibleMenu(false)}>
            بستن
          </button>
        </div>

        <div
          className={
            !visibleMenu
              ? "md:hidden flex items-center justify-between p-2 bg-slate-700 text-white opacity-50 "
              : "hidden"
          }
        >
          <button
            onClick={() => setVisibleMenu(true)}
            className="border p-2 rounded-md border-white "
          >
            <SvgButton data="M4 6h16M4 12h16M4 18h16" />
          </button>
          <div className="flex items-center">
            <SvgButton data="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            <h1 className="text-[24px] mr-2">رزومه یاب</h1>
          </div>
        </div>

        <div className="md:flex md:justify-between md:py-2 bg-slate-700 md:px-10 items-center hidden opacity-50  ">
          <div className="flex text-white lg:text-[14px] items-center text-[10px]">
            <div className="flex items-center">
              <h1 className="mr-1">ورود</h1>
              <SvgButton
                size={5}
                data="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
              />
            </div>
            <div className="flex items-center border border-gray-400 px-[10px] py-[5px] rounded-lg mr-2 hover:bg-gray-400 hover:text-black">
              <h1 className="mr-1">ثبت نام</h1>
              <SvgButton
                size={5}
                data="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
              />
            </div>
          </div>
          <div className="flex">
            <ButtonNavbar title="خانه" />
            <ButtonNavbar title="رزومه ها" />
            <ButtonNavbar title="رزومه ساز" />
            <ButtonNavbar title="جستجوی پیشرفته" />
            <ButtonNavbar title="درباره ما" />
            <ButtonNavbar title="  راهنما" />
          </div>
          <div className="flex text-white items-center ">
            <SvgButton data="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            <h1 className="text-[22px] ml-2">رزومه یاب</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
