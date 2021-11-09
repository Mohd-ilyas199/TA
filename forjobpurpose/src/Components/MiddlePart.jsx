import React from "react";
import { Row, Col } from "react-bootstrap";

export const MiddlePart = () => {
  return (
    <div>
      <Row>
        <Col md={8}>
          <h5 style={{ marginLeft: "90px", marginTop: "10px" }}>
            You desire We deliver
          </h5>
          <h1
            style={{
              fontFamily: "fantasy",
              fontSize: "130px",
              marginLeft: "100px",
            }}
          >
            <span style={{ color: "grey" }}>E-</span>
            <span style={{ color: "rebeccapurple" }}>Commerce</span>
          </h1>
        </Col>
      </Row>
    </div>
  );
};

export default MiddlePart;
