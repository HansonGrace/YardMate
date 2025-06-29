import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import yardImage from '../assets/park-hero.jpg';

const Home = () => {
  const navigate = useNavigate(); 

  return (
    <div className="home-page">
      <nav className="navbar">
        <div className="logo">YardMate</div>
        <ul className="nav-links">
          <li><a href="/login">Login</a></li>
          <li><a href="/register">Register</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>

      <section className="yard">
        <img src={yardImage} alt="Family playing in a park" className="yard-img" />
        <div className="yard-text">
          <h1>Get Out & Play With Your Neighbors!</h1>
          <p>Discover local outdoor games, RSVP in real-time, and meet new friends.</p>
          <button
            className="cta-button"
            onClick={() => navigate('/map')}
          >
            Explore the Map
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
