"use client";
import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ["Home", "About", "App", "Contact"];

  return (
    <Navbar
      shouldHideOnScroll
      onMenuOpenChange={setIsMenuOpen}
      className="bg-neutral-800 rounded-md shadow-md lg:px-40"
      maxWidth="full"
    >
      <NavbarContent>
        <NavbarBrand>
          <span className="flex items-center gap-3 cursor-pointer">
            <div className="rounded-full w-3 h-3 bg-green-400"></div>
            Available for work
          </span>
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-10" justify="end">
        {menuItems.map((item, index) => (
          <a href="#" key={index}>
            <NavbarItem>{item}</NavbarItem>
          </a>
        ))}
      </NavbarContent>
      <NavbarMenu className="bg-neutral-700">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
