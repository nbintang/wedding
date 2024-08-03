import { parisienFont } from "@/fonts/fonts";
import { arabicFont } from "@/fonts/fonts";
import Image from "next/image";
import LayoutSection from "../fragments/LayoutSection";
import LineTitle from "../fragments/LineTitle";

export default function About() {
  return (
    <LayoutSection id="about">
      <div className="max-w-lg space-y-6 mb-4">
        <h1
          className={`${arabicFont.className} sm:text-3xl text-xl font-semibold `}
        >
          ٱلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ ٱللَّٰهِ وَبَرَكَاتُهُ
        </h1>
        <p className="sm:text-base text-xs ">
          Dengan memohon rahmat dan ridho Allah subḥānahu wa taʿālā, yang telah
          menciptakan Makhluk-Nya secara Berpasang-Pasangan, kami bermaksud
          menyelenggarakan Pernikahan Kami.
        </p>
      </div>

      <div className="flex flex-col gap-3 items-center">
        <h1 className={`${parisienFont.className} text-4xl font-bold`}>
          Ibnu Purnomo Shidiq
        </h1>
        <p className="text-sm">
          Anak Pertama dari keluarga Bapak Adikun Achmad Shodikun dan Ibu Daimah
        </p>

        <div className="bg-cream-700 shadow p-3 sm:h-72 sm:w-60 w-40 h-52 rounded-tl-full rounded-tr-full rounded-br-[100px] rounded-bl-[100px] relative">
          <Image
            src="/images/assets/Laki.png"
            className="sm:w-40 w-28 absolute left-0 right-0 bottom-0 mx-auto" 
            alt="Foto Pria"
            width={100}
            height={100}
          />
        </div>
      </div>

      <LineTitle colorLine="bg-cream-300">
        <h1 className="text-center text-xl ">&</h1>
      </LineTitle>

      <div className="flex flex-col gap-3 items-center ">
        <h1 className={`${parisienFont.className} text-4xl font-bold`}>
          Syafira Rahmani{" "}
        </h1>
        <p className="text-sm">
          Anak Kedua dari keluarga Bapak Indra Utama dan Ibu Harli Yunita
        </p>
        <div className="bg-cream-700 shadow p-3 sm:h-72 sm:w-60 w-40 h-52 rounded-tl-full rounded-tr-full rounded-br-[100px] rounded-bl-[100px] relative">
          <Image
            src="/images/assets/Perempuan.png"
            className="sm:w-40 w-28 absolute left-0 right-0 -bottom-8 mx-auto" 
            alt="Foto Pria"
            width={100}
            height={100}
          />
        </div>
      </div>
    </LayoutSection>
  );
}
