import * as React from "react";
import { useState, useEffect } from "react";

import "./css/App.css";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import About from "./components/About";
import ProjectSection from "./components/ProjectSection";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import useScrollPosition from "./hooks/useScrollPosition";
import { ReactComponent as ArrowIcon } from "./svg/arrow.svg";
const IndexPage = () => {
  const { headerShouldBeFixed, arrowButtonShouldBeVisible, currentSection } =
    useScrollPosition();

  const [activeLink, setActiveLink] = useState("home");

  const [modalShouldBeVisible, setModalShouldBeVisible] = useState(false);

  const updateActiveLink = (section) => {
    setActiveLink(section);
  };
  const updateModalShouldBeVisible = () => {
    setModalShouldBeVisible(!modalShouldBeVisible);
  };
  useEffect(() => {
    setActiveLink(currentSection);
  }, [currentSection]);

  return (
    <div className="background-container">
      {modalShouldBeVisible && (
        <Modal updateModalShouldBeVisible={updateModalShouldBeVisible} />
      )}
      <Header
        fixed={headerShouldBeFixed}
        activeLink={activeLink}
        updateActiveLink={updateActiveLink}
      />
      <section className="main">
        <Introduction updateActiveLink={updateActiveLink} />
        <About />
        <ProjectSection>
          <Project name="leyra" />
          <Project name="filmsupply" />
          <Project name="cvbreeze" />
          <Project name="weathergetter" />
        </ProjectSection>
        <Contact updateModalShouldBeVisible={updateModalShouldBeVisible} />
        <Footer />
        <button
          className={
            arrowButtonShouldBeVisible
              ? "scroll-to-top__button visible"
              : "scroll-to-top__button"
          }
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowIcon></ArrowIcon>
        </button>
      </section>

      {/* <ScrollToTopButton/> */}
    </div>
  );
};

export default IndexPage;
