import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import Layout from "./components/Layout";
import Home from "./pages/home/Home";
import About from "./pages/about/about";
import Nav from "./components/Nav";
import Header from "./components/Header";
import TopLeftImage from "./components/TopLeftImage";

function App() {
  return (
    <Router>
      <Nav />
      <Header />
      <TopLeftImage />

      <Layout>
        <Routes>
          <Route
            path="/"
            exact
            element={<Layout children={<Home />}></Layout>}
          />
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
