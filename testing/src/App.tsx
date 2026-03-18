import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Routing/Home";
import About from "./Routing/About";
import Team from "./Routing/Team";
import Company from "./Routing/Company";
import Contact from "./Routing/Contact";
import Navbar from "./Routing/NavBar";
import Footer from "./Routing/Footer";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}>
            <Route path="team" element={<Team />}></Route>
            <Route path="company" element={<Company />}></Route>
          </Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
