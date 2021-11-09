import React from "react";
import { MovieCard } from "./MovieCard";
import { Info } from "../Reducer/MovieService";
import { Card, Col, Row } from "react-bootstrap";
import { useState } from "react";
import "./moviecard.css";

export const Movies = () => {
  const [jsondata, setjsondata] = useState(Info.Data);

  return (
    <div className="d1">
      <h1>MOVIES LIST</h1>
      <Row>
        {jsondata.map((item) => (
          <Col md="4">
            <MovieCard itm={item} />;
          </Col>
        ))}
      </Row>
    </div>
  );
};
