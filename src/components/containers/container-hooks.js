import React, { useState } from "react";
import "./container-hooks.css";

const ComponentContainer = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="header-container">
        <div className="header">
          <h2
            onClick={toggleOpen}
            style={{ color: isOpen ? "#0ef60e" : "#61dafb" }}
          >
            {title}
          </h2>
          <h3
            className="icon-container"
            onClick={toggleOpen}
            style={{ color: isOpen ? "#0ef60e" : "#61dafb" }}
          >
            {isOpen ? "▲" : "▼"}
          </h3>
        </div>
      </div>
      <div className="component-container"></div>
      <div>{isOpen && <div>{children}</div>}</div>
    </>
  );
};

export default ComponentContainer;
