import Image from "next/image";
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import TimesSections from "@/components/Times/Times";
import Location from "@/components/Location/Location";
import { parisienFont } from "@/fonts/fonts";
import DateSections from "@/components/Date/DateSections";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col gap-9 items-center justify-between ">
      <div
        id="hero"
        className="flex justify-center  sm:justify-around items-center h-screen w-full  flex-wrap"
      >
        <div data-aos="fade-down" className="min-w-full">
          <h1
            className={`${parisienFont.className} text-center bg-gradient-to-r from-cream-700 to-cream-900 bg-clip-text text-transparent flex flex-col items-center text-4xl sm:text-9xl  font-semibold`}
          >
            <span className="">Syafira Rahmani</span> <span>&</span>
            <span>Ibnu Purnomo Shidiq
            </span>
          </h1>
        </div>
        <div data-aos="fade-up" className="sm:hidden">
          <Image
            src="/images/assets/2pengantin.png"
            alt="alt"
            width={400}
            height={400}
          />
        </div>
      </div>
      <TimesSections />
      <About />
      <DateSections/>
      <Location/>
      <Contact />
    
    </main>
  );
}
