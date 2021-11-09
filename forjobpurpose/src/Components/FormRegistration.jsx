import React, { useState, useEffect } from "react";
import { Form, Row, Col, Button, Card } from "react-bootstrap";
// import "./RegistrationForm.css";

export const RegistrationForm = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
    // Check and see if errors exist, and remove them from the error object:
    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // get our new errors
    const newErrors = findFormErrors();
    // Conditional logic:
    if (Object.keys(newErrors).length > 0) {
      // We got errors!
      setErrors(newErrors);
    } else {
      console.log("data===>", form);
      localStorage.setItem("regData", JSON.stringify(form));
    }
  };
  const findFormErrors = () => {
    const {
      email,
      password,
      retype_password,
      firstName,
      lastName,
      phoneNumber,
      Address,
      Region,
      postCode,
      country,
    } = form;
    const newErrors = {};
    // name errors
    // if ( !name || name === '' ) newErrors.name = 'cannot be blank!'
    // else if ( name.length < 3 ) newErrors.name = 'name is too short!'

    // name errors
    if (!firstName || firstName === "")
      newErrors.firstName = "cannot be blank!";
    if (!lastName || lastName === "") newErrors.lastName = "cannot be blank!";
    if (!phoneNumber || phoneNumber === "")
      newErrors.phoneNumber = "cannot be blank!";
    if (!Address || Address === "") newErrors.Address = "cannot be blank!";
    if (!Region || Region === "") newErrors.Region = "cannot be blank!";
    if (!postCode || postCode === "") newErrors.postCode = "cannot be blank!";
    if (!country || country === "") newErrors.country = "cannot be blank!";
    if (!email || email === "") newErrors.email = "cannot be blank!";
    else if (email.length < 3) newErrors.email = "Email is too short!";
    else if (email.indexOf("@") === -1)
      newErrors.email = "Email should contain @ symbol";
    if (!password || password === "") newErrors.password = "cannot be blank!";
    else if (password.length < 3) newErrors.password = "password is too short!";
    else if (password.length > 16)
      newErrors.password = "password is too short!";
    else if (password.indexOf("@") === -1)
      newErrors.password = "password should contain symbol";
    if (!password || password === "") {
      if (!retype_password || retype_password === password)
        return (newErrors.retype_password = `password didn't match`);
    }

    return newErrors;
  };
  useEffect(() => {
    setForm(JSON.parse(localStorage.getItem("regData")));
  }, []);
  return (
    <React.Fragment>
      <Card className="c1">
        <Row>
          <Col lg={3}>Email</Col>
          <Col lg={6}>
            <Form.Control
              id="email"
              value={form.email}
              className="f1"
              type="email"
              onChange={(e) => setField("email", e.target.value)}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Col>
        </Row>
        <Row>
          <Col lg={3}>Password</Col>
          <Col lg={6}>
            <Form.Control
              className="f1"
              value={form.password}
              type="password"
              onChange={(e) => setField("password", e.target.value)}
              isInvalid={!!errors.password}
            />
            <Form.Control.Feedback type="invalid">
              {errors.password}
            </Form.Control.Feedback>
          </Col>
        </Row>
        <Row>
          <Col lg={3}>Retype-Password</Col>
          <Col lg={6}>
            <Form.Control
              className="f1"
              type="password"
              value={form.retype_password}
              onChange={(e) => setField("password", e.target.value)}
              isInvalid={!!errors.retype_password}
            />
            <Form.Control.Feedback type="invalid">
              {errors.retype_password}
            </Form.Control.Feedback>
          </Col>
        </Row>
        <Row>
          <Col lg={3}>First Name</Col>
          <Col lg={6}>
            <Form.Control
              className="f1"
              value={form.firstName}
              type="text"
              onChange={(e) => setField("firstName", e.target.value)}
              isInvalid={!!errors.firstName}
            />
            <Form.Control.Feedback type="invalid">
              {errors.firstName}
            </Form.Control.Feedback>
          </Col>
        </Row>
        <Row>
          <Col lg={3}>Last Name</Col>
          <Col lg={6}>
            <Form.Control
              className="f1"
              value={form.lastName}
              type="text"
              onChange={(e) => setField("lastName", e.target.value)}
              isInvalid={!!errors.lastName}
            />
            <Form.Control.Feedback type="invalid">
              {errors.lastName}
            </Form.Control.Feedback>
          </Col>
        </Row>
        <Row>
          <Col lg={3}>Phone Number</Col>
          <Col lg={6}>
            <Form.Control
              className="f1"
              value={form.phoneNumber}
              type="text"
              onChange={(e) => setField("phoneNumber", e.target.value)}
              isInvalid={!!errors.phoneNumber}
            />
            <Form.Control.Feedback type="invalid">
              {errors.phoneNumber}
            </Form.Control.Feedback>
          </Col>
        </Row>
        <Row>
          <Col lg={3}>Address</Col>
          <Col lg={6}>
            <Form.Control
              className="f1"
              value={form.Address}
              type="text"
              onChange={(e) => setField("Address", e.target.value)}
              isInvalid={!!errors.Address}
            />
            <Form.Control.Feedback type="invalid">
              {errors.Address}
            </Form.Control.Feedback>
            <Form.Control type="text" className="f1"></Form.Control>
          </Col>
        </Row>
        <Row>
          <Col lg={3}>Town</Col>
          <Col lg={6}>
            <Form.Control type="text" className="f1"></Form.Control>
          </Col>
        </Row>
        <Row>
          <Col lg={3}>Region</Col>
          <Col lg={6}>
            <Form.Control
              className="f1"
              value={form.Region}
              type="text"
              onChange={(e) => setField("Region", e.target.value)}
              isInvalid={!!errors.Region}
            />
            <Form.Control.Feedback type="invalid">
              {errors.Region}
            </Form.Control.Feedback>
          </Col>
        </Row>
        <Row>
          <Col lg={3}>Postcode/Zip</Col>
          <Col lg={6}>
            <Form.Control
              className="f1"
              type="text"
              value={form.postCode}
              onChange={(e) => setField("postCode", e.target.value)}
              isInvalid={!!errors.postCode}
            />
            <Form.Control.Feedback type="invalid">
              {errors.postCode}
            </Form.Control.Feedback>
          </Col>
        </Row>
        <Row>
          <Col lg={3}>Country</Col>
          <Col lg={6}>
            <Form.Control
              className="f1"
              value={form.country}
              type="text"
              onChange={(e) => setField("country", e.target.value)}
              isInvalid={!!errors.country}
            />
            <Form.Control.Feedback type="invalid">
              {errors.country}
            </Form.Control.Feedback>
          </Col>
        </Row>
        <Row>
          <Col lg={3}></Col>
          <Col lg={6}>
            <Button className="b1" onClick={handleSubmit}>
              Register
            </Button>
          </Col>
        </Row>
      </Card>
    </React.Fragment>
  );
};
