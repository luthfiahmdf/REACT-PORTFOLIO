import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import user from "../assets/user.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export default function Testimonial() {
  return (
    <>
      <div
        id="testi"
        className="layout lg:min-h-[40vh]  bg-[#0D0D0D] px-4 lg:px-36 xl:px-36 pt-10 lg:pt-20 pb-7 
        "
      >
        <div className="header mb-7">
          <h1
            style={{ fontFamily: "Inter", fontWeight: "400" }}
            className="text-white text-left"
          >
            TESTIMONIAL
          </h1>
        </div>
        <Swiper
          slidesPerView={1.3}
          style={{
            "--swiper-navigation-color": "rgb(250 202 21)",
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1080: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination]}
          className="mySwiper  mx-9 lg:pt-9"
        >
          <SwiperSlide className="">
            <div className="content w-full bg-[#232323] h-full rounded-xl flex justify-center flex-col">
              <div className="profile flex flex-row justify-start items-center px-3 py-3">
                <img src={user} className="w-12 rounded-full mr-4" alt="" />
                <h1
                  className="text-white"
                  style={{ fontFamily: "Inter", fontWeight: "400" }}
                >
                  John Doe
                </h1>
              </div>
              <div className="testi text-white text-justify p-4">
                <h1 style={{ fontFamily: "Inter", fontWeight: "400" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  reiciendis accusamus excepturi molestias est nostrum illum!
                  Aperiam perferendis accusantium maiores.
                </h1>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="">
            <div className="content w-full bg-[#232323] h-full rounded-xl flex justify-center flex-col">
              <div className="profile flex flex-row justify-start items-center px-3 py-3">
                <img src={user} className="w-12 rounded-full mr-4" alt="" />
                <h1
                  className="text-white"
                  style={{ fontFamily: "Inter", fontWeight: "400" }}
                >
                  John Doe
                </h1>
              </div>
              <div className="testi text-white text-justify p-4">
                <h1 style={{ fontFamily: "Inter", fontWeight: "400" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  reiciendis accusamus excepturi molestias est nostrum illum!
                  Aperiam perferendis accusantium maiores.
                </h1>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="">
            <div className="content w-full bg-[#232323] h-full rounded-xl flex justify-center flex-col">
              <div className="profile flex flex-row justify-start items-center px-3 py-3">
                <img src={user} className="w-12 rounded-full mr-4" alt="" />
                <h1
                  className="text-white"
                  style={{ fontFamily: "Inter", fontWeight: "400" }}
                >
                  John Doe
                </h1>
              </div>
              <div className="testi text-white text-justify p-4">
                <h1 style={{ fontFamily: "Inter", fontWeight: "400" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  reiciendis accusamus excepturi molestias est nostrum illum!
                  Aperiam perferendis accusantium maiores.
                </h1>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="">
            <div className="content w-full bg-[#232323] h-full rounded-xl flex justify-center flex-col">
              <div className="profile flex flex-row justify-start items-center px-3 py-3">
                <img src={user} className="w-12 rounded-full mr-4" alt="" />
                <h1
                  className="text-white"
                  style={{ fontFamily: "Inter", fontWeight: "400" }}
                >
                  John Doe
                </h1>
              </div>
              <div className="testi text-white text-justify p-4">
                <h1 style={{ fontFamily: "Inter", fontWeight: "400" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  reiciendis accusamus excepturi molestias est nostrum illum!
                  Aperiam perferendis accusantium maiores.
                </h1>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="">
            <div className="content w-full bg-[#232323] h-full rounded-xl flex justify-center flex-col">
              <div className="profile flex flex-row justify-start items-center px-3 py-3">
                <img src={user} className="w-12 rounded-full mr-4" alt="" />
                <h1
                  className="text-white"
                  style={{ fontFamily: "Inter", fontWeight: "400" }}
                >
                  John Doe
                </h1>
              </div>
              <div className="testi text-white text-justify p-4">
                <h1 style={{ fontFamily: "Inter", fontWeight: "400" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  reiciendis accusamus excepturi molestias est nostrum illum!
                  Aperiam perferendis accusantium maiores.
                </h1>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
