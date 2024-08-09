"use client";
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import TimesSections from "@/components/Times/Times";
import Location from "@/components/Location/Location";
import DateSections from "@/components/Date/DateSections";
import Hero from "@/components/Hero/Hero";
import Opening from "@/components/Opening/Opening";
import Footer from "@/components/fragments/footer/Footer";

export const dynamic = "force-dynamic";
export default function Home() {
  return (
    <Opening>
      <main className="flex min-h-screen w-full flex-col gap-9 items-center justify-between ">
        <Hero />
        <TimesSections />
        <div className=" flex flex-col items-center gap-7 min-w-0 max-w-md sm:max-w-3xl mx-4">
          <About />
          <DateSections />
          <Location />
        </div>
        <div className="bg-cream-300 py-4 w-full flex justify-center">
          <div className=" flex flex-col gap-7 items-center w-full min-w-0 max-w-md sm:max-w-lg mx-4">
            <Contact />
          </div>
        </div>
        <Footer />
      </main>
    </Opening>
  );
}
