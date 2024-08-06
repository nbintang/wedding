"use client";
import { useState, useEffect } from 'react';
import Aos from 'aos';

const useOpenIntros = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen === true) { 
      Aos.refreshHard();
      
    }
  }, [isOpen]);

  const handleOpenIntro = () => setIsOpen(true);

  return { isOpen, handleOpenIntro };
}

export default useOpenIntros;
