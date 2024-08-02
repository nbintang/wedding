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
        <Link href={"https://www.google.com/maps/@-6.3682679,106.7978322,20.59z?entry=ttu"} className="text-center underline text-xl font-semibold  border-cream-100 text-cream-100" target="_blank" rel="noopener noreferrer" >
        Jl. Mushola 34, Tanah Baru, Kecamatan Beji, Kota Depok, Jawa Barat 16426
        </Link>
        <p className="text-center text-lg max-w-xs text-cream-100">
          Doa Restu anda merupakan karunia yang sangat berarti bagi kami.
        </p>
      </div>
      <Payment />
    </LayoutSection>
  );
}
