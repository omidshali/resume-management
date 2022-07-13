import React from "react";

const SearchBox = () => {
  return (
    <div className="mt-4 justify-center  flex">
      <input
        placeholder="مهارت مورد نظر خود را جستجو کنید"
        className="py-2 w-[60%] outline-none bg-transparent rounded-full border border-gray-800 flex flex-row-reverse placeholder:text-gray-500 pl-[680px]"
        type="text"
        name=""
        id=""
      />
    </div>
  );
};

export default SearchBox;
