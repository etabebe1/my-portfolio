// import swiper core and require modules
import { Pagination, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// icons
import {
  RxDesktop,
  RxRocket,
  RxArrowTopRight,
  RxDashboard,
  RxCodesandboxLogo,
  RxCardStack,
} from "react-icons/rx";

// data
const serviceData = [
  {
    icon: <RxDesktop />,
    title: "Development",
    description: "Transforming ideas into digital realities.",
  },
  {
    icon: <RxDashboard />,
    title: "Front-End",
    description: "Crafting intuitive and engaging user interfaces.",
  },
  {
    icon: <RxCardStack />,
    title: "Back-End",
    description: "Powering applications with scalable and secure server-side logic.",
  },
  {
    icon: <RxCodesandboxLogo />,
    title: "MERN",
    description: "Integrating MongoDB, Express, React, and Node for full-stack excellence.",
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description: "Optimizing visibility for maximum online impact.",
  },
];

const ServiceSlider = () => {

  return (
    <Swiper
      // install Swiper modules
      modules={[FreeMode, Pagination]}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },

        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{ clickable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log("slide change")}
    >
      {serviceData.map((item, index) => {
        const { icon, title, description } = item;
        return (
          <SwiperSlide key={index} className="py-7 md:py-14 ">
            <div className="slide-container bg-gradient-to-r from-gray-800/70 via-gray-600/70 to-gray-600/70 hover:opacity-90 h-[180px] px-1 py-5 xl:py-3 cursor-pointer rounded-lg transition-all duration-500 backdrop-blur-sm drop-shadow-lg group flex xl:flex-col">
              {/* icon and text */}
              <div className="flex">
                {/* icon */}
                <div className="mb-4 text-2xl text-sky-700 px-1">{icon}</div>

                {/* text-div */}
                <div className="flex flex-col gap-3 text-center">
                  <div className="font-semibold text-lg text-gray-300">
                    {title}
                  </div>
                  <p className="text-sm">{description}</p>
                </div>
              </div>
              {/* arrow */}
              <div className="text-3xl ">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-sky-700 transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
