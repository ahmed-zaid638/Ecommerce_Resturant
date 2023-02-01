import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import  logo from '../../assets/logo.png'
import "./Navs.css";

const Navs = () => {
  return (
    <div>
      <Navbar  expand="lg">
        <Container>
          <Navbar.Brand href="#home">
              <img src={logo} alt=""/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#ingredients">About Us</Nav.Link>
              <Nav.Link href="#menu">Explore Foods</Nav.Link>
              <Nav.Link href="#ingredients">Reviews</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link className= "last-link">08 39824324</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navs;
