import React, { useState } from "react";
import { FormControl, FormGroup, InputLabel, Input } from "@material-ui/core";
import { Button, Card, Col, Row } from "react-bootstrap";
import { adduser } from "../Service/api";
import { useHistory } from "react-router-dom";
import "../CRUD/Crud.css";

const Adduser = () => {
  const initialValues = {
    name: "",
    age: "",
    nickname: "",
    phone: "",
  };
  const [user, setuser] = useState(initialValues);
  const history = useHistory();
  const { name, age, nickname, phone } = user;
  const onValueChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
    console.log("===.data", user);
  };
  const adduserdetails = async () => {
    await adduser(user);
    history.push("./allusers");
  };
  return (
    <div className="c1">
      <h1>Add User</h1>
      <FormGroup>
        <FormControl>
          <InputLabel>NAME</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="name" />
        </FormControl>
      </FormGroup>
      <FormGroup>
        <FormControl>
          <InputLabel>AGE</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="age" />
        </FormControl>
      </FormGroup>
      <FormGroup>
        <FormControl>
          <InputLabel>NICKNAME</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="nickname" />
        </FormControl>
      </FormGroup>
      <FormGroup>
        <FormControl>
          <InputLabel>PHONE</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="phone" />
        </FormControl>
      </FormGroup>
      <br />
      <Row>
        <Col md={2}>
          <Button variant="dark" onClick={adduserdetails}>
            Add
          </Button>
        </Col>
        <Col md={2}>
          {" "}
          <Button variant="dark">cancel</Button>
        </Col>
      </Row>
    </div>
  );
};

export default Adduser;
