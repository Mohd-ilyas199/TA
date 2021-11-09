import React from "react";
import { useEffect, useState } from "react";
import { Card, Col, Button, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, Route } from "react-router-dom";

export const ProductDetail = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);
  const myproducts = useSelector((state) => state.productReducer.product);
  const selectedid = useSelector(
    (state) => state.productReducer.selectedprodid[0]
  );
  useEffect(() => {
    const filteredProd = myproducts.filter((item) => item.id === selectedid);
    setSelectedProduct({ ...filteredProd });
  }, [selectedid]);
  return (
    <div>
      <Card>
        <Row>
          <Col md={8}>Images</Col>
          <Col md={2}>Description</Col>
          <Route path="/">
            <Button>Back</Button>
          </Route>
        </Row>
      </Card>
    </div>
  );
};
