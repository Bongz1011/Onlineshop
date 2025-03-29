import React from "react";
import { Container, Figure } from "react-bootstrap";

const About = () => {
  return (
    <Container className="text-center">
      <h1>About Our Store</h1>
      <Figure>
        <Figure.Image width={200} alt="Store Logo" src="https://www.shutterstock.com/shutterstock/photos/2303731987/display_1500/stock-vector-simple-easy-click-deal-shop-buy-icon-symbol-logo-design-template-illustration-inspiration-2303731987.jpg" />
        <Figure.Caption>Online Store</Figure.Caption>
      </Figure>

      <p>Welcome to our store! We provide high-quality products at affordable prices.</p>

      <p>📞 Contact Us: support@onlinestore.co.za</p>
    </Container>
  );
};

export default About;
