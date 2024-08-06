"use client";
import React from "react";
import dynamic from "next/dynamic";
import { parisienFont } from "../../fonts/fonts";
import Payment from "./Payment";
import LayoutSection from "../fragments/LayoutSection";
import LineTitle from "../fragments/LineTitle";
import Link from "next/link";

// Dynamically import the GoogleMap component with no SSR
const GoogleMap = dynamic(() => import("./Map"), { ssr: false });

const linkMap =
  "https://www.google.com/maps/dir/-6.3681186,106.7976044/-6.3682279,106.7978225/@-6.3681732,106.7951367,17z/data=!3m1!4b1!4m6!4m5!1m1!4e1!1m1!4e1!3e9?entry=ttu";
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
        <Link
          href={linkMap}
          className="text-center underline mb-3 md:text-xl text-xs font-semibold  border-cream-100 text-cream-100"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jl. Mushola 34, Tanah Baru, Kecamatan Beji, Kota Depok,
          Jawa Barat 16426
        </Link>
        <p className="text-center sm:text-lg text-sm max-w-xs text-cream-100">
          Doa Restu anda merupakan karunia yang sangat berarti bagi kami.
        </p>
      </div>
      <Payment />
    </LayoutSection>
  );
}
