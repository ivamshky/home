import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Jumbotron } from "./migration";
import { Chrono } from "react-chrono";

const Leadership = ({ heading, message, img, imageSize }) => {
  return (
    <Jumbotron
      id="leadership"
      className="m-0"
      style={{ backgroundColor: "white" }}
    >
      <h2 className="display-4 pb-5 text-center">{heading}</h2>
      <div className="row">
        <div className="col-md-5">
          <p className="lead">{message}</p>
        </div>
        <div className="col-md-7">
          <Chrono>
            
          </Chrono>
        </div>
      </div>
    </Jumbotron>
  );
};

export default Leadership;
