import React from "react";
import ApiCard from "./ApiCard";
import ApiPost from "./ApiPost";
import { Counter } from "./Couter";

const LandingCount = () => {
  return (
    <div>
      <Counter />
      <br />
      <h1>APi calling</h1>

      <ApiCard />
      <br />
      <h1>Api posting</h1>
      <ApiPost />
    </div>
  );
};

export default LandingCount;
