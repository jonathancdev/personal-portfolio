import React, { useState } from "react";
import projectImages from "../utils/projectImages";
import projectInfo from "../utils/projectInfo";
// import Icon from "./Icon";

export default function Project({ name, title, description }) {
  const imageArray = projectImages[name];
  const info = projectInfo[name];

  const [counter, setCounter] = useState(1);
  const incrementCounter = () => {
    if (counter < imageArray.length) {
      setCounter(counter + 1);
    } else {
      setCounter(1);
    }
  };
  const decrementCounter = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    } else {
      setCounter(4);
    }
  };
  return (
    <div className="project">
      <h1 className="project__heading--primary">{info.title}</h1>
      <div className="carousel">
        {imageArray &&
          imageArray.map((url, i) => {
            if (counter === i + 1) {
              return (
                <img
                  key={i}
                  className="carousel__image active"
                  src={url}
                  alt={info.title}
                />
              );
            } else {
              return (
                <img
                  className="carousel__image"
                  key={i}
                  src={url}
                  alt={info.title}
                />
              );
            }
          })}
        <div className="carousel__navigation">
          <button onClick={decrementCounter} className="carousel__button left">
            {/* <Icon name="arrow" /> */}
          </button>
          <button onClick={incrementCounter} className="carousel__button right">
            {/* <Icon name="arrow" /> */}
          </button>
        </div>
      </div>
      <h1 className="project__text">{info.description}</h1>
    </div>
  );
}
