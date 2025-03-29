import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Products from "./components/Products";
import About from "./components/About";
import TotalPrice from "./components/TotalPrice";
import { Navbar, Nav, Container } from "react-bootstrap";

const App = () => {
  const [totalPrice, setTotalPrice] = useState(0);

  const handleBuy = (price) => {
    setTotalPrice((prevTotal) => prevTotal + price);
  };

  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">Online Store</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Show TotalPrice component on all pages except Home */}
      <TotalPrice total={totalPrice} />

      <Routes>
        <Route path="/products" element={<Products onBuy={handleBuy} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
