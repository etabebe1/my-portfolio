// Link
import { Link } from "react-router-dom";

// icon
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  const PF = process.env.PUBLIC_URL;

  return (
    <div className="mx-auto my-5">
      <Link to={"/work"}>
        <div className="w-[135px] h-[135px] flex justify-center items-center relative group" 
        style={{
          backgroundImage: `url(${PF}/images/circle-star.svg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
          <img
            src={PF + "/images/rounded-text.png"}
            className="animate-spin-slow h-full w-full max-w-[111px] max-h-[118px]"
            alt=""
          />
          <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-500" />
        </div>
      </Link>
    </div>
  );
};

export default ProjectsBtn;
