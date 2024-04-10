import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTelegram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";

const TopBar = () => {
  return (
    <div className=" bg-black flex justify-end items-center space-x-4 px-4 h-[42px]">
      <div className="text-[#FBBF24] font-semibold">ATM Locator</div>
      <span className="text-[#FBBF24]">|</span>
      <div className="text-[#FBBF24] ">Call Center:</div>
      <span className="text-[#FBBF24]">+251951</span>
      <span className="text-[#FBBF24]">|</span>
      <div className="text-white font-semibold flex gap-2">
        <div>
          <FaTelegram size={20} />
        </div>
        <div>
          <FaFacebook size={20} />
        </div>
        <div className="flex gap-0">
          <FaFacebookF size={20} />
          <span className="font-thin">Afaan Oromo</span>
        </div>
        <div>
          <FaTwitter size={20} />
        </div>
        <div>
          <FaInstagram size={20} />
        </div>
        <div>
          <FaYoutube size={20} />
        </div>
        <div>
          <FaLinkedinIn size={20} />
        </div>
      </div>
      <span className="text-white">Cbe-Noor</span>
      <span className="text-[#FBBF24]">|</span>
      <select name="cat" id="cat" className=" text-[#FBBF24] px-3 py-1">
        <option value="general">
          En
        </option>
        <option value="general" >
          አማ
        </option>
      </select>
      <div>some text</div>
    </div>
  );
};

export default TopBar;
