import React from "react";
import SkillGrid from "./SkillGrid";
import { ReactComponent as AboutIcon } from "../svg/abouticon.svg";

export default function About() {
  return (
    <section id="about" className="about main__section">
      <h1 className="section__heading--primary">About</h1>
      <div className="about__img">
        <AboutIcon></AboutIcon>
      </div>
      <p className="about__text">
        I make websites and applications for individuals, artists, small
        businesses, and entrepreneurs. My designs deliver hight-quality user
        experiences, helping clients realize their vision.
      </p>

      <SkillGrid />
    </section>
  );
}
