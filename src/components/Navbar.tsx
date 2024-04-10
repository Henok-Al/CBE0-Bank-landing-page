"use client"

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing Font Awesome icons
import Link from "next/link";
import NavLinks from "./NavLinks";
import Image from "next/image";
import TopBar from "./TopBar"

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>   
    <TopBar />
     <nav className=" fixed top-0 left-0 z-50 w-full bg-white shadow-md">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <Image src="/logo.jpg" alt="logo" width={40} height={40} className="md:cursor-pointer" />
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            {open ? <FaTimes /> : <FaBars />} {/* Using Font Awesome icons */}
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <li>
            <Link href="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
        </ul>
        <div className="md:block hidden">
  <button className="bg-primary text-[#FBBF24] bg-black px-6 py-2 rounded-lg text-lg md:text-xl">
    Internet Banking
  </button>
</div>

        {/* Mobile nav */}
        <ul
          className={`
            md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4 hover:bg-[#FBBF24]
            duration-500 ${open ? "left-0" : "left-[-100%]"}
          `}
        >
          <li>
            <Link href="/" className="py-7 px-3 inline-block">
              Home
            </Link>
            <Link href="/" className="py-7 px-3 inline-block">
              Vacacy
            </Link>
          </li>
          <NavLinks />
          
        </ul>
      </div>
    </nav>
    </>

  );
};

export default Navbar;
