import React from "react";
import { Card, Button } from "react-bootstrap";
import "../Components/moviecard.css";

export const MovieCard = ({ itm }) => {
  return (
    <div className="d2">
      <br></br>
      <Card className="c1">
        <Card.Img
          variant="top"
          src={itm.pimg}
          style={{ width: "18rem", borderRadius: "50px" }}
        />
        <Card.Body>
          <Card.Title>{itm.MovieName}</Card.Title>
          <Card.Text>{itm.Description}</Card.Text>
          <Card.Text>{itm.Rating}</Card.Text>
          <Button variant="primary">Download</Button>
        </Card.Body>
      </Card>
    </div>
  );
};
