import React from "react";
import ProductCard from "./ProductCard";
import { Container, Row } from "react-bootstrap";

const Products = ({ onBuy }) => {
  const products = [
    {
        id: 1,
        title: "Smartphone",
        description: "High-performance smartphone with great camera.",
        price: 17999,
        colors: ["Black", "White", "Blue"],
        image: "https://m.media-amazon.com/images/I/61Lpukr5+GL._AC_SL1500_.jpg"
      },
      {
        id: 2,
        title: "Tablet",
        description: "Tablet fast and easy to use for kids.",
        price: 899,
        colors: ["Silver", "Black", "Grey"],
        image: "https://www.checkers.co.za/medias/checkers515Wx515H-10906252EA.webp?context=bWFzdGVyfGltYWdlc3w2Nzc4fGltYWdlL3dlYnB8aW1hZ2VzL2g2Yi9oNzEvMTEzMDk3NjIxODMxOTgud2VicHxmYTdiZDEzOTMyMzFiNjgyNjY0ODUyMWIxMzRiNTYwYWM0ZGQxMGQxMzk5Yzk1NWFjMzEzZjY2MzE2Y2JhNjMw"
      },
      {
        id: 3,
        title: "Smartwatch",
        description: "Stay connected on the go.",
        price: 399,
        colors: ["Red", "Blue", "Black"],
        image: "https://m.media-amazon.com/images/I/41FMiRLgvOL._AC_.jpg"
      },
      {
          id: 4,
          title: "Wireless Mouse & Keyboard",
          description: "Type anywhere.",
          price: 499,
          colors: ["Red", "Blue", "Black"],
          image: "https://m.media-amazon.com/images/I/51Azq0tfGNL._AC_.jpg"
        },{
          id: 5,
          title: "Printer",
          description: "Print best qaulity pictures.",
          price: 3500,
          colors: ["Red", "Blue", "Black"],
          image: "https://m.media-amazon.com/images/I/31uc3agTVdL._AC_.jpg"
        },{
          id: 6,
          title: "Playstation 5",
          description: "Play good qaulity games.",
          price: 30000,
          colors: ["Red", "Blue", "Black"],
          image: "https://m.media-amazon.com/images/I/51Q3MtJEJ0L._AC_SL1500_.jpg"
        },{
          id: 7,
          title: "Fifa 2025",
          description: "Best game.",
          price: 450,
          colors: ["Red", "Blue", "Black"],
          image: "https://m.media-amazon.com/images/I/713OLbbTFOL._AC_SL1500_.jpg"
        },{
          id: 8,
          title: "Fortnite",
          description: "Play amazing game.",
          price: 595,
          colors: ["Red", "Blue", "Black"],
          image: "https://m.media-amazon.com/images/I/81EZzSHt3UL._SL1500_.jpg"
        },{
          id: 9,
          title: "iPad",
          description: "Air drop anytime.",
          price: 8999,
          colors: ["Red", "Blue", "Black"],
          image: "https://m.media-amazon.com/images/I/61P-EGHcylL._AC_SL1500_.jpg"
        },{
          id: 10,
          title: "Office Chair",
          description: "Sit comfortable.",
          price: 1000,
          colors: ["Red", "Blue", "Black"],
          image: "https://m.media-amazon.com/images/I/71XJlz-FicL._AC_SL1500_.jpg"
        },
    // Add more products if needed...
  ];

  return (  // ✅ Make sure return is inside the function
    <Container>
      <Row>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onBuy={onBuy} />
        ))}
      </Row>
    </Container>
  );
};

export default Products;  // ✅ Ensure this is outside the function
