import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import "./login.css";

export const Login = () => {
  return (
    <>
      <Form className="form1">
        <Row>
          <img src="logo192.png" alt="image" className="image1" />
        </Row>
        <Row>
          <Col md={1}>
            <Form.Label>Name:</Form.Label>
          </Col>
          <Col md={5}>
            <Form.Control type="text"></Form.Control>
          </Col>
        </Row>
        <Row>
          <Col md={1}>
            <Form.Label>Password:</Form.Label>
          </Col>
          <Col md={5}>
            <Form.Control type="password"></Form.Control>
          </Col>
        </Row>
      </Form>
    </>
  );
};
