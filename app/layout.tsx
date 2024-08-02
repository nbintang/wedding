// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required

import { cn } from "@/lib/utils";
import "./globals.css";
import Navbar from "@/components/fragments/navigations/Navbar";
import { AOSInit } from "@/app/aos/aos";
import { Toaster } from "@/components/ui/toaster";
import { fontHeading, fontBody } from "@/fonts/fonts";
import ButtonSlideUp from "@/components/core/ButtonSlideUp";
import ParticlesComponent from "@/components/core/Particles";

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
        <ParticlesComponent/>
        <Navbar />
        {children}
        <ButtonSlideUp />
        <Toaster />
      </body>
    </html>
  );
}
