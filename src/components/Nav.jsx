import React from "react";
import { Link, useLocation } from "react-router-dom";

// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

// nav data
export const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "services", path: "/services", icon: <HiRectangleGroup /> },
  { name: "work", path: "/work", icon: <HiViewColumns /> },
  {
    name: "testimonials",
    path: "/testimonials",
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];

export default function Nav() {
  const location = useLocation();

  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed  bottom-0 w-full mt-auto z-50 xl:left-[2%] xl:w-16 xl:max-w-md xl:h-screen">
      {/* inner her */}
      <div className="text-white flex w-full xl:flex-col justify-between items-center xl:justify-center gap-y-10 px-4 md:px-40 xl:h-[23rem] h-[80px] xl:px-4 xl:py-2 bg-gradient-to-br py-8 backdrop-blur-sm text-2xl xl:text-xl xl:rounded-full bg-black/55 shadow-black/80 shadow-lg">
        {navData.map((link, index) => {
          return (
            <Link
              to={link.path}
              key={index}
              className={`${
                link.path === location.pathname && "text-red-700 "
              } relative flex items-center group hover:text-red-600 transition duration-300`}
            >
              {/* icons */}
              <div>{link.icon}</div>

              {/* tooltip */}
              <div className="absolute pl-14 left-0 hidden xl:group-hover:flex">
                <div className="flex justify-center items-center">
                  {/* triangle */}

                  {/* <div className="border-solid border-r-black/55 border-r-8 border-y-transparent border-y-[10px] border-l-0"></div> */}

                  <div className="text-[12px] capitalize text font-semibold bg-black/55 px-3 border-r-2 rounded-sm shadow-black/80 shadow-md">
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
