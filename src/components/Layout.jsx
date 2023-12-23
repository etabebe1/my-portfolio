// fonts

// font setting

// components
import Nav from "../components/Nav";
import Header from "../components/Header";
import TopLeftImage from "../components/TopLeftImage";

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      <Header />
      <TopLeftImage />
      {/* {children} */}
    </div>
  );
}

