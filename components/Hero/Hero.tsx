"use client";
import { parisienFont } from '@/fonts/fonts';
import useOpenIntros from '@/lib/hooks/useOpenIntros';
import Image from 'next/image';
import React from 'react';

const Hero = () => {
  const { isOpen } = useOpenIntros();
  return (
    <div
      id="hero"
      className="flex justify-center sm:justify-around items-center h-screen w-full flex-wrap"
    >
      <div data-aos={"fade-down"} className={`min-w-full ${isOpen ? "hidden":""}`}>
        <h1
          className={`${parisienFont.className} text-center bg-gradient-to-r from-cream-700 to-cream-900 bg-clip-text text-transparent flex flex-col items-center text-4xl sm:text-9xl font-semibold`}
        >
          <span>Syafira Rahmani</span> <span>&</span>
          <span>Ibnu Purnomo Shidiq</span>
        </h1>
      </div>
      <div data-aos={"fade-up"} className="sm:hidden">
        <Image
          src="/images/assets/2pengantin.png"
          alt="alt"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
}

export default Hero;
