import React from "react";

const SearchBox = () => {
  return (
    <div className="mt-4 justify-center  flex">
      <input
        placeholder="مهارت مورد نظر خود را جستجو کنید"
        className="px-2 py-2 w-[50%] outline-none bg-transparent rounded-full border border-gray-100 flex flex-row-reverse placeholder:text-gray-300 placeholder:text-[14px] font-thin pr-5 text-gray-100 "
        type="text"
        name=""
        id=""
      />
    </div>
  );
};

export default SearchBox;
