import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProduct } from "./Service/product";
import MiddlePart from "./MiddlePart";
import ProductList from "./ProductList";
import { Nav, Navbar, Container } from "react-bootstrap";
import TopNav from "./TopNav";
import "./ProductItem.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { ProductDetail } from "./ProductDetails/ProductDetail";

const Home = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const dispatch = useDispatch();
  const allproducts = async () => {
    const product = await getProduct();
    dispatch({
      type: "ADD_PRODUCT",
      data: product,
    });
    console.log("products---->", product);
  };
  useEffect(() => {
    allproducts();
  }, []);

  return (
    <React.Fragment>
      <Router>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand
              href="#Login"
              style={{
                fontFamily: "fantasy",
                fontSize: "30px",
              }}
            >
              E-Commerce
            </Navbar.Brand>
            <Nav className="me-auto">
              <NavLink className="nav2" to="/Login">
                Login{" "}
              </NavLink>
              <NavLink className="nav2" to="/Products">
                Products
              </NavLink>
              <NavLink className="nav2" to="/prices">
                Prices
              </NavLink>
            </Nav>
          </Container>
        </Navbar>

        <TopNav setSearchTxt={setSearchTxt} />

        <Switch>
          <div>
            <Route path="/products">
              <MiddlePart />
              <ProductList searchTxt={searchTxt} />
            </Route>
            <Route path="/ProductDetail">
              <ProductDetail />
            </Route>
          </div>
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default Home;
