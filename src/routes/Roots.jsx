import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import App from "../App";
import "flowbite-react"
import "flowbite"

export default function Roots() {
  const getTheme = localStorage.getItem("color-theme");
  const [theme, setTheme] = useState(
    getTheme ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
  );
  const [enabled, setEnabled] = useState(false);

  function changeTheme() {
    setEnabled((prev) => !prev);
    document.documentElement.classList.toggle("dark");
    document.documentElement.classList.toggle("light");
  }

  useEffect(() => {
    if (enabled) {
      document.documentElement.classList.toggle("dark", true);
      document.documentElement.classList.toggle("light", false);
      localStorage.setItem("color-theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.toggle("light", true);
      document.documentElement.classList.toggle("dark", false);
      localStorage.setItem("color-theme", "light");
      setTheme("light");
    }
  }, [enabled, theme]);

  return (
    <div className="roots">
      <App dark={enabled} changeTheme={changeTheme} />
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
}
