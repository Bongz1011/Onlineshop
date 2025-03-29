import React from "react";
import { Badge } from "react-bootstrap";

const TotalPrice = ({ total }) => {
  if (total === 0) return null; // Hide the component if total is 0

  return (
    <div style={{ position: "absolute", top: "20px", right: "20px" }}>
      <h2>
        Total Price: <Badge bg="success">R{total}</Badge>
      </h2>
    </div>
  );
};

export default TotalPrice;
