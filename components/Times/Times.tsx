"use client";

import { useTimes } from "@/lib/hooks/useTimes";
import { LoaderCircleIcon, LoaderIcon } from "lucide-react";
import { parisienFont } from "@/fonts/fonts";
import LineTitle from "../fragments/LineTitle";
export default function TimesSections() {
  const timeLeft = useTimes();

  const loads =
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  return (
    <div className=" w-full h-96 flex flex-col gap-4 justify-center items-center">


      <LineTitle>
        <div className="flex gap-3">
          <h1 className="sm:text-5xl text-3xl font-bold text-cream-900">08</h1>
          <span className="border-r-4 p-2 border-cream-900"></span>
          <h1 className="sm:text-5xl text-3xl font-bold text-cream-900">09</h1>
          <span className="border-r-4 p-2 border-cream-900 "></span>
          <h1 className="sm:text-5xl text-3xl font-bold text-cream-900">2024</h1>
        </div>
      </LineTitle>
      <div className="flex flex-col gap-3 items-center">
        {loads ? (
          <>
            <LoaderCircleIcon className="h-24 w-24 text-cream-900 animate-spin duration-1000" />
          </>
        ) : timeLeft.days !== undefined ? (
          <div className="flex gap-3">
            <p className="flex flex-col bg-cream-900 rounded-md  text-cream-100 min-w-20 md:min-w-36  py-4 items-center">
              <span className="text-6xl font-semibold">{timeLeft.days}</span>{" "}
              <span className="text-2xl">Hari</span>{" "}
            </p>
            <p className="flex flex-col bg-cream-900 rounded-md  text-cream-100 min-w-20 md:min-w-36  py-4 items-center">
              <span className="text-6xl font-semibold">{timeLeft.hours}</span>{" "}
              <span className="text-2xl">Jam</span>{" "}
            </p>
            <p className="flex flex-col bg-cream-900 rounded-md  text-cream-100 min-w-20 md:min-w-36  py-4 items-center">
              <span className="text-6xl font-semibold">{timeLeft.minutes}</span>{" "}
              <span className="text-2xl">Menit</span>{" "}
            </p>
            <p className="flex flex-col bg-cream-900 rounded-md  text-cream-100 min-w-20 md:min-w-36  py-4 items-center">
              <span className="text-6xl font-semibold">{timeLeft.seconds}</span>{" "}
              <span className="text-2xl">Detik</span>{" "}
            </p>
          </div>
        ) : (
          <span className="text-base text-center font-bold text-cream-900">
            Acara Sedang Berlangsung!, Terima kasih sudah mengunjungi undangan ini
            ini
          </span>
        )}
      </div>
    </div>
  );
}
