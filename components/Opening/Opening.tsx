import { parisienFont } from "@/fonts/fonts";
import useOpenIntros from "@/lib/hooks/useOpenIntros";
import React from "react";

const Opening = ({ children }: { children: React.ReactNode }) => {
  const { isOpen, handleOpenIntro } = useOpenIntros();
  return (
    <>
      <div
        className={`grid place-items-center  transition-all duration-500 ${
          isOpen ? "opacity-0 -z-10" : "opacity-100 z-10"
        } absolute inset-0 bg-cream-300`}
        style={{
          transform: isOpen ? "translateY(-100%)" : "translateY(0)",
          transition: "transform 0.5s ease-in-out, opacity 0.5s ease-in-out",
        }}
      >
        <div className={`flex flex-col items-center gap-4`}>
          <div>
            <h1
              className={`${parisienFont.className} text-center bg-gradient-to-r  from-cream-700 to-cream-900 bg-clip-text text-transparent flex  flex-col items-center text-xl sm:text-4xl  font-semibold`}
            >
              Syafira Rahmani & Ibnu Purnomo Shidiq
            </h1>
          </div>
          <div className="text-center">
            <h1 className="text-cream-900 sm:text-xl">
              Kepada Bapak/Ibu/Saudara/i
            </h1>
            <p className="text-cream-900  text-sm sm:text-base">
              Tanpa mengurangi rasa hormat, Kami mengundang anda untuk hadir di
              Acara Pernikahan Kami.
            </p>
          </div>
          <button
            onClick={handleOpenIntro}
            className="bg-cream-900 p-2 text-cream-300 shadow-md rounded-md hover:opacity-85
            transition-all duration-300"
          >
            Open Invitation
          </button>
          <h1 className="text-cream-700 text-center text-xs sm:text-sm">
            Mohon maaf apabila ada kesalahan penulisan nama/gelar
          </h1>
        </div>
      </div>
      {isOpen && children}
    </>
  );
};

export default Opening;
