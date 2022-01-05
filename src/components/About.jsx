import React from "react";
import SkillGrid from "./SkillGrid";
// import Icon from "./Icon";

export default function About() {
  // const aboutIcon = "../svg/icons/abouticon.svg";
  return (
    <section id="about" className="about main__section">
      <h1 className="section__heading--primary">About</h1>
      <div className="about__img">
        {/* <Icon name="abouticon" size="100px" color="rgba(0, 0, 0, 0.25)" /> */}
      </div>
      <p className="about__text">
        Creativity, user experience, and the future of tech are at the forefront
        of my approach to web design. I love to create and use my skills to help
        others realize their dreams. I make websites and applications for
        individuals, artists, small businesses, and entrepreneurs.
      </p>

      <SkillGrid />
    </section>
  );
}
