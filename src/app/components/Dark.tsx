'use client'
import { Moon } from "lucide-react";
import { useEffect, useState } from "react";

export const DarkToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white"
    >
     <Moon className="w-[12px] h-[12px]" />
    </button>
  );
};
