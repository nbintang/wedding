import { parisienFont } from "@/fonts/fonts";
import React from "react";

const LineTitle = ({
  children,

  colorLine= "border-cream-900",
}: {
  children: React.ReactNode;

  colorLine?: string;
}) => {
  return (
    <div className={`${parisienFont.className} flex gap-3 justify-center items-center w-full`}>
      <span className={`${colorLine} border-t-2 p-1 w-3/12 rounded-l-full`}></span>
      {children}
      <span className={`${colorLine} border-t-2 p-1 w-3/12  rounded-r-full`}></span>
    </div>
  );
};

export default LineTitle;
