import React from "react";
import { Link } from "react-router-dom";
// // icons
// import {
//   HiHome,
//   HiUser,
//   HiViewColumns,
//   HiRectangleGroup,
//   HiChatBubbleBottomCenterText,
//   HiEnvelope,
// } from "react-icons/hi2";

// // nav data
// export const navData = [
//   { name: "home", path: "/", icon: <HiHome /> },
//   { name: "about", path: "/about", icon: <HiUser /> },
//   { name: "services", path: "/services", icon: <HiRectangleGroup /> },
//   { name: "work", path: "/work", icon: <HiViewColumns /> },
//   {
//     name: "testimonials",
//     path: "/testimonials",
//     icon: <HiChatBubbleBottomCenterText />,
//   },
//   {
//     name: "contact",
//     path: "/contact",
//     icon: <HiEnvelope />,
//   },
// ];

function Nav() {
  return (
    <nav>
      <div>
        <Link></Link>
        {/* {navData.map((data, index) => {
          return <Link key={index}>hey</Link>;
        })} */}
      </div>
    </nav>
  );
}

export default Nav;
