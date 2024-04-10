import Image from "next/image";
import React from "react";
import { BsForward } from "react-icons/bs";

const services = [
  {
    image: "/serv1.png",
    title: "በሲቢኢ ብር ነዳጅ ይቅዱ",
    link: "/service1",
  },
  {
    image: "/serv2.png",
    title: "Mobile Banking",
    link: "/service2",
  },
  {
    image: "/serv3.png",
    title: "CBE Birr nedaj",
    link: "/service3",
  },
  {
    image: "/serv4.png",
    title: "CBE Birr",
    link: "/service4",
  },
  {
    image: "/serv5.png",
    title: "CBE Birr",
    link: "/service5",
  },
  // Add more service objects as needed
];

const ServiceSection = () => {
  return (
    <div>
      <h1 className="text-center mb-8 font-extrabold text-3xl">
        PRODUCTS & SERVICES
      </h1>
      <hr className="w-48 h-1 mx-auto my-2 bg-[#86198F] border-0 rounded md:my-10 dark:bg-gray-700" />
      <div className="flex flex-wrap justify-center mx-4">
        {services.map((service, index) => (
          <div
            className="flex flex-col items-center justify-center w-1/2 md:w-auto px-4 mb-8"
            key={index}
          >
            <div style={{ width: "100%", height: "100%" }}> 
              <Image
                src={service.image}
                alt={service.title}
                width={300}
                height={300}
              />
            </div>
            <h3 className="text-[#86198F] my-2 text-center">{service.title}</h3>
            <a href={service.link} className="text-[#86198F] flex items-center">
              Read More <BsForward className="ml-1" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
