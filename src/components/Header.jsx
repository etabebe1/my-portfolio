// socials icon
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { Link } from "react-router-dom";

const socialData = [
  {
    name: "Github",
    icon: <SiGithub />,
    link: "https://github.com/etabebe1",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/jeremiaht_a/",
  },
  {
    name: "Linked-in",
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/ermias-abebe-4699322a8/",
  },
  {
    name: "Facebook",
    icon: <FaFacebookF />,
    link: "https://www.facebook.com/ermias.tamirat.90",
  },
];

const Header = () => {
  return (
    <header className="absolute h-14 w-full z-50 bg-gradient-to-b from-black/30 flex items-center xl:px-28 md:px-24">
      <div className="max-w-5xl w-full mx-auto flex items-center xl:py-3 px-2 xl:px-0 justify-between">
        <div className="logo-container">
          <Link
            to={`http://localhost:3000/`}
            className="logo text-white hover:text-sky-700 font-bold text-3xl xl:text-4xl w-full cursor-pointer transition duration-500 text-shadow-lg"
          >
            Verse Grid
          </Link>
        </div>
        <div className="flex gap-3 xl:gap-6">
          {socialData.map((item, index) => {
            const { icon, link } = item;
            return (
              <div
                className="text-white text-lg xl:text-2xl hover:text-sky-700 border hover:border-sky-700 hover:bg-white/10 p-1 xl:rounded-lg rounded-md transition duration-500 cursor-pointer"
                onClick={() => window.open(link, "_blank")}
                key={index + 1}
              >
                {icon}
              </div>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
