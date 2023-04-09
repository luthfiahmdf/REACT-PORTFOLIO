import React from "react";
import me from "../assets/120805508_2451636441809981_3038982850068068864_n.jpg";
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";

function Contact() {
  return (
    <div>
      <div
        className="layout lg:min-h-[70vh] min-h-[50vh] bg-[#232323] px-4 lg:px-36 xl:px-36 pt-10 lg:pt-20 "
        id="contact"
      >
        <div className="header mb-7 flex justify-between">
          <h1
            style={{ fontFamily: "Inter", fontWeight: "400" }}
            className="#contact text-white text-left"
          >
            CONTACT
          </h1>
          <div className="follow">
            <h1
              style={{ fontFamily: "Inter", fontWeight: "400" }}
              className="text-white text-left"
            >
              FOLLOW ME ON
            </h1>
            <div className="media flex flex-row ">
              <a href="https://github.com/luthfiahmdf" target="_blank">
                {" "}
                <AiFillGithub className="text-white text-2xl lg:text-4xl" />
              </a>
              <a href=" https://www.instagram.com/luuuthfi_/" target="_blank">
                {" "}
                <AiOutlineInstagram className="text-white text-2xl lg:text-4xl" />
              </a>
            </div>
          </div>
        </div>

        <div className="say flex justify-center items-center flex-col mt-11">
          <h1
            style={{ fontFamily: "Inter", fontWeight: "400" }}
            className="text-white lg:text-5xl text-2xl lg:pt-7"
          >
            contact me here and say hi!
          </h1>
          <h1
            className="text-white lg:text-2xl text-md mt-2 lg:pt-2"
            style={{ fontFamily: "Inter", fontWeight: "400" }}
          >
            luthfiahmdf@gmail.com
          </h1>
          <img
            src={me}
            className="lg:w-[20%] w-[50%] rounded-full mt-2 lg:pt-2"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
