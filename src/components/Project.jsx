import React, { useState } from "react";
import projectImages from "../utils/projectImages";
import projectInfo from "../utils/projectInfo";
import { ReactComponent as ArrowIcon } from "../svg/arrow.svg";

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
      <div className="project__name-and-photo">
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
            <button
              onClick={decrementCounter}
              className="carousel__button left"
            >
              <ArrowIcon></ArrowIcon>
            </button>
            <button
              onClick={incrementCounter}
              className="carousel__button right"
            >
              <ArrowIcon></ArrowIcon>{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="project__info">
        <h1 className="project__text">{info.description}</h1>
        <a href={info.link} className="project__link">
          {info.link}
        </a>
      </div>
    </div>
  );
}
