import { BrowserRouter as Router } from "react-router-dom";

// components
import Nav from "./components/Nav";
import Header from "./components/Header";
import TopLeftImage from "./components/TopLeftImage";
import AnimatedRoute from "./components/AnimatedRoute";

function App() {
  return (
    <Router>
      <Nav />
      <Header />
      <TopLeftImage />

      <AnimatedRoute />
    </Router>
  );
}

export default App;
