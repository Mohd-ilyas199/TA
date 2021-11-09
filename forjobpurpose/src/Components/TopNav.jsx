import React from "react";
import { useSelector } from "react-redux";
import { Card, Row, Col, Form } from "react-bootstrap";

const TopNav = ({ setSearchTxt }) => {
  const Products = useSelector((state) => state.ProductReducer.product);

  return (
    <Card className="Nav1">
      <Row>
        <Col md={7}>
          <b> ➢Project by ilyas</b>
        </Col>
        <Col md={3}>
          <Form.Control
            type="text"
            onChange={(e) => setSearchTxt(e.target.value)}
          />
        </Col>
        <Col md={2}>
          <h2>🛍 : {Products.length}</h2>
        </Col>
      </Row>
    </Card>
  );
};

export default TopNav;
