import React from "react";
import Image from "next/image";
import SearchIcon from "./assets/SearchIcon.svg";
function Search() {
  return (
    <div className="border border-black w-96 h-10 rounded-lg relative shadow-md shadow-primary-red ">
      <input
        className="w-full h-full rounded-lg px-5 outline-none "
        type="text"
        placeholder="Search products"
      />
      <Image
        className="absolute  right-2.5 bottom-0 top-2.5 "
        src={SearchIcon}
        height={18}
        width={18}
        alt="Search icon magnifying lens "
      />
    </div>
  );
}

export default Search;
