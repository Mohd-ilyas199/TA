import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Row, Col, Card } from "react-bootstrap";
import ProductItem from "./ProductItem";
import { useEffect } from "react";
const ProductList = ({ searchTxt }) => {
  const myproducts = useSelector((state) => state.ProductReducer.product);
  const [prods, setProds] = useState([]);

  useEffect(() => {
    if (searchTxt !== "") {
      const filteredProducts = myproducts.filter(
        (item) =>
          item.title.toUpperCase().includes(searchTxt.toUpperCase()) ||
          item.description.toUpperCase().includes(searchTxt.toUpperCase())
      );
      setProds([...filteredProducts]);
    }
  }, [searchTxt]);

  useEffect(() => {
    setProds([...myproducts]);
  }, [myproducts]);

  return (
    <Card className="Row1">
      <Row>
        {prods.map((item) => (
          <Col md={3}>
            <ProductItem item={item} />;
          </Col>
        ))}
      </Row>
    </Card>
  );
};

export default ProductList;
