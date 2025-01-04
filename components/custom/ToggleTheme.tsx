"use client";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { SunMoon } from "lucide-react";

const ToggleTheme = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <div className="flex flex-col">
      <Button
        className=" text-white dark:bg-white  bg-black rounded-full p-3"
        onClick={() => setDarkMode(!darkMode)}
      >
        <SunMoon className="text-white dark:text-black" size={18} />
        <p className="text-white dark:text-black">
          Click me to change the theme
        </p>
      </Button>

      <span></span>
    </div>
  );
};

export default ToggleTheme;
