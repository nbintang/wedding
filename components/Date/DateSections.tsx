import { parisienFont } from "@/fonts/fonts";
import LayoutSection from "../fragments/LayoutSection";
import LineTitle from "../fragments/LineTitle";
import { FlowersIcon, RingsIcon } from "../icons/Icon";

export default function DateSections() {
  return (
    <LayoutSection id={"date"}>
      <LineTitle colorLine="border-cream-300">
        <h1 className={` text-center text-4xl`}>Tanggal Acara</h1>
      </LineTitle>
      <div className="bg-cream-300 w-full text-cream-900  flex flex-col gap-4 p-4 rounded-md">
        <div className=" flex flex-col items-center gap-2">
          <div className="flex gap-2">
            <span className="w-7 h-7 animate-bounce ">
              <RingsIcon />
            </span>
            <h1 className={`${parisienFont.className} text-3xl font-semibold `}>
              Akad Nikah
            </h1>{" "}
          </div>
          <p className="text-xl font-semibold">
            Ahad | 08 September 2024 | 09.00 WIB
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex gap-2 ">
            <span className="w-7 h-7 animate-bounce">
              {" "}
              <FlowersIcon />
            </span>
            <h1 className={`${parisienFont.className} text-3xl font-semibold `}>
              Resepsi
            </h1>
          </div>
          <p className="text-xl font-semibold">
            Ahad | 08 September 2024 | 11.00np - 16.00 WIB
          </p>
        </div>
      </div>
    </LayoutSection>
  );
}
