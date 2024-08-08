"use client";
import React from "react";
import dynamic from "next/dynamic";
import { parisienFont } from "../../fonts/fonts";
import Payment from "./Payment";
import LayoutSection from "../fragments/LayoutSection";
import LineTitle from "../fragments/LineTitle";
import Link from "next/link";
import Attitude from "./Attitude";

// Dynamically import the GoogleMap component with no SSR
const GoogleMap = dynamic(() => import("../core/Map"), { ssr: false });

export default function Location() {
  return (
    <LayoutSection id={"location"}>
      <LineTitle colorLine="border-cream-300">
        <h1
          className={`${parisienFont.className}  text-cream-300 text-4xl font-semibold`}
        >
          Lokasi Acara
        </h1>
      </LineTitle>
      <div className="w-full  ">
        <GoogleMap />
      </div>
      <div className="flex flex-col items-center  ">
        {process.env.NEXT_PUBLIC_URL_LOCATION && (
          <Link
            href={process.env.NEXT_PUBLIC_URL_LOCATION}
            className="text-center underline mb-3 md:text-xl text-xs font-semibold border-cream-100 text-cream-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buka Lokasi
          </Link>
        )}

        <p className="text-center sm:text-lg text-sm max-w-xs text-cream-100">
          Doa Restu anda merupakan karunia yang sangat berarti bagi kami.
        </p>
      </div>

      <Attitude/>
      {/* <Payment /> */}
    </LayoutSection>
  );
}
