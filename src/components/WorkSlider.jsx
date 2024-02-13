// import swiper core and require modules
import { Pagination, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { RxArrowRight } from "react-icons/rx";

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/black1.jpg",
        },
        {
          title: "title",
          path: "/black2.jpg",
        },
        {
          title: "title",
          path: "/black3.jpg",
        },
        {
          title: "title",
          path: "/black4.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/neon1.jpg",
        },
        {
          title: "title",
          path: "/neon2.jpg",
        },
        {
          title: "title",
          path: "/neon3.jpg",
        },
        {
          title: "title",
          path: "/purple1.jpg",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  const PF = process.env.PUBLIC_URL;

  return (
    <Swiper
      modules={[FreeMode, Pagination]}
      spaceBetween={15}
      slidesPerView={1} // Default number of slides per view
      breakpoints={{
        // When window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{ clickable: true }}
      className="mySwiper"
      // install Swiper modules
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index} className="xl:my-10 mb-10">
            <div className="p-2 grid grid-cols-2 grid-rows-2 gap-2">
              {slide.images.map((image, index) => {
                return (
                  <div className="h-32 xl:h-36 w-[100%] rounded-lg relative group cursor-pointer">
                    {/* image */}
                    <img
                      src={`${PF}/images${image.path}`}
                      alt="projects"
                      loading="lazy"
                      className="w-full h-full rounded-lg object-cover object-center z-10"
                    />

                    {/* overlay */}
                    <div className="w-full h-full absolute   inset-0 bg-gradient-to-r from-slate-500/40 via-slate-900/40 to-slate-400/40 opacity-0 group-hover:opacity-80 z-20 top-0 rounded-lg transition-all duration-300 flex justify-center shadow-md">
                      {/* title */}
                      <div className="absolute bottom-0 translate group-hover:-translate-y-10 xl:group-hover:-translate-y-20 transition-all duration-300 ">
                        <div className="flex items-center gap-x-2 text-[13px] xl:text-base justify-center font-semibold tracking-[.1rem] uppercase">
                          {/* title part - 1 */}
                          <div className="delay-250 text-shadow-xl shadow-white">
                            Live
                          </div>
                          {/* title part - 2 */}
                          <div className="text-shadow-xl shadow-white translate-y-[220%] xl:translate-y-[350%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                            Project
                          </div>
                          {/* icon */}
                          <div className="text-[16px] xl:text-xl text-shadow-xl shadow-white translate-y-[280%] xl:translate-y-[410%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                            <RxArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
