import React from "react";
import image from "../assets/logo512.png";

import { HiArrowSmallRight } from "react-icons/hi2";
import { BiCodeAlt } from "react-icons/bi";

function Main() {
  return (
    <div
      className="min-h-[80vh] lg:min-h-screen bg-[#232323] flex flex-col items-center"
      id="home"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="mt-11"
      >
        <path
          fill="#F6755B"
          fill-opacity="1"
          d="M0,32L24,64C48,96,96,160,144,176C192,192,240,160,288,133.3C336,107,384,85,432,85.3C480,85,528,107,576,144C624,181,672,235,720,234.7C768,235,816,181,864,138.7C912,96,960,64,1008,42.7C1056,21,1104,11,1152,32C1200,53,1248,107,1296,133.3C1344,160,1392,160,1416,160L1440,160L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
        ></path>
      </svg>

      <div className="mt-16 lg:mt-28 w-full lg:w-11/12 flex flex-col lg:flex-row items-center justify-between lg:justify-around ">
        <div className="text-center lg:text-left mb-10 lg:mb-0 w-full lg:w-2/5">
          <h1 className="text-white text-4xl lg:text-8xl font-bold mb-8">
            Create Your <span className="text-[#F6755B]">Website Now</span>
          </h1>
          <a href="#contact">
            <button className="bg-[#F6755B] hover:bg-red-600 text-[#232323] font-bold py-2 px-4 rounded-lg inline-flex items-center space-x-2">
              {" "}
              <span className="uppercase">Let's Talk</span>
              <HiArrowSmallRight className="text-2xl" />
            </button>
          </a>
        </div>

        <div className="flex flex-col items-center lg:items-start w-full lg:w-2/5 mb-6 p-4">
          <BiCodeAlt className="text-[#F6755B] text-8xl mb-8 lg:mb-0" />

          <h1
            style={{ fontFamily: "Inter", fontWeight: "400" }}
            className="text-white text-base lg:text-xl font-normal text-center lg:text-left"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo unde
            facere, sint nostrum ipsam minus aliquid dolore quisquam dolorum
            repellat.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Main;
