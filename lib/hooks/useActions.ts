"use client";
import { useState } from "react";
export const useScrollSections = () => {
  const [activeSection, setActiveSection] = useState("");

  const handleClick = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return { activeSection, setActiveSection, handleClick };
};
