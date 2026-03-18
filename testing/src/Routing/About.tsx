import { Link } from "react-router-dom";
const About = () => {
  return (
    <div>
      <h2>About Page</h2>
      <p>
        We are dedicated to providing the best services to our clients. Learn
        more about our team and company below.
      </p>
      <nav>
        <ul className="subnav">
          <li>
            <Link to="team">Our Team</Link>
          </li>
          <li>
            <Link to="company">Our Company</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default About;
