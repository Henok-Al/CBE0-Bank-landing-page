import React, { useState } from "react";
import { links } from "./MyLinks";
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import Link from "next/link";

const NavLinks = () => {
  const [activeHeading, setActiveHeading] = useState("");
  const [activeSubHeading, setActiveSubHeading] = useState("");

  return (
    <>
      {links.map((link, index) => (
        <div key={index}>
          <div className="px-3 text-left md:cursor-pointer group">
            <h1
              className="py-7 flex justify-between items-center md:pr-0 pr-5 group hover:text-yellow-900"
              onClick={() => {
                setActiveHeading(activeHeading !== link.name ? link.name : "");
                setActiveSubHeading("");
              }}
            >
              {link.name}
              <span className="text-xl md:hidden inline bg-blue-500">
                {activeHeading === link.name ? <BsChevronUp /> : <BsChevronDown />}
              </span>
              <span className="text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <BsChevronDown />
              </span>
            </h1>
            {link.submenu && activeHeading === link.name && (
              <div className="absolute top-20 hidden md:block">
                <div className="py-3">
                  <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45"></div>
                </div>
                <div className="p-5 grid grid-cols-3 gap-10 bg-black">
                  {link.sublinks.map((sublink, subIndex) => (
                    <div key={subIndex}>
                      <h1 className="text-lg font-semibold text-[#FBBF24]">
                        {sublink.Head}
                      </h1>
                      {sublink.sublink.map((slink, slinkIndex) => (
                        <li key={slink.name} className="text-sm text-gray-600 my-2.5">
                          <Link href={slink.link} className="hover:text-primary text-[#FBBF24]">
                            {slink.name}
                          </Link>
                        </li>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div className={`${activeHeading === link.name ? "md:hidden" : "hidden"}`}>
            {link.sublinks.map((sublink, subIndex) => (
              <div key={subIndex}>
                <div>
                  <h1
                    onClick={() =>
                      setActiveSubHeading(
                        activeSubHeading !== sublink.Head ? sublink.Head.toString() : ""
                      )
                    }
                    className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center md:pr-0 pr-5"
                  >
                    {sublink.Head}
                    <span className="text-xl md:mt-1 md:ml-2 inline">
                      {activeSubHeading === sublink.Head ? <BsChevronUp /> : <BsChevronDown />}
                    </span>
                  </h1>
                  <div className={`${activeSubHeading === sublink.Head ? "md:hidden" : "hidden"}`}>
                    {sublink.sublink.map((slink, slinkIndex) => (
                      <li className="py-3 pl-14" key={slinkIndex}>
                        <Link href={slink.link}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
