import { useEffect, useState } from "react";

export default function useScrollPosition() {
  const [headerShouldBeFixed, setHeaderShouldBeFixed] = useState(false);
  const [arrowButtonShouldBeVisible, setArrowButtonShouldBeVisible] =
    useState(false);
  const [currentSection, setCurrentSection] = useState("home");
  // const sections = ["home", "about", "projectsection", "contact"];
  const getActiveSection = () => {
    const y = window.scrollY;
    const home = document.getElementById("home");
    const about = document.getElementById("about");
    const projectsection = document.getElementById("projectsection");
    const contact = document.getElementById("contactsection");
    if (y >= contact.offsetTop - 250) {
      setCurrentSection("contact");
    } else if (y >= projectsection.offsetTop - 250) {
      setCurrentSection("projectsection");
    } else if (y >= about.offsetTop - 250) {
      setCurrentSection("about");
    } else if (y >= home.offsetTop) {
      setCurrentSection("home");
    }
  };
  const setHeaderPosition = () => {
    if (window.scrollY >= window.innerHeight - 1) {
      setHeaderShouldBeFixed(true);
    } else if (window.scrollY <= window.innerHeight) {
      setHeaderShouldBeFixed(false);
    }
  };
  const setButtonVisibility = () => {
    if (window.scrollY >= window.innerHeight) {
      setArrowButtonShouldBeVisible(true);
    } else if (window.scrollY <= window.innerHeight) {
      setArrowButtonShouldBeVisible(false);
    }
  };
  const handleScroll = () => {
    getActiveSection();
    setHeaderPosition();
    setButtonVisibility();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return {
    handleScroll,
    arrowButtonShouldBeVisible,
    headerShouldBeFixed,
    currentSection,
  };
}
