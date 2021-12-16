import "../App.css";

import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./header.css";

function Header() {
  return (
    <div className="App">
      {/*https://react-bootstrap.github.io/components/navbar/
      https://medium.com/how-to-react/use-react-router-link-with-bootstrap-315a8b88e129
      */}

      <Navbar
        className="navbar navbar-default"
        bg="dark"
        expand="md"
        variant="dark"
        sticky="top"
      >
        <Container>
          <LinkContainer to="/Home">
            <Navbar.Brand>
              <h3>Healthy Choices</h3>
            </Navbar.Brand>
          </LinkContainer>
          <Nav className="mr-auto">
            <LinkContainer to="/CaloricMaintenance">
              <Nav.Link>Caloric Maintenance</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/MealPlan">
              <Nav.Link>Meal Plan</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/About">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
