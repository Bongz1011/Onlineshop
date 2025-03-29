import React, { useState } from "react";
import { Card, Button, Dropdown, DropdownButton } from "react-bootstrap";

const ProductCard = ({ product, onBuy }) => {
  const [selectedColor, setSelectedColor] = useState("Select Color");

  const handleSelectColor = (color) => {
    setSelectedColor(color);
  };

  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Img variant="top" src={product.image} alt={product.title} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>Price: R{product.price}</Card.Text>

        {/* Color Selection Dropdown */}
        <DropdownButton
          title={selectedColor}
          variant="secondary"
          onSelect={handleSelectColor}
        >
          {product.colors.map((color, index) => (
            <Dropdown.Item key={index} eventKey={color} onClick={() => handleSelectColor(color)}>
              {color}
            </Dropdown.Item>
          ))}
        </DropdownButton>

        {/* Buy Button */}
        <Button
          variant="primary"
          onClick={() => onBuy(product.price)}
          style={{ marginTop: "10px" }}
        >
          Buy
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
