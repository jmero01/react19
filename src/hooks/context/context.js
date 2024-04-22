import React from "react";
import { ToggleThemeCard } from "./before";
import { ToggleThemeCardWithUse } from "./new";
import "./context.css";

export const Context = () => {
  return (
    <>
      <div className="container">
        <ToggleThemeCard />
        <ToggleThemeCardWithUse />
      </div>
    </>
  );
};
