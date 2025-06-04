import React from "react";
import "../Styles/Home.css"; 

const Home = () => {
  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="logo"></div>
        <ul className="nav-links">
          <li>About Us</li>
          <li>History</li>
          <li>Category</li>
          <li>Contact Us</li>
        </ul>
      </nav>

      <div className="main-content">
        <div className="text-content">
          <h1>
            Delic<span className="accent">é</span> <span className="sub"><br/>Coffee</span>
          </h1>
          <p>
          Start your day with a smile and a cup of our handcrafted coffee, brewed just for you
          </p>
          <button className="cta-button">See</button>
        </div>
        <div className="image-overlay"></div>
      </div>
    </div>
  );
};

export default Home;
