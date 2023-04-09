import React from "react";
import Logo from "../assets/logo.png";
import { GoThreeBars } from "react-icons/go";
import { BsChevronContract } from "react-icons/bs";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="fixed top-0 w-screen flex flex-wrap items-center justify-between px-2 py-3 bg-[#232323] drop-shadow-lg z-10">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <img src={Logo} className="h-8" alt="" />
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? (
                <BsChevronContract className="text-[#FFFFFF]" />
              ) : (
                <GoThreeBars className="text-[#FFFFFF]" />
              )}
              {/* <GoThreeBars /> */}
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-5 py-2 flex items-center   font-bold leading-snug text-[#FFFFFF] hover:opacity-75"
                  href="#home"
                >
                  <i className="fab fa-facebook-square text-[20px] leading-lg text-[#FFFFFF] opacity-75"></i>
                  <span
                    style={{ fontFamily: "Inter", fontWeight: "600" }}
                    className="ml-2"
                  >
                    Home
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  style={{ fontFamily: "Inter", fontWeight: "600" }}
                  className="px-5 py-2 flex items-center   font-bold leading-snug text-[#FFFFFF] hover:opacity-75"
                  href="#about"
                >
                  <i className="fab fa-twitter text-[20px] leading-lg text-[#FFFFFF] opacity-75"></i>
                  <span
                    style={{ fontFamily: "Inter", fontWeight: "600" }}
                    className="ml-2"
                  >
                    About
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-5 py-2 flex items-center   font-bold leading-snug text-[#FFFFFF] hover:opacity-75"
                  href="#portfolio"
                >
                  <i className="fab fa-pinterest text-[20px] leading-lg text-[#FFFFFF] opacity-75"></i>
                  <span
                    style={{ fontFamily: "Inter", fontWeight: "600" }}
                    className="ml-2"
                  >
                    Portfolio
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-5 py-2 flex items-center   font-bold leading-snug text-[#FFFFFF] hover:opacity-75"
                  href="#testi"
                >
                  <i className="fab fa-pinterest text-[20px] leading-lg text-[#FFFFFF] opacity-75"></i>
                  <span
                    style={{ fontFamily: "Inter", fontWeight: "600" }}
                    className="ml-2"
                  >
                    Testimonial
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
