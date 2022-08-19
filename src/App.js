import Home from "./pages/home/Home";
import Gallery from "./pages/gallery/Gallery";
import About from "./pages/about/About";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/gallery"} element={<Gallery />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
