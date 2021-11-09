import React from "react";
import { Card, Button, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
const ApiCard = () => {
  const [resData, setResData] = useState([]);

  useEffect(() => {
    const getResData = async () => {
      try {
        const response = await axios.get(
          "https://gorest.co.in/public/v1/todos"
        );
        const myResData = response.data;
        console.log("Response Data--->", myResData);
        setResData(myResData);
      } catch (error) {
        console.log(error);
      }
    };
    getResData();
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", padding: "10px" }}>
      {resData.data &&
        resData.data.map((item) => {
          return (
            <Row style={{ padding: "5px" }}>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>title:{item.title}</Card.Title>
                  <Card.Text>id:{item.id}</Card.Text>
                  <Card.Text>user_id:{item.user_id}</Card.Text>
                </Card.Body>
              </Card>
            </Row>
          );
        })}
    </div>
  );
};

export default ApiCard;
