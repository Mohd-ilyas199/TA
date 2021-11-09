import React, { useEffect, useState } from "react";
import { FormControl, FormGroup, InputLabel, Input } from "@material-ui/core";
import { Button, Col, Row } from "react-bootstrap";
import { adduser, GetUSers, edituser } from "../Service/api";
import { useHistory, useParams } from "react-router-dom";
import "../CRUD/Crud.css";

const Editusers = () => {
  const initialValues = {
    name: "",
    age: "",
    nickname: "",
    phone: "",
  };
  const [user, setuser] = useState(initialValues);
  const history = useHistory();
  const { name, age, nickname, phone } = user;
  const { id } = useParams();
  const onValueChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
    console.log("===.data", user);
  };
  const Edituserdetails = async () => {
    await edituser(id, user);
    history.push("/allusers");
  };
  const Loaduserdetails = async () => {
    const response = await GetUSers(id);
    setuser(response.data);
    console.log("/////>>>data", response);
  };
  useEffect(() => {
    Loaduserdetails();
  }, []);
  const CancelUserdetails = () => {
    history.push("/allusers");
  };

  return (
    <div className="c1">
      <h1>Edit User</h1>
      <FormGroup>
        <FormControl>
          <InputLabel>NAME</InputLabel>
          <Input onChange={(e) => onValueChange(e)} value={name} name="name" />
        </FormControl>
      </FormGroup>
      <FormGroup>
        <FormControl>
          <InputLabel>AGE</InputLabel>
          <Input onChange={(e) => onValueChange(e)} value={age} name="age" />
        </FormControl>
      </FormGroup>
      <FormGroup>
        <FormControl>
          <InputLabel>NICKNAME</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            value={nickname}
            name="nickname"
          />
        </FormControl>
      </FormGroup>
      <FormGroup>
        <FormControl>
          <InputLabel>PHONE</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            value={phone}
            name="phone"
          />
        </FormControl>
      </FormGroup>
      <br />
      <Row>
        <Col md={2}>
          <Button variant="dark" onClick={Edituserdetails}>
            save
          </Button>
        </Col>
        <Col md={2}>
          {" "}
          <Button variant="dark" onClick={CancelUserdetails}>
            cancel
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Editusers;
