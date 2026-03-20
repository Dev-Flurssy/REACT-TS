import { BrowserRouter, Routes as ReactRoutes, Route } from "react-router-dom";
import About from "./About";
import Company from "./Company";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./NavBar";
import Team from "./Team";

const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <ReactRoutes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}>
            <Route path="team" element={<Team />}></Route>
            <Route path="company" element={<Company />}></Route>
          </Route>
          <Route path="/contact" element={<Contact />}></Route>
        </ReactRoutes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Routes;
