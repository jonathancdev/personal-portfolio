import React from "react";
import { ReactComponent as ArrowIcon } from "../svg/arrow.svg";
import { scrollTo } from "../utils/scrollTo";
export default function Modal({ updateModalShouldBeVisible }) {
  const handleClick = () => {
    updateModalShouldBeVisible();
    scrollTo("about");
  };
  return (
    <div className="modal">
      <div className="modal__message">
        <p>Thank you!</p>
        <p>Your message has been received.</p>
        <button onClick={handleClick} className="modal__close">
          <ArrowIcon />
        </button>
      </div>
    </div>
  );
}
