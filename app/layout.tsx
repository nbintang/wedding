"use client";
import { cn } from "@/lib/utils";
import { Suspense } from "react";
import "./globals.css";
import Navbar from "@/components/fragments/navigations/Navbar";
import { AOSInit } from "@/lib/animation/aos";
import { Toaster } from "@/components/ui/toaster";
import { fontHeading, fontBody } from "@/fonts/fonts";
import ButtonSlideUp from "@/components/core/ButtonSlideUp";
import ParticlesComponent from "@/components/core/Particles";
import Opening from "@/components/Opening/Opening";
import Loading from "@/components/core/Loading";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <AOSInit />
      <body
        className={`${cn(
          "antialiased",
          fontHeading.variable,
          fontBody.variable
        )} overflow-x-hidden bg-cream-100`}
      >
        <Suspense fallback={<Loading />}>
          <ParticlesComponent />
          <Opening>
            <Navbar />
            {children}
            <ButtonSlideUp />
          </Opening>
          <Toaster />
        </Suspense>
      </body>
    </html>
  );
}
