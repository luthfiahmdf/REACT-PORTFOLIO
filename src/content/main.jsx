import React from "react";
import image from "../assets/user.png";
import slash from "../assets/slash.png";
import { HiArrowSmallRight } from "react-icons/hi2";
import { BiCodeAlt } from "react-icons/bi";
function Main() {
  return (
    <div>
      <div className="layout h-screen bg-[#232323] justify-center  flex px-4 flex-col items-center">
        <div className="box  h-96 w-11/12 bg-[#F6755B] mt-36 flex justify-end  ">
          {" "}
          <div className="left text-8xl flex justify-end items-center flex-col">
            <BiCodeAlt className="text-[#232323]" />
            <h1
              className="text-[#232323]"
              style={{ fontFamily: "Inter", fontWeight: "700" }}
            >
              Create Your
            </h1>
          </div>
          <img src={image} className="w-96 mr-80 " alt="" />
        </div>
        <div className="content  flex flex-row gap-[30vw] top-56">
          <div
            style={{ fontFamily: "Inter", fontWeight: "700" }}
            className="text text-8xl w-9 p-4 flex items-center flex-col justify-center "
          >
            {" "}
            <h1 className="text-[#232323] text-8xl text-center ">
              <span className="text-white">Website Now</span>
            </h1>
            <button className="w-52 p-2 bg-[#f6755b] flex flex-row justify-center items-center space-x-6 rounded-lg">
              <h1
                style={{ fontFamily: "Inter", fontWeight: "700" }}
                className="text-[#232323] uppercase text-xl"
              >
                Let's Talk
              </h1>
              <HiArrowSmallRight className="text-2xl text-[#232323]" />
            </button>
          </div>
          <div className="imagetext flex flex-col items-center justify-end">
            <h1
              className="text-white w-[30vw] text-center "
              style={{ fontFamily: "Inter", fontWeight: "400" }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam,
              voluptatibus sequi odio provident odit iste! Sunt praesentium,
              omnis, commodi nemo tenetur perspiciatis perferendis unde ducimus
              cupiditate est, ipsam eos rerum sed ab assumenda. Odit dicta
              consequatur eum recusandae distinctio ducimus iste fuga a dolore
              ipsam repudiandae perspiciatis cumque optio ullam consectetur
              officiis dolor hic, beatae impedit deserunt repellendus.
              Dignissimos, aut nemo doloribus maxime corporis aliquid.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
