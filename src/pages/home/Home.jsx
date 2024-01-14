import React from "react";

// component
import Transition from "../../components/Transition";
import ProjectBtn from "../../components/ProjectBtn";

export default function Home() {
  const PF = process.env.PUBLIC_URL

  return (
    <Transition>
      <div className="container w-full h-full">
        {/* text */}
        <div className="text-center flex flex-col justify-center xl:text-left mx-auto xl:pl-24 h-full xl:max-w-2xl ">
          <h1 className="h1 text-2xl">
            Welcome to digital reality, <br /> meet
            <span className="text-red-600"> Jeremiah </span>
            <span className="text-sky-800">
              Blockchain Alchemist | Code Maestro
            </span>
          </h1>
          {/* subtitle */}
          <p className="text-white/80 text-sm">
            Pioneering blockchain landscapes with full-stack mastery, Navigating
            Forex markets, strategic trades our treasury. Crafting innovative
            solutions, a code sorcerer's feat, Your business's digital journey,
            where excellence and expertise meet.
          </p>

          {/* project btn */}
          <div className="xl:hidden flex justify-center relative">
            <ProjectBtn />
          </div>
        </div>
        {/* image */}
        <div className="">
          <img src={`${PF}/images/avatar.png`} className="" alt="" />
        </div>
      </div>
    </Transition>
  );
}
