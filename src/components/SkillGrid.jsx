import React from "react";
import { ReactComponent as HtmlIcon } from "../svg/html.svg";
import { ReactComponent as CssIcon } from "../svg/css.svg";
import { ReactComponent as JavascriptIcon } from "../svg/javascript.svg";
import { ReactComponent as GitIcon } from "../svg/git.svg";
import { ReactComponent as ReactIcon } from "../svg/reacticon.svg";
import { ReactComponent as SassIcon } from "../svg/sass.svg";
import { ReactComponent as FigmaIcon } from "../svg/figma.svg";
import { ReactComponent as GatsbyIcon } from "../svg/gatsby.svg";
import { ReactComponent as GraphqlIcon } from "../svg/graphql.svg";
import { ReactComponent as NextjsIcon } from "../svg/nextjs.svg";

export default function SkillGrid() {
  return (
    <section className="skill-grid">
      <div className="skill-grid__item">
        <div className="skill-grid__icon">
          <HtmlIcon fill="#E34F26"></HtmlIcon>
        </div>
        <span className="skill-grid__name">html</span>
      </div>

      <div className="skill-grid__item">
        <div className="skill-grid__icon">
          <CssIcon fill="#1572B6"></CssIcon>{" "}
        </div>
        <span className="skill-grid__name">css</span>
      </div>

      <div className="skill-grid__item">
        <div className="skill-grid__icon">
          <JavascriptIcon fill="#000000"></JavascriptIcon>
        </div>
        <span className="skill-grid__name">javascript</span>
      </div>

      <div className="skill-grid__item">
        <div className="skill-grid__icon">
          <GitIcon fill="#F05032"></GitIcon>
        </div>
        <span className="skill-grid__name">git</span>
      </div>

      <div className="skill-grid__item">
        <div className="skill-grid__icon">
          <ReactIcon fill="#61DAFB"></ReactIcon>
        </div>
        <span className="skill-grid__name">react</span>
      </div>

      <div className="skill-grid__item">
        <div className="skill-grid__icon">
          <SassIcon fill="#CC6699"></SassIcon>{" "}
        </div>
        <span className="skill-grid__name">sass</span>
      </div>

      <div className="skill-grid__item">
        <div className="skill-grid__icon">
          <FigmaIcon fill="#F24E1E"></FigmaIcon>
        </div>
        <span className="skill-grid__name">figma</span>
      </div>

      <div className="skill-grid__item">
        <div className="skill-grid__icon">
          <GatsbyIcon fill="#663399"></GatsbyIcon>
        </div>
        <span className="skill-grid__name">gatsby</span>
      </div>

      <div className="skill-grid__item">
        <div className="skill-grid__icon">
          <GraphqlIcon fill="#E10098"></GraphqlIcon>
        </div>
        <span className="skill-grid__name">graphql</span>
      </div>

      <div className="skill-grid__item">
        <div className="skill-grid__icon">
          <NextjsIcon fill="#000000"></NextjsIcon>{" "}
        </div>
        <span className="skill-grid__name">next.js</span>
      </div>
    </section>
  );
}
