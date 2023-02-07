import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/Cart";

const AppHeader = () => {
  const { cart } = useCart();
  return (
    <Navbar color="dark" expand="md" dark>
      <NavbarBrand href="/">The Book Store</NavbarBrand>
      <NavbarToggler />
      <Collapse navbar>
        <Nav className="me-auto" navbar>
          <NavItem>
            <Link to="/" className="nav-link d-flex">
              Home
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/your-cart" className="nav-link d-flex">
              Your Cart{" "}
              <div className="rounded-pill px-2 bg-primary ms-1 text-white">
                {cart.length}
              </div>
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default AppHeader;
