
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import "../CSS-Components/StyleNavBar.css"
import overlayImage from '../assets/Logo7.png';


function NavBar() {
    return (
<div>
<section className="top-menu">
    <div style={{ width: '100%', backgroundColor: 'white' }}>
    <Navbar expand="lg" className="top-nav fixed-top" style={{ height: '60px' }}>
  <Container fluid style={{ margin: '0px' }}>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <div className="menu-items">
        <Nav className="me-auto my-2 my-lg-0" style={{ width: "100%" }} navbarScroll>
                <Link to="/" className="nav-link">
                  Home
                </Link>
                <Link to="/about" className="nav-link">
                  About Us
                </Link>
                <Link to="/order-status" className="nav-link">
                  Order Status
                </Link>
                <Link to="/contact" className="nav-link">
                  Contact Us
                </Link>
                <Link to="/products" className="nav-link">
                  All Products
                </Link>
                <NavDropdown title="Categories" id="navbarScrollingDropdown">
                  <NavDropdown.Item as={Link} to="/action3">
                    For Your Loved One
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/action4">
                    For You
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/action5">
                    Connect with a fellow Caregiver
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
          </div>
      <div className="search-bar">
        <Form className="d-flex">
          <Form.Control id= "search-field" type="search" placeholder="Search" className="me-2" aria-label="Search" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </div>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  </section>
        <header className="header" >
        <div className="header-list">
          <div className= "header-logo">
             <img src={overlayImage} alt="Logo" />
        </div>
        <div className= "header-item-container">
        <Link to="/cart" className="nav-link">
                  Cart ()
                </Link>
                <Link to="/login" className="nav-link">
                  Login
                </Link>
                <Link to="/register" className="nav-link">
                  Register
                </Link>
        </div>
        </div>
      </header>

      <section className= "bottom-nav">
      <div className="bottom-nav-list">
      </div>
      </section>

      

    </div>
  );
}



export default NavBar;