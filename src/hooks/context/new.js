import { createContext, useState, use } from "react";
import "./context.css";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const ThemeCard = () => {
  const { theme, toggleTheme } = use(ThemeContext);
  const cardClass = theme === "light" ? "light-card" : "dark-card";
  const textClass = theme === "light" ? "light-text" : "dark-text";
  const buttonClass = theme === "light" ? "light-button" : "dark-button";
  return (
    <div className={cardClass}>
      <p className={textClass}>Ka tīmata i a tātou / A place to belong</p>
      <p className={textClass}>Me Māia / Rise to the challenge</p>
      <p className={textClass}>Tapatahi / Better together</p>
      <p className={textClass}>Ngā Kiritaki / Customer at the heart</p>
      <button onClick={toggleTheme} className={buttonClass}>
        {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
      </button>
    </div>
  );
};

export const ToggleThemeCardWithUse = () => {
  return (
    <ThemeProvider>
      <ThemeCard />
    </ThemeProvider>
  );
};
