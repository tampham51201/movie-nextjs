import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";

import SwiperCore, { Navigation, Autoplay } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation, Autoplay]);

const HeroSlider = (props) => {
  const btnPrevRef = useRef(null);
  const btnNextRef = useRef(null);
  return (
    <div>
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: btnPrevRef.current,
          nextEl: btnNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = btnPrevRef.current;
          swiper.params.navigation.nextEl = btnNextRef.current;
        }}
        className="hero-slider w-full"
      >
        {/* {props.data.map((item, index) => (
          <SwiperSlide className="hero-slider__item" key={index}>
          <Image src="https://static.247phim.com/164473/conversions/6232c262f28f7_a1-1920_660.jpg" width="200" height="100%"></Image>
          </SwiperSlide>
        ))} */}
        {props.data.map((item, index) => {
          let params = new URLSearchParams(new URL(item.jumpAddress).search);
          let id45 = params.get("id");
          let category = params.get("type");

          return (
            <SwiperSlide
              className="hero-slider__item w-full cursor-pointer z-20"
              key={index}
            >
              <Link href={`/xemphim/${category}/${id45}`}>
                <div className="flex justify-between relative">
                  <div className="flex-1 shadow-3xl z-10 bg-black"></div>

                  <Image
                    src={item.imageUrl}
                    width="950px"
                    height="550px"
                    className="z-0"
                  />

                  <div className="text-white absolute top-[50%] left-[5rem] translate-y-[-50%] z-20 ">
                    <h1 className="text-white text-[2.6rem] font-bold uppercase  bg-gradient-to-r px-2 from-[#000] to-[#57565613] leading-[3.4rem] ">
                      {item.title || "Tuyển Tập Phim Hot Nhất"}
                    </h1>
                    <h2 className="text-primary uppercase text-[1.6rem] bg-gradient-to-r from-[#b44799a1] to-[#e4d0df00] leading-[3.4rem] pl-2">
                      {item.title || "Được Xem Nhiều Nhất"}
                    </h2>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
        {/* <SwiperSlide className="hero-slider__item">
          <div className="w-screen h-[660px] relative">
            <Image
              src="https://static.247phim.com/164473/conversions/6232c262f28f7_a1-1920_660.jpg"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </SwiperSlide> */}

        <div
          className="hero-slider__control__prev  absolute top-[50%] left-[1rem] z-40  translate-y-[-50%] cursor-pointer"
          ref={btnPrevRef}
        >
          <i className="bx bx-chevron-left text-[4rem] hover:text-text_gray"></i>
        </div>
        <div
          className="hero-slider__control__next   absolute top-[50%] right-[1rem] z-40  translate-y-[-50%] cursor-pointer"
          ref={btnNextRef}
        >
          <i className="bx bx-chevron-right text-[4rem] hover:text-text_gray"></i>
        </div>
      </Swiper>
    </div>
  );
};

HeroSlider.propTypes = {
  data: PropTypes.array.isRequired,
};

export default HeroSlider;
