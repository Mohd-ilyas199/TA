import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useState } from "react";

export const Counter = () => {
  const [counter, setcounter] = useState(0);
  return (
    <div>
      <h1>Counter</h1>
      <Row style={{ padding: "30px", margin: "auto" }}>
        <Col md={2}>
          <Button onClick={() => setcounter(counter + 3)}>+</Button>
        </Col>
        <Col md={2}>
          <p>{counter}</p>
        </Col>
        <Col md={2}>
          <Button onClick={() => setcounter(counter - 3)}>-</Button>
        </Col>
      </Row>
    </div>
  );
};
