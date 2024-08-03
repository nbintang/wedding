"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import Link from "next/link";
import { useScrollSections } from "@/lib/hooks/useActions";

const ButtonSlideUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-9 right-9">
      <Link
        href={"#header"}
     
        className={`${
          isVisible ? "opacity-100" : "opacity-0"
        }  hover:scale-110 transition-all duration-300 cursor-pointer bg-cream-900 hover:opacity-90 rounded-md w-12 h-12 flex justify-center items-center shadow-md text-cream-300`}
      >
        <ChevronUp />
      </Link>
    </div>
  );
};

export default ButtonSlideUp;
