import { HashRouter as Router, Route, Routes } from "react-router-dom";
import About from "./About";
import Company from "./Company";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./NavBar";
import Team from "./Team";

const Hashes = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}>
            <Route path="team" element={<Team />}></Route>
            <Route path="company" element={<Company />}></Route>
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default Hashes;
