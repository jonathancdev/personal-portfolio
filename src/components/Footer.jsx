import React, { useState } from "react";
import { ReactComponent as GithubIcon } from "../svg/github.svg";
import { ReactComponent as EmailIcon } from "../svg/email.svg";
import { ReactComponent as LinkedInIcon } from "../svg/linkedin.svg";

export default function Footer() {
  const [emailLinkClicked, setEmailLinkClicked] = useState(false);
  const handleClick = () => {
    setEmailLinkClicked(!emailLinkClicked);
  };
  return (
    <footer className="footer">
      <div className="icons">
        <a className="icon__link" href="http://www.github.com/jonathancdev">
          <GithubIcon /> <span>github</span>
        </a>
        <div className="icon__link" onClick={handleClick}>
          {emailLinkClicked ? (
            <span>jonathancdev@protonmail.com</span>
          ) : (
            <>
              <EmailIcon></EmailIcon>
              <span>email</span>
            </>
          )}
        </div>
        <a
          className="icon__link"
          href="http://www.linkedin.com/in/jonathancdev"
        >
          <LinkedInIcon /> <span>linkedin</span>
        </a>
      </div>
      <p className="footer__text">&copy; 2022 Jonathan C.</p>
    </footer>
  );
}
