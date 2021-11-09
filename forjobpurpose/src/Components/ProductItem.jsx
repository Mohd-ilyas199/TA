import React from "react";
import { useDispatch } from "react-redux";
import { Card, Col, Row, Button, Form } from "react-bootstrap";
import "./ProductItem.css";

const ProductItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <Card className="Card1">
        <Row>
          {/* <Form.Label>{item.category}</Form.Label> */}
          <Card.Img src={item.image} className="cardimg" variant="top" />
          <Card.Title>{item.title}</Card.Title>
          <Form.Label>${item.price}/-</Form.Label>
        </Row>
        <Row>
          <Col>
            <Button
              className="button1"
              // variant="success"
              onClick={() =>
                dispatch({
                  type: "ADD_PRODUCT",
                  data: [],
                })
              }
            >
              ADD
            </Button>
          </Col>

          <Col>
            <Button
              className="button1"
              // variant="danger"
              onClick={() =>
                dispatch({
                  type: "REMOVE_PRODUCT",
                  data: "Grocery",
                })
              }
            >
              DELETE
            </Button>
          </Col>
        </Row>
      </Card>
    </React.Fragment>
  );
};

export default ProductItem;
