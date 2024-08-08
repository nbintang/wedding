import Image from "next/image";
import LineTitle from "../fragments/LineTitle";
import { parisienFont } from "@/fonts/fonts";
import {
  TshirtIcon,
  ShakeHandsIcon,
  PersonEatingIcon,
  PrayIcon,
  DuaHandsIcon,
} from "../icons/Icon";
import LayoutIcon from "../fragments/LayoutIcon";
import { CameraIcon } from "lucide-react";

const iconAttributes =[
    {
        icon: <TshirtIcon className="w-6 h-6" />,
        desc: "Memakai pakaian yang sopan dan menutup aurat"
    },
    {
        icon: <DuaHandsIcon  />,
        desc: "Mendoakan kedua mempelai"
    },
    {
        icon: <PrayIcon />,
        desc: "Memperhatikan waktu sholat"
    },
    {
        icon: <CameraIcon/>,
        desc: "DILARANG mengambil foto tanpa izin"
    },
    {
        icon: <PersonEatingIcon />,
        desc: "Makan dan minum sambil duduk"
    },
    {
        icon: <ShakeHandsIcon/>,
        desc: "TIDAK berjabat tangan dengan yang bukan mahrom"
    },
]


export default function Attitude() {
  return (
    <>
      <LineTitle colorLine="border-cream-300">
        <h1
          className={`${parisienFont.className}  text-cream-300 text-4xl font-semibold`}
        >
          Adab-adab Walimah
        </h1>
      </LineTitle>

      <div>
        <p className="text-center sm:text-lg text-sm max-w-md text-cream-100">
          Tanpa mengurangi rasa hormat, ada hal-hal dalam adab seorang muslim
          ketika menghadiri walimah yang harus diperhatikan :
        </p>
        <div className="grid grid-cols-2 gap-x-3 gap-y-5 mt-5">
         {iconAttributes.map(({icon,desc}: {
            icon : React.ReactNode,
            desc : string
         }) => (
            <LayoutIcon key={desc} icon={icon} desc={desc} />
          ))}
        </div>
      </div>
    </>
  );
}
