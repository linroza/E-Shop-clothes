import React from "react";
import light from "../../assets//website/light-mode-button.png";
import night from "../../assets/website/dark-mode-button.png";

const DarkMode = () => {
  const [theme, setThem] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;
  React.useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    document.body.classList.toggle("theme");
  }, [theme]);

  return (
    <div className="relative">
      <img
        src={light}
        onClick={() => setThem(theme === "light" ? "dark" : "light")}
        className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10  ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        } `}
      />
      <img
        src={night}
        onClick={() => setThem(theme === "light" ? "dark" : "light")}
        className={"w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 "}
      />
    </div>
  );
};

export default DarkMode;
