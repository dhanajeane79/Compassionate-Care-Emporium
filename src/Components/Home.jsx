/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom";
function Home() {
    return (
      <div className="home-container">
        <header className="home-header">
          <h1>Welcome</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </header>

        <Link to="/products" className="shop-now-button">
          <button className="btn btn-primary">Shop Now</button>
        </Link>

        <section className="home-features">
          <div className="feature">
            <h2>Care for Them</h2>
            <p>Discover a wide range of items for your loved one</p>
           
          </div>
          <div className="feature">
            <h2>Care for You</h2>
            <p>Discover a wide range of items for YOU</p>
            
          </div>
          <div className="feature">
            <h2>Connect</h2>
            <p>Connect with Others on the same Journey</p>
            
          </div>
        </section>



        <footer className="home-footer">
          <p>&copy;All rights reserved.</p>
        </footer>
      </div>
    );
  }
  
  export default Home;