import React from "react";
import port1 from "../assets/porto.png";
import port2 from "../assets/porto2.png";
import port3 from "../assets/porto3.png";
import port4 from "../assets/porto4.png";
function Portfolio() {
  return (
    <div>
      <div className="layout lg:min-h-full min-h-full bg-[#232323] px-4 lg:px-36 xl:px-36 pt-10 lg:pt-20 pb-8 lg:pb-9">
        <div className="header mb-7">
          <h1
            style={{ fontFamily: "Inter", fontWeight: "400" }}
            className="text-white text-left"
            id="portfolio"
          >
            RECENTS PROJECTS
          </h1>
        </div>

        <div className="image grid lg:grid-cols-2 grid-cols-1 gap-7 ">
          <div
            // onClick={() => {navigate("/Detail/" + data[3].id); window.scroll(0, 0);}}
            className="group w-full inline-block cursor-pointer relative rounded-lg overflow-hidden"
          >
            <img
              src={port1}
              alt="Korea"
              className="object-cover w-full lg:h-full h-60 rounded-lg"
            />
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center text-center duration-500 rounded-lg group-hover:translate-y-0 group-hover:bg-orange-600/75">
              <div className="flex justify-center items-end h-1/2">
                <div>
                  <a
                    href="https://e-terbangin.vercel.app/"
                    target="_blank"
                    className="text-white text-2xl"
                    style={{ fontFamily: "Inter", fontWeight: "600" }}
                  >
                    Booking Plane Website
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            // onClick={() => {navigate("/Detail/" + data[3].id); window.scroll(0, 0);}}
            className="group w-full inline-block cursor-pointer relative rounded-lg overflow-hidden"
          >
            <img
              src={port2}
              alt="Korea"
              className="object-cover w-full lg:h-full h-60 rounded-lg"
            />
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center text-center duration-500 rounded-lg group-hover:translate-y-0 group-hover:bg-orange-600/75">
              <div className="flex justify-center items-end h-1/2">
                <div>
                  <a
                    href="https://movie-ku-react-redux.vercel.app/"
                    target="_blank"
                    className="text-white text-2xl"
                    style={{ fontFamily: "Inter", fontWeight: "600" }}
                  >
                    Movieku Website
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            // onClick={() => {navigate("/Detail/" + data[3].id); window.scroll(0, 0);}}
            className="group w-full inline-block cursor-pointer relative rounded-lg overflow-hidden"
          >
            <img
              src={port3}
              alt="Korea"
              className="object-cover w-full lg:h-full h-60 rounded-lg"
            />
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center text-center duration-500 rounded-lg group-hover:translate-y-0 group-hover:bg-orange-600/75">
              <div className="flex justify-center items-end h-1/2">
                <div>
                  <a
                    href="https://reactmovies-redux.vercel.app/"
                    target="_blank"
                    className="text-white text-2xl"
                    style={{ fontFamily: "Inter", fontWeight: "600" }}
                  >
                    MovieList Website
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            // onClick={() => {navigate("/Detail/" + data[3].id); window.scroll(0, 0);}}
            className="group w-full inline-block cursor-pointer relative rounded-lg overflow-hidden"
          >
            <img
              src={port4}
              alt="Korea"
              className="object-cover w-full lg:h-full h-60 rounded-lg"
            />
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center text-center duration-500 rounded-lg group-hover:translate-y-0 group-hover:bg-orange-600/75">
              <div className="flex justify-center items-end h-1/2">
                <div>
                  <a
                    href="https://calc-luthfi.vercel.app/"
                    target="_blank"
                    className="text-white text-2xl"
                    style={{ fontFamily: "Inter", fontWeight: "600" }}
                  >
                    Clone Iphone Calculator
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
