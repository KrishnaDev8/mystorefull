"use client";
import React from "react";
import Image from "next/image";
import CartIcon from "./assets/CartIcon.svg";
import Search from "./Search";
import { useRouter } from "next/navigation";
function Navbar() {
  const router = useRouter();
  return (
    <div className=" h-24 px-40 flex items-center border-b shadow-lg ">
      <div className="container mx-auto flex justify-between items-center">
        <h1
          onClick={() => router.push("/")}
          className=" text-primary-red font-extrabold text-4xl cursor-pointer"
        >
          Dfoods
        </h1>
        <div>
          <Search />
        </div>
        <div className=" flex flex-col items-center">
          <Image
            src={CartIcon}
            height={24}
            width={24}
            alt="Follow us on Twitter"
          />
          <span className=" text-xs text-primary-red">Basket</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
