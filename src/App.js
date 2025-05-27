import { BrowserRouter as Router } from 'react-router-dom';

// components
import Nav from './components/Nav';
import Header from './components/Header';
import TopLeftImage from './components/TopLeftImage';
import AnimatedRoute from './components/AnimatedRoute';

function App() {
  return (
    <Router>
      {/* overflow hidden on both x and y axes */}
      <div className="overflow-x-hidden overflow-y-hidden">
        <Nav />
        <Header />
        <TopLeftImage />
        <AnimatedRoute />
      </div>
    </Router>
  );
}

export default App;
