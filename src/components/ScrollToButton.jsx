import React from "react";
import { scrollTo } from "../utils/scrollTo";

export default function ScrollToButton({ toId, children }) {
  const handleClick = () => scrollTo(toId);
  return <button onClick={handleClick}>{children}</button>;
}
