import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="page">
      <h1>Welcome to Listners</h1>
      <p>Welcome to our website! Explore our pages to learn more about us.</p>
      <button className="btn" onClick={() => navigate("/contact")}>
        Go to Contact
      </button>
    </div>
  );
};

export default Home;
