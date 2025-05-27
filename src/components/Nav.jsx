import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// icons
import { HiUser, HiViewColumns } from 'react-icons/hi2';
import { PiChatDotsFill } from 'react-icons/pi';
import { IoHome } from 'react-icons/io5';
import { IoMdMailUnread } from 'react-icons/io';
import { FaServicestack } from 'react-icons/fa';

// nav data
export const navData = [
  { name: 'home', path: '/', icon: <IoHome aria-hidden="true" /> },
  { name: 'about', path: '/about', icon: <HiUser aria-hidden="true" /> },
  {
    name: 'services',
    path: '/services',
    icon: <FaServicestack aria-hidden="true" />,
  },
  { name: 'work', path: '/work', icon: <HiViewColumns aria-hidden="true" /> },
  {
    name: 'testimonials',
    path: '/testimonials',
    icon: <PiChatDotsFill aria-hidden="true" />,
  },
  {
    name: 'contact',
    path: '/contact',
    icon: <IoMdMailUnread aria-hidden="true" />,
  },
];

export default function Nav() {
  const location = useLocation();

  return (
    <nav
      className="flex flex-col items-center xl:justify-center gap-y-4 absolute bottom-0 w-full mt-auto z-50 xl:left-[2%] xl:w-16 xl:max-w-md xl:h-screen"
      aria-label="Primary navigation"
    >
      {/* inner container */}
      <div className="text-white flex w-full xl:flex-col justify-between items-center xl:justify-center gap-y-10 px-4 md:px-40 xl:h-[23rem] h-[0px] xl:px-4 xl:py-2 bg-gradient-to-br py-5 backdrop-blur-sm text-lg xl:text-xl xl:rounded-full bg-black/70 shadow-black/80 shadow-lg">
        {navData.map((link, index) => {
          const isActive = link.path === location.pathname;

          return (
            <Link
              to={link.path}
              key={index}
              className={`relative flex items-center group hover:text-sky-700 transition duration-300 ${
                isActive ? 'text-sky-900' : ''
              }`}
              aria-current={isActive ? 'page' : undefined}
              aria-label={
                link.name.charAt(0).toUpperCase() + link.name.slice(1)
              }
              tabIndex={0}
            >
              {/* Icon */}
              <div>{link.icon}</div>

              {/* Tooltip for xl screens */}
              <div className="absolute pl-14 left-0 hidden xl:group-hover:flex">
                <div className="flex justify-center items-center">
                  {/* Triangle pointer */}
                  <div className="border-solid border-r-white border-r-8 border-y-transparent border-y-[6px] border-l-0"></div>

                  {/* Tooltip box */}
                  <div className="text-[12px] capitalize font-semibold bg-black/55 px-3 border-r-2 rounded-sm shadow-md shadow-black/80">
                    {link.name}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
