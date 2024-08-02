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

      <div className="flex flex-col gap-3 items-center ">
        <h1 className={`${parisienFont.className} text-4xl font-bold`}>
          Syafira Rahmani{" "}
        </h1>
        <p>Anak Kedua dari keluarga Bapak Indra Utama dan Ibu Harli Yunita</p>
        <div className="bg-cream-700 p-3 shadow rounded-full w-60 h-60 sm:h-72 sm:w-72 grid place-items-center ">
          <Image
            src="/images/assets/Perempuan.png"
            className="w-32 sm:w-40"
            alt="Foto wanita"
            width={100}
            height={100}
          />
        </div>
      </div>

      <LineTitle colorLine="bg-cream-300">
        <h1 className="text-center text-xl ">&</h1>
      </LineTitle>

      <div className="flex flex-col gap-3 items-center">
        <h1 className={`${parisienFont.className} text-4xl font-bold`}>
          Ibnu Purnomo Shidiq
        </h1>
        <p>Anak Pertama dari keluarga Bapak Adikun Achmad Shodikun dan Ibu Daimah</p>

        <div className="bg-cream-700 shadow p-3 sm:h-72 sm:w-72 w-60 h-60  rounded-full grid place-items-center">
          <Image
            src="/images/assets/Laki.png"
            className="w-32 sm:w-40"
            alt="Foto wanita"
            width={100}
            height={100}
          />
        </div>
      </div>
    </LayoutSection>
  );
}
