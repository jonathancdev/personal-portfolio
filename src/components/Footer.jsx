import React, { useState } from "react";
// import Icon from "./Icon";

export default function Footer() {
  const [emailLinkClicked, setEmailLinkClicked] = useState(false);
  const handleClick = () => {
    setEmailLinkClicked(!emailLinkClicked);
  };
  return (
    <footer className="footer">
      <div className="icons">
        <a className="icon__link" href="http://www.github.com">
          {/* <Icon name="github" size="25px" color="rgba(0, 0, 0, 0.5)"></Icon> */}
          <span>github</span>
        </a>
        <div className="icon__link" onClick={handleClick}>
          {emailLinkClicked ? (
            <span>jonathancdev@protonmail.com</span>
          ) : (
            <>
              {/* <Icon name="email" size="25px" color="rgba(0, 0, 0, 0.5)"></Icon> */}
              <span>email</span>
            </>
          )}
        </div>
      </div>
      <p className="footer__text">&copy; 2022 Jonathan C.</p>
    </footer>
  );
}
