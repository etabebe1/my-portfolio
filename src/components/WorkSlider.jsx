import { useNavigate } from 'react-router-dom';

// import swiper core and required modules
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
          description: 'Web3 | Blockchain company',
          path: '/cyaxiom.png',
          url: 'https://cyaxiom.com',
        },
        {
          title: 'EthioHope',
          description: 'Kids coding bootcamp and resources',
          path: '/EthioHope.png',
          url: 'https://kids-coding.ethiohope.com/',
        },
        {
          title: 'Red Sea Assisted Living',
          description: 'Senior care facility',
          path: '/RedSea.png',
          url: 'https://redseaassistedliving.com/',
        },
        {
          title: 'Kids Goal Academy',
          description: 'Soccer training for kids with big dreams',
          path: '/kidsgoal.png',
          url: 'https://kidsgoalsocceracademy.com/',
        },
      ],
    },
    {
      images: [
        {
          title: 'Responsible Lending',
          description: 'Advocacy for fair financial practices',
          path: '/responsiblelending.png',
          url: 'https://www.responsiblelending.org/',
        },
        {
          title: 'VibeVerse',
          description: 'A virtual world of vibes and culture',
          path: '/vibeverse.jpg',
          url: '', // Upcoming
        },
        {
          title: 'VibeVerse UI',
          description: 'UI/UX for immersive metaverse experience',
          path: '/vibeverseUI.jpg',
          url: '', // Upcoming
        },
        {
          title: 'Forex Strategy UI',
          description: 'Interactive tools for forex analysis',
          path: '/forex-strategy.jpg',
          url: '', // Upcoming
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  const PF = process.env.PUBLIC_URL;
  const navigate = useNavigate();

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
                onClick={() =>
                  image.url
                    ? window.open(image.url, '_blank')
                    : navigate('/upcoming')
                }
              >
                <img
                  src={`${PF}/images${image.path}`}
                  alt={image.title}
                  loading="lazy"
                  className="w-full h-full rounded-lg object-cover object-center z-10"
                />
                <div className="w-full h-full items-center absolute inset-0 bg-gradient-to-r from-slate-900/60 via-slate-800/60 to-slate-700/60 opacity-0 group-hover:opacity-100 z-20 top-0 rounded-lg transition-all duration-300 flex flex-col justify-between items-center p-4 shadow-md">
                  {/* Project Title */}
                  <div className="w-full text-center text-white text-[10px] xl:text-xl font-extrabold tracking-wide uppercase drop-shadow-md border-b border-white/30 pb-2">
                    {image.title}
                  </div>

                  {/* Project Description */}
                  <div
                    className={`text-[10px] xl:text-[12px] mt-1 font-medium tracking-wide text-center ${
                      image.url ? 'text-slate-200' : 'text-slate-400 italic'
                    }`}
                  >
                    {image.description}
                  </div>

                  {/* Live Project Label */}
                  <div className="flex items-center gap-x-2 text-[10px] xl:text-base font-semibold tracking-[.1rem] uppercase text-white">
                    <div className="text-shadow-xl">Live</div>
                    <div className="text-shadow-xl">Project</div>
                    <div className="text-[16px] xl:text-xl">
                      <RxArrowRight />
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
