import React, { useState } from "react";

const ComponentContainer = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div>
        <div>
          <h2
            onClick={toggleOpen}
            style={{ color: isOpen ? "#0ef60e" : "#61dafb" }}
          >
            {title}
          </h2>
          <h3
            onClick={toggleOpen}
            style={{ color: isOpen ? "#0ef60e" : "#61dafb" }}
          >
            {isOpen ? "▲" : "▼"}
          </h3>
        </div>
      </div>
      <div></div>
      <div>{isOpen && <div>{children}</div>}</div>
    </>
  );
};

export default ComponentContainer;
