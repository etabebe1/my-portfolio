import { useNavigate } from 'react-router-dom';

// import swiper core and require modules
import { Pagination, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { RxArrowRight } from 'react-icons/rx';

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'Cyaxiom',
          path: '/cyaxiom.png',
          url: 'https://cyaxiom.com',
        },
        {
          title: 'EthioHope',
          path: '/EthioHope.png',
          url: 'https://kids-coding.ethiohope.com/',
        },
        {
          title: 'Red Sea Assisted Living',
          path: '/RedSea.png',
          url: 'https://redseaassistedliving.com/',
        },
        {
          title: 'Kids Goal Academy',
          path: '/kidsgoal.png',
          url: 'https://kidsgoalsocceracademy.com/',
        },
      ],
    },
    {
      images: [
        {
          title: 'Responsible Lending',
          path: '/responsiblelending.png',
          url: 'https://www.responsiblelending.org/',
        },
        {
          title: 'VibeVerse',
          path: '/vibeverse.jpg',
          url: 'https://vibeverse.example.com',
        },
        {
          title: 'VibeVerse UI',
          path: '/vibeverseUI.jpg',
          url: 'https://vibeverse-ui.example.com',
        },
        {
          title: 'Forex Strategy UI',
          path: '/forex-strategy.jpg',
          url: 'https://forex-strategy.example.com',
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
      slidesPerView={1}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{ clickable: true }}
      className="mySwiper"
    >
      {workSlides.slides.map((slide, index) => (
        <SwiperSlide key={index} className="xl:my-10 mb-10">
          <div className="p-2 grid grid-cols-2 grid-rows-2 gap-2">
            {slide.images.map((image, index) => (
              <div
                key={index}
                className="sm:h-28 xl:h-36 w-full rounded-lg relative group cursor-pointer"
                onClick={() => window.open(image.url, '_blank')}
              >
                <img
                  src={`${PF}/images${image.path}`}
                  alt={image.title}
                  loading="lazy"
                  className="w-full h-full rounded-lg object-cover object-center z-10"
                />
                <div className="w-full h-full absolute inset-0 bg-gradient-to-r from-slate-500/40 via-slate-900/40 to-slate-400/40 opacity-0 group-hover:opacity-80 z-20 top-0 rounded-lg transition-all duration-300 flex justify-center shadow-md">
                  <div className="absolute bottom-0 group-hover:-translate-y-10 xl:group-hover:-translate-y-20 transition-all duration-300">
                    <div className="flex items-center gap-x-2 text-[12px] xl:text-base justify-center font-semibold tracking-[.1rem] uppercase">
                      <div className="delay-250 text-shadow-xl shadow-white">
                        Live
                      </div>
                      <div className="text-shadow-xl shadow-white translate-y-[220%] xl:translate-y-[350%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                        Project
                      </div>
                      <div className="text-[16px] xl:text-xl text-shadow-xl shadow-white translate-y-[280%] xl:translate-y-[410%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                        <RxArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
