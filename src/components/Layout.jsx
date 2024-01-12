// import { Sora } from "@next/font/google";

// component
import Nav from "./Nav";
import Header from "./Header";
import TopLeftImg from "./TopLeftImage";
import Home from "../pages/home/Home";

// font setting
// const sora = Sora({
//   subsets: ["latin"],
//   variable: "--font-sora",
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
// });

function Layout() {
  const PF = process.env.PUBLIC_URL;

  return (
    <div
      className="font-poppins h-screen text-white/80 font-semibold"
      style={{
        backgroundImage: `url(${PF}/images/black2.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <TopLeftImg />
      <Nav />
      <Header />
      <Home />
    </div>
  );
}

export default Layout;
