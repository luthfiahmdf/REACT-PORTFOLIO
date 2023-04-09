import React from "react";
import { BiCodeAlt } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import slash from "../assets/slash.png";
import me from "../assets/120805508_2451636441809981_3038982850068068864_n.jpg";
function About() {
  return (
    <div>
      <div className="layout min-h-screen bg-[#0D0D0D] px-4 lg:px-36 xl:px-36 pt-10 lg:pt-20">
        <div className="about mb-7">
          <h1
            style={{ fontFamily: "Inter", fontWeight: "400" }}
            className="text-white text-left"
            id="about"
          >
            ABOUT ME
          </h1>
        </div>
        <div className="content flex flex-col lg:flex-row justify-between items-center">
          <div className="left w-[70%] lg:w-[40%] text-center lg:text-left lg:pb-5">
            <h1
              className="text-2xl lg:text-6xl text-white leading-normal mb-3 lg:mb-7"
              style={{ fontFamily: "Inter", fontWeight: "600" }}
            >
              Luthfi Ahmad Fauzi , Mahasiswa Semester 6 Universitas Islam
              Nusantara
            </h1>
            <h1
              className="text-white leading-relaxed"
              style={{ fontFamily: "Inter", fontWeight: "400" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              veritatis saepe neque voluptatem! Explicabo quis temporibus,
              consectetur iure, odit fugit numquam distinctio sint repellendus
              ab incidunt asperiores officia a inventore?
            </h1>
          </div>

          <div className="right w-full lg:w-[50%] flex justify-center mt-6 lg:mt-0">
            <img src={me} className="rounded-full lg:w-[70%] w-[50%]" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
