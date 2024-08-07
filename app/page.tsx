"use client";
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import TimesSections from "@/components/Times/Times";
import Location from "@/components/Location/Location";
import DateSections from "@/components/Date/DateSections";
import Hero from "@/components/Hero/Hero";
import Opening from "@/components/Opening/Opening";

export const dynamic = "force-dynamic";
export default function Home() {
  return (
    <Opening>
    <main className="flex min-h-screen w-full flex-col gap-9 items-center justify-between ">
      <Hero />
      <TimesSections />
      <About />
      <DateSections />
      <Location />
      <Contact />
    </main>
          </Opening>
  );
}
