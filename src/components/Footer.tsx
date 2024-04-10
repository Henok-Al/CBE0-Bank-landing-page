import React from "react";
import Image from "next/image";

// Footer component
function Footer() {
  return (
    <footer className="relative text-black py-12">
      {/* Background image */}
      <Image
        src="/footer-svg.png"
        width={100}
        height={1000}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay content */}
      <div className="container mx-auto px-4 relative z-10 text-center mt-72">
        <div className="flex flex-wrap justify-center items-center   gap-20">
          {/* About Us */}
          <div className="w-full mt-14 md:w-1/4 lg:w-1/6 mb-6 md:mb-0 flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2 underline ">ABOUT US</h3>
            <ul>
              <li>
                <a href="#">CBE Profile</a>
              </li>
              <li>
                <a href="#">Board of Directors</a>
              </li>
              <li>
                <a href="#">Executive Management</a>
              </li>
              <li>
                <a href="#">Organizational Structure</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 lg:w-1/6 mb-6 md:mb-0 flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2 underline ">WORK WITH US</h3>

            <ul>
              <li>
                <a href="#">Vacancy</a>
              </li>
              <li>
                <a href="#">Tenders</a>
              </li>
              <li>
                <a href="#">POS </a>
              </li>
              <li>
                <a href="#">CBE Birr Agents.</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 lg:w-1/6 mb-6 md:mb-0 flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2 underline">CONTACT US</h3>

            <ul>
              <li>
                <a href="#">ATM Locator</a>
              </li>
              <li>
                <a href="#">contact us</a>
              </li>
              <li>
                <a href="#">Branch Network</a>
              </li>
              <li>
                <a href="#">Terms and Tariff</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 lg:w-1/6 mb-6 md:mb-0 flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2 underline"> SUPPORT</h3>
            <ul>
              <li>
                <a href="#">Call 951</a>
              </li>
              <li>
                <a href="#">Faq</a>
              </li>
              <li>
                <a href="#">Vulnerability Disclosure Standard Procedur</a>
              </li>
              <li>
                <a href="#">Privacy Polic</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Break lines, logos, social links, etc. */}

        {/* Copyright */}
        <p className="text-center text-sm tex-black pt-16">
          &copy; 2024 Comercial Bank of Ethiopia. All rights reserved.
        </p>
      </div>
      <hr className="w-48 h-1 mx-auto my-2 bg-[#ffffff] border-0 rounded md:my-10 dark:bg-gray-700" />
    </footer>
  );
}

export default Footer;
