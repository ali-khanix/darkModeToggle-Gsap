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
    <Button
      className="relative w-16 h-8 flex items-center text-white dark:bg-white  bg-black rounded-full p-1"
      onClick={() => setDarkMode(!darkMode)}
    >
      <SunMoon className="text-white dark:text-black" size={18} />
      <div className="absolute bg-white dark:bg-medium rounded-full shadow-md transform transition-transform duration-300"></div>
    </Button>
  );
};

export default ToggleTheme;
