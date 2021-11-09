import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { apiposting } from "./api";
const userinitials = {
  name: "",
  email: "",
  message: "",
};

const ApiPost = () => {
  const [initialValues, setVals] = useState(userinitials);

  const { name, email, message } = initialValues;

  const onValueChange = (e) => {
    setVals({ ...initialValues, [e.target.name]: e.target.value });
  };
  const adduserdetails = async () => {
    await apiposting(initialValues);
  };

  return (
    <div>
      <Form>
        <Form.Label>name</Form.Label>
        <Form.Control
          type="text"
          onChange={(e) => onValueChange(e)}
          name="name"
          value={name}
        ></Form.Control>
        <Form.Label>E-mail</Form.Label>

        <Form.Control
          type="text"
          onChange={(e) => onValueChange(e)}
          name="email"
          value={email}
        ></Form.Control>
        <Form.Label>message</Form.Label>

        <Form.Control
          type="text"
          onChange={(e) => onValueChange(e)}
          name="message"
          value={message}
        ></Form.Control>

        <Button onClick={adduserdetails()}>post</Button>
      </Form>
    </div>
  );
};

export default ApiPost;
