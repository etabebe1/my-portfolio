// import { Sora } from "@next/font/google";
// font setting
// const sora = Sora({
//   subsets: ["latin"],
//   variable: "--font-sora",
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
// });



function Layout({ children }) {
  const PF = process.env.PUBLIC_URL;

  return (
    <div
      className="h-screen text-white font-mono"
      style={{
        backgroundImage: `url(${PF}/images/white.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {children}
    </div>
  );
}

export default Layout;
