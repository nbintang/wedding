import React from "react";

const LayoutIcon = ({
  icon,
  desc,
}: {
  icon: React.ReactNode;
  desc: string;
}) => {
  return (
    <div className="flex flex-col gap-3 min-w-0 justify-center items-center">
      <div className="border-2 rounded-full p-3">{icon}</div>

      <p className="text-sm">{desc}</p>
    </div>
  );
};

export default LayoutIcon;
