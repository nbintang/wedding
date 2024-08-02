"use client";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import { useScrollSections } from "../../../lib/hooks/useActions";

const NavbarMobile = () => {
  const { handleClick } = useScrollSections();
  return (
    <Sheet>
      <SheetTrigger className="flex " asChild>
        <Button
          variant="default"
          size="icon"
          className="lg:hidden bg-cream-100 text-cream-900"
        >
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="bg-cream-100">
        <div className="grid gap-2 py-6">
          <SheetTrigger>
            <div
              className="flex w-full items-center text-cream-900 py-2 text-lg font-semibold"
              onClick={() => handleClick("about")}
            >
              Tentang
            </div>
          </SheetTrigger>
          <SheetTrigger>
            <div
              className="flex w-full text-cream-900 items-center py-2 text-lg font-semibold"
              onClick={() => handleClick("location")}
            >
              Lokasi Acara
            </div>
          </SheetTrigger>
          <SheetTrigger>
            <div
              className="flex text-cream-900 w-full items-center py-2 text-lg font-semibold"
              onClick={() => handleClick("contact")}
            >
              Kirim Pesan
            </div>
          </SheetTrigger>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavbarMobile;
