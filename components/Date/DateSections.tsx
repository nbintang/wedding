import { parisienFont } from "@/fonts/fonts";
import LayoutSection from "../fragments/LayoutSection";
import LineTitle from "../fragments/LineTitle";

export default function DateSections() {
  return (
    <LayoutSection id={"date"}>
      <LineTitle colorLine="border-cream-300">
        <h1 className={` text-center text-4xl`}>Tanggal Acara</h1>
      </LineTitle>
      <div className="bg-cream-300 w-full text-cream-900  flex flex-col gap-4 p-4 rounded-md">
        <h1 className={`${parisienFont.className} text-4xl font-semibold `}>
          Akad Nikah
        </h1>{" "}
        <p className="text-xl font-semibold">
          Ahad | 08 September 2024 | 09.00 WIB
        </p>
        <h1 className={`${parisienFont.className} text-4xl font-semibold `}>
          Resepsi
        </h1>{" "}
        <p className="text-xl font-semibold">
          Ahad | 08 September 2024 | 10.00 WIB
        </p>
      </div>
    </LayoutSection>
  );
}
