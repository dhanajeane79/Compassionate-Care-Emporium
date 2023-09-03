/* eslint-disable react/no-unescaped-entities */
function Home() {
    return (
      <div className="home-container">
        <header className="home-header">
          <h1>Welcome</h1>
          <p>Short Description</p>
        </header>
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