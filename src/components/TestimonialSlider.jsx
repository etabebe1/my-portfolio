// import swiper core and require module
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { FaQuoteLeft } from "react-icons/fa";

// testimonial data
const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "Anne Smith",
    position: "Customer",
    message:
      "Transformed our ideas into a seamless digital experience with exceptional technical expertise. Outstanding problem-solving skills and effective communication made the development process smooth and impactful.",
  },
  {
    image: "/t-avt-2.png",
    name: "Jane Doe",
    position: "Customer",
    message:
      "The dedication and technical skill brought to our project were pivotal for its success. A strong commitment to excellence and understanding our needs distinguished their work.!",
  },
  {
    image: "/t-avt-3.png",
    name: "Jhon Doe",
    position: "Customer",
    message:
      "Played a crucial role in overcoming our project's technical challenges, ensuring success through adaptability and insightful innovation. Their contributions were invaluable to our team.",
  },
];

const TestimonialSlider = () => {
  const PF = process.env.PUBLIC_URL;

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      pagination={{ clickable: true }}
      navigation={true}
      spaceBetween={15}
      slidesPerView={1} // Default number of slides per view
      breakpoints={{
        // When window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
      }}
      className="mySwiper"
    >
      {testimonialData.map((data, index) => {
        const { image, name, position, message } = data;
        return (
          <SwiperSlide key={index} className="xl:my-10 mb-10">
            <div className="flex flex-row w-full xl:px-20 px-12">
              <div className=" flex flex-col xl:flex-row items-center gap-x-20 gap-y-5 justify-center">
                <div className="flex flex-col justify-center items-center text-center xl:border-r-2 xl:pr-10">
                  <img
                    src={`${PF}/images/${image}`}
                    alt="testimonial-profile"
                    className="h-16 w-16 sm:h-full sm:w-full object-cover object-center"
                  />
                  <h2 className="capitalize text-sm">{name}</h2>
                  <span className="uppercase text-sm font-semibold">{position}</span>
                </div>
                <div className="flex flex-col items-center xl:items-start">
                  <FaQuoteLeft
                    style={{ textShadow: "2px 2px 7px rgba(0, 0, 0, 0.2)" }}
                    className="text-2xl xl:text-5xl text-gray-700/90"
                  ></FaQuoteLeft>
                  <span className="text-xs">{message}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
