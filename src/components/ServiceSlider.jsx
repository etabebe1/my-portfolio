// import swiper core and require modules
import { Pagination, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// icons
import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowTopRight,
  RxArrowRight,
} from "react-icons/rx";

// data
const serviceData = [
  {
    icon: "/development.svg",
    title: "Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: "/front-end.svg",
    title: "Front-End",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: "/server-side.svg",
    title: "Server-Side",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: "/mern.svg",
    title: "MERN-Stack",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: "/seo.svg",
    title: "SEO",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const ServiceSlider = () => {
  const PF = process.env.PUBLIC_URL;

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
      {/* bg-gray-500/80 hover:bg-gray-500/70 */}
      {serviceData.map((item, index) => {
        const { icon, title, description } = item;
        return (
          <SwiperSlide key={index} className="py-14 ">
            <div className="slide-container bg-gradient-to-r from-gray-800/70 via-gray-600/70 to-gray-600/70 hover:opacity-90 h-[150px] flex p-1 py-5 xl:py-3 cursor-pointer rounded-lg transition-all duration-500 backdrop-blur-sm drop-shadow-lg">
              {/* icon */}
              <div className="text mb-4">
                <img
                  src={`${PF}/icons${icon}`}
                  className="w-12 xl:w-20 text-white"
                  alt=""
                />
              </div>

              {/* text-div */}
              <div className="flex flex-col gap-3 text-center">
                <div className="font-semibold text-lg text-gray-300">
                  {title}
                </div>
                <p className="text-sm">{description}</p>
              </div>

              {/* arrow */}
              <div className="text-3xl">
                <RxArrowTopRight />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
