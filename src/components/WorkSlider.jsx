// import swiper core and require modules
import { Pagination, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// icons
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
        {
          title: "title",
          path: "/thumb4.jpg",
        },
        {
          title: "title",
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
      ],
    },
    // {
    //   images: [

    //   ],
    // },
  ],
};

const WorkSlider = () => {
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
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div>
              {slide.images.map((image, index) => {
                return (
                  <div key={index}>
                    <div>
                      {/* {console.log(image.path)} */}
                      <img src={`${image.path}`} className="w-[500px] h-[300px]" alt="project images" />
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

// {slide.images.map((image, index) => {
//   return (
//     <div>
//       <div>
//         {/* Images */}
//         {console.log(image.path)}
//         {/* <img src={`${image}`} alt="" /> */}
//       </div>
//     </div>
//   );
// })}

// return (
//   <SwiperSlide key={index} className="py-14 ">
//     <div className="slide-container bg-gradient-to-r from-gray-800/70 via-gray-600/70 to-gray-600/70 hover:opacity-90 h-[180px] px-1 py-5 xl:py-3 cursor-pointer rounded-lg transition-all duration-500 backdrop-blur-sm drop-shadow-lg group flex xl:flex-col">
//       {/* icon and text */}
//       <div className="flex">
//         {/* icon */}
//         <div className="mb-4 text-2xl text-sky-700 px-1">Icon</div>

//         {/* text-div */}
//         <div className="flex flex-col gap-3 text-center">
//           <div className="font-semibold text-lg text-gray-300">
//             Title
//           </div>
//           <p className="text-sm">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit.
//             Quibusdam, dolore quae! Distinctio nulla repellendus beatae
//             consequatur omnis error vero dolore, facere sunt fuga
//             maiores mollitia expedita maxime optio illo quos.
//           </p>
//         </div>
//       </div>
//       {/* arrow */}
//       <div className="text-3xl ">
//         <div className="group-hover:rotate-45 group-hover:text-sky-700 transition-all duration-300" />
//       </div>
//     </div>
//   </SwiperSlide>
// );
