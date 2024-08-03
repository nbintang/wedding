"use client";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";

import NavbarMobile from "./NavbarMobile";
import { useScrollSections } from "../../../lib/hooks/useActions";

export default function Navbar() {
  const { handleClick } = useScrollSections();
  return (
    <header
      id="header"
      className="flex  h-20 w-full shrink-0  items-center px-4 md:px-6"
    >
      <NavbarMobile />
      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList>
          <NavigationMenuLink asChild>
            <Link

              href="#about"
              className={`group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors $`}
            >
              Tentang
            </Link>
          </NavigationMenuLink>
          <NavigationMenuItem>
            <Link
              href="#location"
              className={`group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors $`}
            >
              Lokasi Acara
            </Link>
          </NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="#contact"
              className={`group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors $`}
            >
              Kirim Pesan
            </Link>
          </NavigationMenuLink>
        </NavigationMenuList>
      </NavigationMenu>
      <div />
    </header>
  );
}
