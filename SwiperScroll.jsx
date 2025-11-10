import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";

const SwiperScroll = () => {
  return (
    <div className="w-[80%] mx-auto my-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Swiper Scrollbar Example</h2>
      
      <Swiper
        modules={[Scrollbar]}
        spaceBetween={20}
        slidesPerView={3}
        scrollbar={{ draggable: true }}
        className="mySwiper"
      >
        {[...Array(10)].map((_, index) => (
          <SwiperSlide key={index}>
            <div className="bg-blue-500 text-white flex justify-center items-center h-40 rounded-lg shadow-md">
              Slide {index + 1}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperScroll;
