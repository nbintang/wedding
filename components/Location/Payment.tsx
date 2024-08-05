"use client";
import { parisienFont } from "@/fonts/fonts";
import { useCopyPaste } from "@/lib/hooks/useCopyPaste";
import { Button } from "../ui/button";
import Image from "next/image";
import { CheckIcon, ClipboardIcon } from "lucide-react";
import LineTitle from "../fragments/LineTitle";

export default function Payment() {
  const { accountNumber, copyToClipboard, copied } = useCopyPaste();
  return (
    <>
      <LineTitle colorLine="border-cream-300">
        <h1
          className={`${parisienFont.className}  text-cream-300 text-4xl font-semibold`}
        >
          Beri Hadiah
        </h1>
      </LineTitle>
      <div className="flex flex-col gap-3 items-center shadow bg-cream-300 p-3 rounded-xl">
        <div className="flex flex-col items-center">
          <Image
            src="/images/assets/BSILOGO.png"
            alt="alt"
            width={100}
            height={100}
          />
          <h3 className="text-[#00a39e] text-2xl sm:text-3xl font-bold">
            Bank Syariah Indonesia
          </h3>
        </div>
        <p className="text-cream-900">
          No. Rekening: <span>{accountNumber} </span>
          <span className="text-xs flex items-start justify-center">
            A.N: Syafira Rahmani
          </span>
        </p>
        <Button
          variant={"outline"}
          className={`w-full bg-cream-900 text-cream-300 hover:bg-cream-700 hover:text-cream-300 ${
            copied && "bg-cream-700 text-cream-300"
          }`}
          onClick={() => copyToClipboard(accountNumber)}
        >
          <span className="flex gap-2 items-center ">
            {copied ? (
              <>
                <CheckIcon className="w-5 h-5" /> <p>Tersalin!</p>
              </>
            ) : (
              <>
                <ClipboardIcon className="w-5 h-5" />
                <p>Salin No. Rekening</p>
              </>
            )}
          </span>
        </Button>
      </div>
      <div>
        <p className="text-center sm:text-lg text-sm max-w-md text-cream-100">
          Jika memberi adalah tanda kasih anda, anda dapat memberikan hadiah
          secara cashless ke rekening mempelai atau kado ke alamat mempelai
        </p>
      </div>
    </>
  );
}
