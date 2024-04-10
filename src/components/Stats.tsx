import React from "react";
import { BsBank, BsForward, BsPeople } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";

const services = [
  {
    icon: <BsBank size={40} />,
    title: "1950",
    desc: "Branches",
  },
  {
    icon: <BsPeople size={40} />,
    title: "+38.9M",
    desc: "Customers",
  },
  {
    icon: <FaHandshake size={40} />,
    title: "+24000",
    desc: "Partners",
  },
  {
    icon: <GrTransaction size={40} />,
    title: "+2.5 M per day",
    desc: "Transactions per Month",
  },
];

const Stats = () => {
  return (
    <div className=" mt-44">
      <h1 className="text-center mb-8 font-extrabold text-3xl">OUR STATUS</h1>
      
      <hr className="w-48 h-1 mx-auto my-2 bg-[#86198F] border-0 rounded md:my-10 dark:bg-gray-700" />

      <div className="flex flex-wrap justify-center mx-4 gap-12  ">
        {services.map((service, index) => (
          <div
            className="flex flex-col w-64 h-36 space-y-2 items-center justify-center  rounded-xl border-4"
            key={index}
          >
            <div className="text-[#86198F]">{service.icon}</div>
            <h3>{service.title}</h3>
            <a href={service.desc} className="">
              {service.desc}
            </a>
          </div>
        ))}
      </div>{" "}
    </div>
  );
};

export default Stats;
