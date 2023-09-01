
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


function NavBar() {
    return (
        <div style={{ width: '100%', backgroundColor: 'white' }}>
        <Navbar expand="lg" className="bg-body-tertiary fixed-top" style={{ height: '60px' }}>
        <Container fluid style={{ maxWidth: '1200px' }}>
            <Link to="/" className="navbar-brand">
              Compassionate Care Emporium
            </Link>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                <Link to="/" className="nav-link">
                  Home
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
                <Link to="/login" className="nav-link">
                  Login
                </Link>
                <Link to="/register" className="nav-link">
                  Register
                </Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </div>
      );
    }
    

export default NavBar;