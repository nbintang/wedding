import React from "react";

const LayoutSection = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => {
  return (
    <div
      id={id}
      className="flex w-full flex-col items-center gap-y-4 shadow-md sm:max-w-4xl max-w-sm mx-3 justify-center text-center px-3 py-7 rounded-xl bg-cream-900 text-cream-100"
    >
      {children}
    </div>
  );
};

export default LayoutSection;
